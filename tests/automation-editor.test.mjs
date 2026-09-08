import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

// Run the real application functions in isolation; no network or production writes.
const source = fs.readFileSync(new URL('../script.js', import.meta.url), 'utf8').replaceAll('import.meta.env', '({})');
const feedback = { style: {}, textContent: '' };
const storage = { getItem: () => null };
const document = {
  addEventListener() {}, documentElement: { setAttribute() {}, style: {} },
  getElementById: () => null, querySelector: () => null
};
const context = vm.createContext({ window: { addEventListener() {} }, document,
  localStorage: storage, sessionStorage: storage, console, structuredClone, assert, feedback });
vm.runInContext(source, context);
await vm.runInContext(`(async () => {
  let writes = 0, stored, succeed = true, renders = 0;
  persistSupabaseSection = async (key, rows) => {
    writes++;
    assert.equal(key, 'automation_data');
    if (succeed) stored = structuredClone(rows);
    return succeed;
  };
  renderAutomationDashboard = () => { renders++; };
  renderProjects = () => {};
  assert.equal(buildAutomationDataEditorModal(), '');
  assert.equal(await saveAutomationData(AUTOMATION_SOURCE_DATA), false);
  assert.equal(writes, 0);
  console.log('PASS: public users cannot open editor or save');

  APP_STATE.adminLoggedIn = true;
  const markup = buildAutomationDataEditorModal();
  assert.equal((markup.match(/class="automation-editor-row"/g) || []).length, 13);
  const defaults = getAutomationSourceData();
  const before = buildAutomationComparison(defaults).reduce((s,r) => s+r.savedMonthlyMins, 0);
  document.getElementById = (id) => id === 'automation-editor-body' ? {
    querySelectorAll: () => defaults.map(r => ({ dataset: { sourceKey: r.sourceKey },
      querySelector: selector => ({ value: r[selector.match(/name="(.*?)"/)[1]] ?? 160 }) }))
  } : null;
  const collected = collectAutomationEditorRows();
  assert.equal(collected[0].projectId, defaults[0].projectId);
  assert.equal(collected[0].roles, defaults[0].roles);
  assert.equal(await saveAutomationData(collected), true);
  const after = AUTOMATION_COMPARISON.reduce((s,r) => s+r.savedMonthlyMins, 0);
  assert.ok(Math.abs(before-after)<0.000001);
  assert.equal(renders, 1);
  console.log('PASS: 13-row editor round trip preserves metadata and saved minutes:', after);

  const updated = structuredClone(collected);
  updated[0].manualVolumeMonth = updated[0].autoVolumeMonth = 200;
  await saveAutomationData(updated);
  const benefit = computeAutomationBenefits(AUTOMATION_COMPARISON[0], 1);
  assert.ok(Math.abs(benefit.hoursSaved - Math.round((updated[0].manualAvgMins-updated[0].autoAvgMins)*200/60 * 10) / 10) < 1e-8);
  APP_STATE.automationData = normalizeAutomationSourceRows(JSON.parse(JSON.stringify(stored)));
  rebuildAutomationComparison();
  assert.equal(AUTOMATION_COMPARISON[0].monthlyTransactions, 200);
  console.log('PASS: edited volume recalculates and survives stored-data reload');

  succeed = false;
  const previous = JSON.stringify(APP_STATE.automationData);
  assert.equal(await saveAutomationData(defaults), false);
  assert.equal(JSON.stringify(APP_STATE.automationData), previous);
  console.log('PASS: failed persistence preserves last saved data');

  document.querySelector = () => feedback;
  collectAutomationEditorRows = () => [];
  const beforeInvalid = writes;
  await handleAutomationEditorSave();
  assert.match(feedback.textContent, /at least one/);
  assert.equal(writes, beforeInvalid);
  collectAutomationEditorRows = () => [{label:'',manualVolumeMonth:1}];
  await handleAutomationEditorSave();
  assert.match(feedback.textContent, /needs a name/);
  collectAutomationEditorRows = () => [{label:'Test',manualVolumeMonth:0}];
  await handleAutomationEditorSave();
  assert.match(feedback.textContent, /greater than 0/);
  assert.equal(writes, beforeInvalid);
  console.log('PASS: empty editor, missing name and zero volume blocked');

  succeed = true;
  await saveAutomationData(defaults);
  assert.ok(Math.abs(AUTOMATION_COMPARISON.reduce((s,r)=>s+r.savedMonthlyMins,0)-before)<1e-8);
  APP_STATE.adminLoggedIn = false;
  assert.equal(buildAutomationDataEditorModal(), '');
  assert.equal(await saveAutomationData(defaults), false);
  console.log('PASS: reset restores defaults and logout blocks editor');

  // The Department selector must filter the three lifecycle cards and their
  // drill-down project arrays, not merely the solution-level charts.
  APP_STATE.automationDepartment = 'Accounting';
  APP_STATE.automationPeriod = 'annual';
  const accountingSummaries = buildAutomationStatusSummaries();
  const accountingProjects = accountingSummaries.flatMap(summary => summary.projects);
  assert.ok(accountingProjects.length > 0, 'Accounting should have linked projects');
  assert.ok(accountingProjects.every(item => item.department === 'Accounting'));
  assert.equal(
    accountingSummaries.reduce((sum, summary) => sum + summary.projectCount, 0),
    accountingProjects.length
  );
  assert.equal(
    accountingSummaries.reduce((sum, summary) => sum + summary.projectCount, 0),
    APP_STATE.projects.filter(project => projectMatchesAutomationDepartment(project)).length
  );
  APP_STATE.automationDepartment = 'all';
  console.log('PASS: department filter scopes lifecycle cards and drill-down projects');

  const workbookV3Annual = AUTOMATION_COMPARISON.map(entry => computeAutomationBenefits(entry, 12));
  assert.equal(workbookV3Annual.length, 13);
  assert.ok(Math.abs(workbookV3Annual.reduce((sum, item) => sum + item.hoursSaved, 0) - 17832.8) < 0.000001);
  assert.ok(Math.abs(workbookV3Annual.reduce((sum, item) => sum + item.capacityReleaseFte, 0) - 9.14657051282051) < 0.000001);
  assert.ok(Math.abs(workbookV3Annual.reduce((sum, item) => sum + item.totalBenefitPhp, 0) - 525270.367124934) < 0.000001);
  assert.ok(workbookV3Annual.some(item => item.label === 'Costing BCBD Automation' && item.department === 'Costing Department'));
  assert.ok(workbookV3Annual.some(item => item.label === 'Purchasing AP Invoicing' && item.projectId === 'm88apinvoice'));
  console.log('PASS: workbook v3 data totals and project mappings match the dashboard');
})()`, context);
