/*
 * Madison88 IT Headquarters data configuration.
 * Update names, links, statuses, descriptions, and announcements here.
 * Non-developers can safely edit the text values in this object.
 */
const APP_CONFIG = {
    timezone: "Asia/Manila",
    overview: {
        currentUser: "Madison88 Team",
        heroDescription: "One launchpad for support, systems, projects, and the people keeping Madison88 running at full speed.",
        stats: { tickets: 18, uptime: 99.98, users: 246, projects: 7 },
        ticketUpdates: [
            "3 printer incidents were cleared in the last hour",
            "ERP maintenance begins tonight at 9:00 PM PHT",
            "VPN onboarding guide updated for new hires",
            "Inventory portal response time improved by 28%"
        ]
    },
    projects: [
        { id: "madison-link", name: "MadisonLink", status: "Live", filter: "active", description: "Company-wide communication and requests portal for all employees.", progress: 94, owner: "PA", ownerName: "Paul Avendano", updated: "Updated 18 minutes ago", team: ["PA", "LM", "JC"], systemUrl: "https://intranet.madison88.local/madisonlink", restricted: false },
        { id: "hq-helpdesk", name: "HQ Helpdesk", status: "In Progress", filter: "in-progress", description: "Unified ticket intake, SLA tracking, and support workflow for every branch.", progress: 78, owner: "LM", ownerName: "Lester Mendoza", updated: "Updated today, 10:40 AM", team: ["LM", "MP", "SS"], systemUrl: "", restricted: true },
        { id: "asset-vault", name: "Asset Vault", status: "Planning", filter: "in-progress", description: "Hardware lifecycle dashboard for laptops, printers, scanners, and warehouse devices.", progress: 42, owner: "JC", ownerName: "John Carlo Manalo", updated: "Updated yesterday", team: ["JC", "SS", "MG"], systemUrl: "", restricted: true },
        { id: "security-center", name: "Security Center", status: "Live", filter: "active", description: "Identity, endpoint, and cyber monitoring cockpit for high-priority systems.", progress: 97, owner: "MP", ownerName: "Mhark Pentinio", updated: "Updated 6 minutes ago", team: ["MP", "LM"], systemUrl: "https://intranet.madison88.local/security-center", restricted: true },
        { id: "org-analytics", name: "Org Analytics", status: "Completed", filter: "completed", description: "Executive reporting workspace for adoption, support trends, and infrastructure metrics.", progress: 100, owner: "PA", ownerName: "Paul Avendano", updated: "Completed last week", team: ["PA", "JC"], systemUrl: "https://intranet.madison88.local/org-analytics", restricted: false }
    ],
    services: [
        { category: "Communication", items: [{ icon: "✉", name: "Mail Center", description: "Email, distribution lists, and signatures.", status: "online", url: "https://mail.madison88.local" }, { icon: "☏", name: "Voice Hub", description: "Call routing and extension directory.", status: "online", url: "https://voice.madison88.local" }] },
        { category: "Files & Storage", items: [{ icon: "⬒", name: "Shared Drives", description: "Department folders and access points.", status: "online", url: "https://files.madison88.local" }, { icon: "⎙", name: "Print Queue", description: "Printer availability and job release.", status: "offline", url: "#" }] },
        { category: "HR Systems", items: [{ icon: "◔", name: "People Portal", description: "Leave, payroll, and employee records.", status: "online", url: "https://hr.madison88.local" }] },
        { category: "Security", items: [{ icon: "⛨", name: "Access Manager", description: "Passwords, MFA, and role approvals.", status: "online", url: "https://access.madison88.local" }] },
        { category: "Monitoring", items: [{ icon: "◴", name: "System Pulse", description: "Live uptime, alerts, and performance.", status: "online", url: "https://pulse.madison88.local" }] }
    ],
    team: [
        { name: "Paul Avendano", role: "Project Manager", level: "senior", status: "Online", skills: ["Delivery", "Stakeholder Ops", "Planning"], message: "paul.avendano@madison88.com", email: "paul.avendano@madison88.com", number: "+63 917 800 1101", school: "Polytechnic University of the Philippines", linkedin: "https://www.linkedin.com/in/paul-avendano", contactFor: "Project approvals and cross-team coordination", image: "paul_pm_portrait_1774849659547.png" },
        { name: "Lester Mendoza", role: "System Administrator", level: "senior", status: "In a Meeting", skills: ["Infrastructure", "Network", "Identity"], message: "lester.mendoza@madison88.com", email: "lester.mendoza@madison88.com", number: "+63 917 800 1102", school: "Technological Institute of the Philippines", linkedin: "https://www.linkedin.com/in/lester-mendoza", contactFor: "Account, server, network, and access issues", image: "lester_sysadmin_portrait_1774849673559.png" },
        { name: "John Carlo Manalo", role: "IT Intern", level: "intern", status: "Online", skills: ["Support", "Documentation", "UI/UX"], message: "johncarlo.manalo@madison88.com", email: "johncarlo.manalo@madison88.com", number: "+63 917 800 1103", school: "National University", linkedin: "https://www.linkedin.com/in/john-carlo-manalo", contactFor: "Portal updates, user guides, and basic support", image: "intern_carlo_portrait_1774849747248.png" },
        { name: "John Sedrick Sarol", role: "IT Intern", level: "intern", status: "Away", skills: ["Hardware", "Troubleshooting", "Deployment"], message: "johnsedrick.sarol@madison88.com", email: "johnsedrick.sarol@madison88.com", number: "+63 917 800 1104", school: "STI College", linkedin: "https://www.linkedin.com/in/john-sedrick-sarol", contactFor: "Device setup, peripherals, and workstation issues", image: "intern_sedrick_portrait_1774849784438.png" },
        { name: "Stephanie Guce", role: "IT Intern", level: "intern", status: "Online", skills: ["UI/UX", "Content", "Training"], message: "stephanie.guce@madison88.com", email: "stephanie.guce@madison88.com", number: "+63 917 800 1105", school: "Far Eastern University", linkedin: "https://www.linkedin.com/in/stephanie-guce", contactFor: "Interface guidance and process walkthroughs", image: "intern_stephanie_portrait_1774849903805.png" },
        { name: "Mhark Pentinio", role: "IT Intern", level: "intern", status: "Online", skills: ["Cybersecurity", "Monitoring", "Endpoint Care"], message: "mhark.pentinio@madison88.com", email: "mhark.pentinio@madison88.com", number: "+63 917 800 1106", school: "AMA Computer College", linkedin: "https://www.linkedin.com/in/mhark-pentinio", contactFor: "Security concerns and suspicious activity reports", image: "intern_mhark_portrait_1774849921272.png" }
    ],
    quickHelp: [
        { label: "IT Responsibility Map", title: "Account access, password reset, and VPN", body: "Best handled by Lester Mendoza for identity, server, and access-related concerns.", action: "Message Lester", actionType: "message", value: "lester.mendoza@madison88.com", person: "Lester Mendoza" },
        { label: "Team Coverage", title: "Project approvals and cross-team coordination", body: "Route rollout approvals, timelines, and cross-department planning to Paul Avendano.", action: "Message Paul", actionType: "message", value: "paul.avendano@madison88.com", person: "Paul Avendano" },
        { label: "Who To Contact", title: "Hardware setup, peripherals, and workstation issues", body: "For device support and deployment concerns, contact John Sedrick Sarol.", action: "Message Sedrick", actionType: "message", value: "johnsedrick.sarol@madison88.com", person: "John Sedrick Sarol" },
        { label: "Find The Right IT Person", title: "Portal guidance, onboarding help, and documentation", body: "For walkthroughs, user guidance, and UI-related help, contact Stephanie Guce or John Carlo Manalo.", action: "View Team", actionType: "url", value: "#team" }
    ],
    supportCards: [
        { label: "Priority Lane", title: "Submit a ticket", body: "For device, access, printer, email, or account issues.", action: "Open Support Form", actionType: "modal", value: "ticket" },
        { label: "Direct Contact", title: "Talk to the right IT lead", body: "Reach the correct person faster for approvals, access, or urgent coordination.", action: "Contact IT Lead", actionType: "message", value: "lester.mendoza@madison88.com", person: "Lester Mendoza" }
    ],
    missionVision: {
        mission: "Deliver reliable, secure, and people-first IT services that keep Madison88 teams productive, connected, and ready to move.",
        vision: "Build a modern IT environment where every Madison88 employee can work faster, collaborate better, and trust the systems behind the business."
    },
    adminCredentials: {
        username: "admin123",
        password: "admin123"
    }
};

const STORAGE_KEYS = {
    projectData: "madison88-project-data",
    overviewData: "madison88-overview-data",
    serviceData: "madison88-service-data",
    teamData: "madison88-team-data",
    quickHelpData: "madison88-quickhelp-data",
    supportData: "madison88-support-data",
    adminSession: "madison88-admin-session"
};

const APP_STATE = {
    overview: loadOverview(),
    projects: loadProjects(),
    services: loadServices(),
    team: loadTeam(),
    quickHelp: loadQuickHelp(),
    supportCards: loadSupportCards(),
    adminLoggedIn: sessionStorage.getItem(STORAGE_KEYS.adminSession) === "true"
};

document.addEventListener("DOMContentLoaded", () => {
    setupLoader();
    setupCursorAndSpotlight();
    syncOverviewProjectCount();
    renderStats();
    renderTicker();
    renderProjects(APP_STATE.projects);
    renderServices();
    renderTeam();
    renderContactGuide();
    renderQuickHelp();
    renderSupportCards();
    renderMissionVision();
    setupProjectFilters();
    setupSearch();
    setupClock();
    setupNavigation();
    setupModalSystem();
    setupProjectAdmin();
    setupRevealAnimations();
    setupLenis();
});

function setupLoader() {
    const loader = document.getElementById("loader");
    if (!loader) return;
    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.classList.add("fade-out");
            animateCounters();
            setTimeout(() => { loader.style.display = "none"; }, 900);
        }, 1800);
    });
}

function setupCursorAndSpotlight() {
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");
    if (!cursorDot || !cursorOutline) return;

    let mouseX = 0, mouseY = 0, outlineX = 0, outlineY = 0;
    window.addEventListener("mousemove", (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
        document.body.classList.toggle("cursor-active", Boolean(event.target.closest("a, button, input, .glass")));

        document.querySelectorAll(".glass").forEach((card) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
            card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
        });
    });

    const animate = () => {
        outlineX += (mouseX - outlineX) * 0.14;
        outlineY += (mouseY - outlineY) * 0.14;
        cursorOutline.style.left = `${outlineX}px`;
        cursorOutline.style.top = `${outlineY}px`;
        requestAnimationFrame(animate);
    };
    animate();
}

function renderStats() {
    document.getElementById("user-name").textContent = APP_STATE.overview.currentUser;
    document.getElementById("hero-description").textContent = APP_STATE.overview.heroDescription;
    const notificationBadge = document.getElementById("notification-badge");
    if (notificationBadge) notificationBadge.textContent = APP_STATE.overview.stats.tickets;
    document.querySelectorAll(".stat-number").forEach((element) => {
        element.dataset.target = APP_STATE.overview.stats[element.dataset.statKey];
    });
}

function renderTicker() {
    const track = document.getElementById("status-ticker-track");
    if (!track) return;
    const items = [...APP_STATE.overview.ticketUpdates, ...APP_STATE.overview.ticketUpdates];
    track.innerHTML = items.map((item) => `<span class="ticker-pill"><strong>IT Update</strong><span>${item}</span></span>`).join("");
}

function renderProjects(projects) {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    grid.innerHTML = projects.map((project) => {
        const isAdmin = APP_STATE.adminLoggedIn;
        const openButton = project.systemUrl
            ? `<button class="btn btn-primary" type="button" data-open-url="${project.systemUrl}">Open System</button>`
            : `<button class="btn btn-primary" type="button" data-project-modal="${project.id}">Open System</button>`;
        const requestButton = project.restricted
            ? `<button class="btn btn-secondary" type="button" data-modal="access" data-project-name="${project.name}">Request Access</button>`
            : `<button class="btn btn-secondary" type="button" data-project-modal="${project.id}">View Details</button>`;

        return `
            <article class="project-card glass reveal searchable-item ${isAdmin ? "is-admin" : ""}" data-filter="${project.filter}" data-search="${buildSearchText([project.name, project.description, project.ownerName, project.status, project.overseenBy, project.assignedBy])}">
                <div class="project-header">
                    <div class="project-title-block">
                        <span class="status-badge ${mapStatusClass(project.status)}">${project.status}</span>
                        <h3>${project.name}</h3>
                        <p>${project.description}</p>
                    </div>
                    <div class="project-header-meta">
                        <span class="project-updated">${project.updated}</span>
                        ${isAdmin ? '<span class="project-admin-chip">Admin Ready</span>' : ""}
                    </div>
                </div>
                <div class="progress-wrap">
                    <div class="project-progress-line"><span>Progress</span><strong>${project.progress}%</strong></div>
                    <div class="progress-track"><div class="progress-fill" style="width:${project.progress}%"></div></div>
                </div>
                <div class="project-footer">
                    <div class="project-owner-area">
                        <div class="project-owner-inline">
                            <div class="owner-chip"><span class="owner-avatar">${project.owner}</span><span>Owner: ${project.ownerName}</span></div>
                            <div class="avatar-stack">${project.team.map((member) => `<span>${member}</span>`).join("")}</div>
                        </div>
                        <div class="project-admin-meta">
                            <span>Overseen by: ${project.overseenBy}</span>
                            <span>Assigned by: ${project.assignedBy}</span>
                        </div>
                        <div class="project-actions">
                            ${openButton}
                            ${requestButton}
                            ${isAdmin ? `<button class="btn btn-secondary" type="button" data-edit-project="${project.id}">Edit Project</button>` : ""}
                        </div>
                    </div>
                </div>
            </article>
        `;
    }).join("");
    updateAdminUI();
    setupRevealAnimations();
    refreshSearchResults();
}

function renderServices() {
    const container = document.getElementById("services-grid");
    if (!container) return;
    const isAdmin = APP_STATE.adminLoggedIn;

    container.innerHTML = APP_STATE.services.map((group) => `
        <section class="service-category">
            <h3>${group.category}</h3>
            <div class="service-grid">
                ${group.items.map((service, index) => `
                    <article class="service-tile glass reveal searchable-item" data-search="${buildSearchText([group.category, service.name, service.description, service.status])}">
                        <div class="service-header">
                            <span class="service-icon">${service.icon}</span>
                            <span class="status-dot ${service.status === "offline" ? "offline" : ""}"></span>
                        </div>
                        <div><h4>${service.name}</h4><p class="service-copy">${service.description}</p></div>
                        <div class="tile-meta">
                            <span class="status-badge ${service.status === "online" ? "status-online" : "status-planning"}">${service.status}</span>
                            <button class="btn btn-secondary" type="button" data-open-url="${service.url}" ${service.url === "#" ? 'data-modal="offline"' : ""}>Launch</button>
                        </div>
                        ${isAdmin ? `<button class="btn btn-secondary" type="button" data-edit-service="${group.category}" data-edit-service-index="${index}">Edit Service</button>` : ""}
                    </article>
                `).join("")}
            </div>
        </section>
    `).join("");
    setupRevealAnimations();
    refreshSearchResults();
}

function renderTeam() {
    const grid = document.getElementById("team-grid");
    if (!grid) return;
    const isAdmin = APP_STATE.adminLoggedIn;

    grid.innerHTML = APP_STATE.team.map((member, index) => {
        const assignments = getProjectsForMember(member);
        const assignmentSummary = assignments.length
            ? assignments.slice(0, 2).map((project) => project.name).join(" | ")
            : "No active project assignment yet";

        return `
        <article class="team-card glass reveal searchable-item ${member.level}" data-search="${buildSearchText([member.name, member.role, member.contactFor, assignmentSummary, ...member.skills])}">
            <div class="team-photo-wrap">
                <img class="team-photo" src="${member.image}" alt="${member.name}">
                <div class="team-photo-overlay"></div>
            </div>
            <div class="team-card-body">
            <div class="member-header">
                <div>
                    <h3>${member.name}</h3>
                    <p class="member-role">${member.role}</p>
                </div>
                <span class="status-badge ${mapStatusClass(member.status)}">${member.status}</span>
            </div>
            <p>${member.contactFor}</p>
            <div class="skill-tags">${member.skills.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}</div>
            <div class="member-assignment">
                <span class="member-assignment-label">Assigned Projects</span>
                <p>${assignmentSummary}</p>
            </div>
            <div class="member-actions">
                <button class="btn btn-primary" type="button" data-message="${member.email}" data-member="${member.name}">Message</button>
                <button class="btn btn-secondary" type="button" data-modal="profile" data-member="${member.name}">View Profile</button>
                ${isAdmin ? `<button class="btn btn-secondary" type="button" data-edit-team="${index}">Edit Member</button>` : ""}
            </div>
            </div>
        </article>
    `;
    }).join("");
    setupRevealAnimations();
    refreshSearchResults();
}

function renderContactGuide() {
    const guide = document.getElementById("contact-guide");
    if (!guide) return;
    const rows = [
        { label: "Identity and Access", issue: "Account access, password reset, or VPN issue", owner: "Lester Mendoza", initials: "LM" },
        { label: "Training and Guidance", issue: "Need training, portal help, or UI walkthrough", owner: "Stephanie Guce", initials: "SG" },
        { label: "Hardware and Setup", issue: "Hardware setup, peripherals, or deployment support", owner: "John Sedrick Sarol", initials: "JS" },
        { label: "Project Ownership", issue: "Project approvals or system rollout concerns", owner: "Paul Avendano", initials: "PA" }
    ];
    guide.innerHTML = rows.map((row) => `
        <div class="guide-row searchable-item" data-search="${buildSearchText([row.label, row.issue, row.owner])}">
            <div class="guide-main">
                <span class="guide-kicker">${row.label}</span>
                <strong class="guide-title">${row.issue}</strong>
                <p class="guide-caption">Recommended contact</p>
            </div>
            <span class="guide-person"><span class="guide-person-badge">${row.initials}</span>${row.owner}</span>
        </div>
    `).join("");
    refreshSearchResults();
}

function renderQuickHelp() {
    const container = document.getElementById("quick-help-grid");
    if (!container) return;
    const isAdmin = APP_STATE.adminLoggedIn;

    container.innerHTML = APP_STATE.quickHelp.map((item, index) => `
        <article class="quick-help-card glass searchable-item" data-search="${buildSearchText([item.label, item.title, item.body, item.action, item.person || ""])}">
            <div class="quick-help-top">
                <span class="quick-help-label">${item.label}</span>
            </div>
            <div>
                <h3>${item.title}</h3>
                <p class="announcement-body">${item.body}</p>
            </div>
            ${item.actionType === "url"
                ? `<button class="btn btn-secondary" type="button" data-open-url="${item.value}">${item.action}</button>`
                : item.actionType === "message"
                ? `<button class="btn btn-secondary" type="button" data-message="${item.value}" data-member="${item.person}">${item.action}</button>`
                : `<button class="btn btn-secondary" type="button" data-modal="${item.value}">${item.action}</button>`
            }
            ${isAdmin ? `<button class="btn btn-secondary" type="button" data-edit-help="${index}">Edit Card</button>` : ""}
        </article>
    `).join("");
    refreshSearchResults();
}

function renderSupportCards() {
    const container = document.getElementById("support-stack");
    if (!container) return;
    const isAdmin = APP_STATE.adminLoggedIn;

    container.innerHTML = APP_STATE.supportCards.map((item, index) => `
        <div class="support-card searchable-item" data-search="${buildSearchText([item.label, item.title, item.body, item.action, item.person || ""])}">
            <span class="support-kicker">${item.label}</span>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
            ${item.actionType === "modal"
                ? `<button class="btn btn-primary" type="button" data-modal="${item.value}">${item.action}</button>`
                : item.actionType === "message"
                ? `<button class="btn btn-secondary" type="button" data-message="${item.value}" data-member="${item.person}">${item.action}</button>`
                : `<button class="btn btn-secondary" type="button" data-open-url="${item.value}">${item.action}</button>`
            }
            ${isAdmin ? `<button class="btn btn-secondary" type="button" data-edit-support="${index}">Edit Support Card</button>` : ""}
        </div>
    `).join("");
    refreshSearchResults();
}

function renderMissionVision() {
    const containers = document.querySelectorAll("[data-mission-vision-panel]");
    if (!containers.length) return;

    const content = `
        <article class="mission-vision-card glass searchable-item" data-search="${buildSearchText(["Madison88 IT", "Mission", APP_CONFIG.missionVision.mission, "Vision", APP_CONFIG.missionVision.vision])}">
            <span class="quick-help-label">Madison88 IT</span>
            <div class="mission-vision-block">
                <h3>Mission</h3>
                <p class="announcement-body">${APP_CONFIG.missionVision.mission}</p>
            </div>
            <div class="mission-vision-block">
                <h3>Vision</h3>
                <p class="announcement-body">${APP_CONFIG.missionVision.vision}</p>
            </div>
        </article>
    `;

    containers.forEach((container) => {
        container.innerHTML = content;
    });
    refreshSearchResults();
}

function setupProjectFilters() {
    const wrap = document.getElementById("project-filters");
    if (!wrap) return;
    wrap.addEventListener("click", (event) => {
        const button = event.target.closest(".filter-tab");
        if (!button) return;
        const filter = button.dataset.filter;
        wrap.querySelectorAll(".filter-tab").forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");
        document.querySelectorAll("#projects-grid .project-card").forEach((card) => {
            card.classList.toggle("hidden-by-search", !(filter === "all" || card.dataset.filter === filter));
        });
    });
}

function setupProjectAdmin() {
    const loginButton = document.getElementById("admin-login-button");
    const overviewButton = document.getElementById("edit-overview-button");
    const addProjectButton = document.getElementById("add-project-button");
    const addTeamButton = document.getElementById("add-team-button");

    if (loginButton) {
        loginButton.addEventListener("click", () => {
            if (APP_STATE.adminLoggedIn) {
                openManagedModal(buildBulkEditModal());
                return;
            }
            openManagedModal(buildAdminLoginModal());
        });
    }

    if (overviewButton) {
        overviewButton.addEventListener("click", () => {
            openManagedModal(buildOverviewEditModal());
        });
    }

    if (addProjectButton) {
        addProjectButton.addEventListener("click", () => {
            if (!APP_STATE.adminLoggedIn) return;
            openManagedModal(buildProjectCreateModal());
        });
    }

    if (addTeamButton) {
        addTeamButton.addEventListener("click", () => {
            if (!APP_STATE.adminLoggedIn) return;
            openManagedModal(buildTeamCreateModal());
        });
    }

    updateAdminUI();
}

function setupSearch() {
    const input = document.getElementById("global-search");
    const clearButton = document.getElementById("clear-search");
    if (!input || !clearButton) return;

    input.addEventListener("input", refreshSearchResults);
    clearButton.addEventListener("click", () => {
        input.value = "";
        refreshSearchResults();
        input.focus();
    });
}

function setupClock() {
    const timeEl = document.getElementById("current-time");
    const dateEl = document.getElementById("current-date");
    const greetingEl = document.getElementById("greeting-part");
    if (!timeEl || !dateEl || !greetingEl) return;

    const updateClock = () => {
        const now = new Date();
        const hour = Number(new Intl.DateTimeFormat("en-PH", { timeZone: APP_CONFIG.timezone, hour: "numeric", hour12: false }).format(now));
        greetingEl.textContent = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";
        timeEl.textContent = new Intl.DateTimeFormat("en-PH", { timeZone: APP_CONFIG.timezone, hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true }).format(now);
        dateEl.textContent = new Intl.DateTimeFormat("en-PH", { timeZone: APP_CONFIG.timezone, weekday: "long", month: "long", day: "numeric", year: "numeric" }).format(now);
    };

    updateClock();
    setInterval(updateClock, 1000);
}

function setupNavigation() {
    const links = document.querySelectorAll("[data-section-link]");
    const sections = [...document.querySelectorAll("main [id]")];
    if (!links.length || !sections.length) return;

    const setActive = () => {
        const current = sections.find((section) => {
            const rect = section.getBoundingClientRect();
            return rect.top <= 160 && rect.bottom >= 160;
        }) || sections[0];
        links.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${current.id}`));
    };

    window.addEventListener("scroll", setActive, { passive: true });
    setActive();
}

function setupModalSystem() {
    const modal = document.getElementById("universal-modal");
    const modalBody = document.getElementById("modal-body");
    const closeButton = document.querySelector(".modal-close");
    if (!modal || !modalBody || !closeButton) return;

    const openModal = (content) => {
        modalBody.innerHTML = content;
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        if (window.lenisInstance) window.lenisInstance.stop();
        document.body.style.overflow = "hidden";
    };
    const closeModal = () => {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        if (window.lenisInstance) window.lenisInstance.start();
        document.body.style.overflow = "";
    };

    window.dashboardOpenModal = openModal;
    window.dashboardCloseModal = closeModal;

    closeButton.addEventListener("click", closeModal);
    modal.addEventListener("click", (event) => { if (event.target === modal) closeModal(); });
    document.addEventListener("change", async (event) => {
        const fileInput = event.target.closest("[data-team-photo-input]");
        if (!fileInput) return;

        const form = fileInput.closest("form");
        const preview = form?.querySelector("[data-team-photo-preview]");
        const hiddenInput = form?.querySelector('input[name="photoData"]');
        const urlInput = form?.querySelector('input[name="image"]');
        const file = fileInput.files?.[0];
        if (!hiddenInput || !preview || !urlInput) return;

        if (!file) {
            const fallback = urlInput.value.trim();
            hiddenInput.value = fallback;
            preview.src = fallback || getDefaultTeamImage("intern");
            return;
        }

        const dataUrl = await readFileAsDataUrl(file);
        hiddenInput.value = dataUrl;
        urlInput.value = dataUrl;
        preview.src = dataUrl;
    });

    document.addEventListener("submit", (event) => {
        const loginForm = event.target.closest("#admin-login-form");
        if (loginForm) {
            event.preventDefault();
            const formData = new FormData(loginForm);
            const username = String(formData.get("username") || "").trim();
            const password = String(formData.get("password") || "").trim();
            const feedback = loginForm.querySelector(".admin-feedback");

            if (username === APP_CONFIG.adminCredentials.username && password === APP_CONFIG.adminCredentials.password) {
                APP_STATE.adminLoggedIn = true;
                sessionStorage.setItem(STORAGE_KEYS.adminSession, "true");
                renderStats();
                renderTicker();
                renderProjects(APP_STATE.projects);
                renderServices();
                renderTeam();
                renderQuickHelp();
                renderSupportCards();
                updateAdminUI();
                closeModal();
                return;
            }

            if (feedback) feedback.textContent = "Invalid IT Team credentials.";
            return;
        }

        const editForm = event.target.closest("#project-edit-form");
        if (editForm) {
            event.preventDefault();
            if (!requireAdminAccess()) return;
            const formData = new FormData(editForm);
            const id = String(formData.get("projectId"));
            const team = parseTeamList(String(formData.get("team") || ""));
            const ownerInitials = normalizeMemberIdentifier(String(formData.get("owner") || ""));
            const ownerNameInput = String(formData.get("ownerName") || "").trim();
            const overseenByInput = String(formData.get("overseenBy") || "").trim();
            const assignedByInput = String(formData.get("assignedBy") || "").trim();
            APP_STATE.projects = APP_STATE.projects.map((project) => project.id === id ? {
                ...project,
                name: String(formData.get("name") || project.name),
                status: String(formData.get("status") || project.status),
                filter: String(formData.get("filter") || project.filter),
                description: String(formData.get("description") || project.description),
                progress: clampProgress(formData.get("progress"), project.progress),
                owner: ownerInitials || project.owner,
                ownerName: ownerNameInput || resolveMemberName(ownerInitials, project.ownerName),
                overseenBy: overseenByInput || resolveMemberName(ownerInitials, project.overseenBy),
                assignedBy: assignedByInput || "Admin",
                updated: String(formData.get("updated") || project.updated)
                .trim(),
                systemUrl: String(formData.get("systemUrl") || "").trim(),
                restricted: formData.get("restricted") === "on",
                team
            } : project);
            saveProjects();
            renderStats();
            renderProjects(APP_STATE.projects);
            renderTeam();
            closeModal();
            return;
        }

        const createProjectForm = event.target.closest("#project-create-form");
        if (createProjectForm) {
            event.preventDefault();
            if (!requireAdminAccess()) return;
            const formData = new FormData(createProjectForm);
            const projectName = String(formData.get("name") || "").trim();
            const ownerInput = String(formData.get("owner") || "").trim();
            const ownerInitials = normalizeMemberIdentifier(ownerInput);
            const ownerName = String(formData.get("ownerName") || "").trim() || resolveMemberName(ownerInitials, ownerInput || "Unassigned");
            const team = parseTeamList(String(formData.get("team") || ""));
            const newProject = normalizeProject({
                id: createProjectId(projectName),
                name: projectName || "New Project",
                status: String(formData.get("status") || "Planning"),
                filter: String(formData.get("filter") || "in-progress"),
                description: String(formData.get("description") || "New internal project"),
                progress: clampProgress(formData.get("progress"), 0),
                owner: ownerInitials,
                ownerName,
                overseenBy: String(formData.get("overseenBy") || "").trim() || ownerName || "Admin",
                assignedBy: String(formData.get("assignedBy") || "").trim() || "Admin",
                updated: String(formData.get("updated") || "").trim() || "Updated just now",
                team,
                systemUrl: String(formData.get("systemUrl") || "").trim(),
                restricted: formData.get("restricted") === "on"
            });
            APP_STATE.projects = [newProject, ...APP_STATE.projects];
            APP_STATE.overview.stats.projects = APP_STATE.projects.length;
            saveProjects();
            saveOverview();
            renderStats();
            renderProjects(APP_STATE.projects);
            renderTeam();
            closeModal();
            return;
        }

        const overviewForm = event.target.closest("#overview-edit-form");
        if (overviewForm) {
            event.preventDefault();
            if (!requireAdminAccess()) return;
            const formData = new FormData(overviewForm);
            APP_STATE.overview = {
                currentUser: String(formData.get("currentUser") || APP_STATE.overview.currentUser),
                heroDescription: String(formData.get("heroDescription") || APP_STATE.overview.heroDescription),
                stats: {
                    tickets: clampProgress(formData.get("tickets"), APP_STATE.overview.stats.tickets),
                    uptime: clampDecimal(formData.get("uptime"), APP_STATE.overview.stats.uptime),
                    users: clampProgress(formData.get("users"), APP_STATE.overview.stats.users),
                    projects: clampProgress(formData.get("projects"), APP_STATE.overview.stats.projects)
                },
                ticketUpdates: parseMultilineList(String(formData.get("ticketUpdates") || APP_STATE.overview.ticketUpdates.join("\n")))
            };
            saveOverview();
            renderStats();
            renderTicker();
            closeModal();
            return;
        }

        const serviceForm = event.target.closest("#service-edit-form");
        if (serviceForm) {
            event.preventDefault();
            if (!requireAdminAccess()) return;
            const formData = new FormData(serviceForm);
            const category = String(formData.get("category"));
            const index = Number(formData.get("serviceIndex"));
            APP_STATE.services = APP_STATE.services.map((group) => group.category === category ? {
                ...group,
                items: group.items.map((item, itemIndex) => itemIndex === index ? {
                    ...item,
                    icon: String(formData.get("icon") || item.icon),
                    name: String(formData.get("name") || item.name),
                    description: String(formData.get("description") || item.description),
                    status: String(formData.get("status") || item.status),
                    url: String(formData.get("url") || item.url).trim()
                } : item)
            } : group);
            saveServices();
            renderServices();
            closeModal();
            return;
        }

        const teamForm = event.target.closest("#team-edit-form");
        if (teamForm) {
            event.preventDefault();
            if (!requireAdminAccess()) return;
            const formData = new FormData(teamForm);
            const index = Number(formData.get("teamIndex"));
            const previousMember = APP_STATE.team[index];
            APP_STATE.team = APP_STATE.team.map((member, memberIndex) => memberIndex === index ? {
                ...member,
                name: String(formData.get("name") || member.name),
                role: String(formData.get("role") || member.role),
                status: String(formData.get("status") || member.status),
                contactFor: String(formData.get("contactFor") || member.contactFor),
                message: String(formData.get("email") || formData.get("message") || member.message),
                email: String(formData.get("email") || member.email || member.message),
                number: String(formData.get("number") || member.number || ""),
                school: String(formData.get("school") || member.school || ""),
                linkedin: String(formData.get("linkedin") || member.linkedin || ""),
                image: String(formData.get("photoData") || formData.get("image") || member.image),
                skills: parseCommaList(String(formData.get("skills") || member.skills.join(",")))
            } : member);
            APP_STATE.projects = syncProjectsWithTeamMember(previousMember, APP_STATE.team[index]);
            saveTeam();
            saveProjects();
            renderTeam();
            renderProjects(APP_STATE.projects);
            closeModal();
            return;
        }

        const createTeamForm = event.target.closest("#team-create-form");
        if (createTeamForm) {
            event.preventDefault();
            if (!requireAdminAccess()) return;
            const formData = new FormData(createTeamForm);
            const newMember = normalizeTeamMember({
                name: String(formData.get("name") || "").trim() || "New Team Member",
                role: String(formData.get("role") || "").trim() || "IT Staff",
                level: String(formData.get("level") || "intern").trim(),
                status: String(formData.get("status") || "Online").trim(),
                contactFor: String(formData.get("contactFor") || "").trim() || "Internal IT support and coordination",
                email: String(formData.get("email") || "").trim(),
                message: String(formData.get("email") || "").trim(),
                number: String(formData.get("number") || "").trim(),
                school: String(formData.get("school") || "").trim(),
                linkedin: String(formData.get("linkedin") || "").trim(),
                image: String(formData.get("photoData") || formData.get("image") || "").trim() || getDefaultTeamImage(String(formData.get("level") || "intern")),
                skills: parseCommaList(String(formData.get("skills") || "Support, Coordination"))
            });
            APP_STATE.team = [newMember, ...APP_STATE.team];
            saveTeam();
            renderTeam();
            renderProjects(APP_STATE.projects);
            closeModal();
            return;
        }

        const helpForm = event.target.closest("#quickhelp-edit-form");
        if (helpForm) {
            event.preventDefault();
            if (!requireAdminAccess()) return;
            const formData = new FormData(helpForm);
            const index = Number(formData.get("helpIndex"));
            APP_STATE.quickHelp = APP_STATE.quickHelp.map((item, itemIndex) => itemIndex === index ? {
                ...item,
                label: String(formData.get("label") || item.label),
                title: String(formData.get("title") || item.title),
                body: String(formData.get("body") || item.body),
                action: String(formData.get("action") || item.action),
                actionType: String(formData.get("actionType") || item.actionType),
                value: String(formData.get("value") || item.value),
                person: String(formData.get("person") || item.person || "")
            } : item);
            saveQuickHelp();
            renderQuickHelp();
            closeModal();
            return;
        }

        const supportForm = event.target.closest("#support-edit-form");
        if (supportForm) {
            event.preventDefault();
            if (!requireAdminAccess()) return;
            const formData = new FormData(supportForm);
            const index = Number(formData.get("supportIndex"));
            APP_STATE.supportCards = APP_STATE.supportCards.map((item, itemIndex) => itemIndex === index ? {
                ...item,
                label: String(formData.get("label") || item.label),
                title: String(formData.get("title") || item.title),
                body: String(formData.get("body") || item.body),
                action: String(formData.get("action") || item.action),
                actionType: String(formData.get("actionType") || item.actionType),
                value: String(formData.get("value") || item.value),
                person: String(formData.get("person") || item.person || "")
            } : item);
            saveSupportCards();
            renderSupportCards();
            closeModal();
            return;
        }
    });

    document.addEventListener("click", (event) => {
        const openUrlButton = event.target.closest("[data-open-url]");
        if (openUrlButton) {
            const url = openUrlButton.dataset.openUrl;
            if (url && url.startsWith("#")) {
                const target = document.querySelector(url);
                if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
                return;
            }
            if (url && url !== "#") window.open(url, "_blank", "noopener");
            else openModal(buildOfflineModal());
            return;
        }

        const modalTrigger = event.target.closest("[data-modal]");
        if (modalTrigger) {
            const type = modalTrigger.dataset.modal;
            if (type === "ticket") openModal(buildTicketModal());
            if (type === "access") openModal(buildAccessModal(modalTrigger.dataset.projectName));
            if (type === "profile") openModal(buildProfileModal(modalTrigger.dataset.member));
            if (type === "offline") openModal(buildOfflineModal());
            if (type === "notifications") openModal(buildNotificationsModal());
            return;
        }

        const messageButton = event.target.closest("[data-message]");
        if (messageButton) {
            openModal(buildMessageModal(messageButton.dataset.member, messageButton.dataset.message));
            return;
        }

        const editProjectButton = event.target.closest("[data-edit-project]");
        if (editProjectButton) {
            if (!APP_STATE.adminLoggedIn) return;
            const project = APP_STATE.projects.find((item) => item.id === editProjectButton.dataset.editProject);
            if (project) openModal(buildProjectEditModal(project));
            return;
        }

        const editServiceButton = event.target.closest("[data-edit-service]");
        if (editServiceButton) {
            if (!APP_STATE.adminLoggedIn) return;
            const category = editServiceButton.dataset.editService;
            const index = Number(editServiceButton.dataset.editServiceIndex);
            const group = APP_STATE.services.find((item) => item.category === category);
            const service = group?.items[index];
            if (service) openModal(buildServiceEditModal(category, index, service));
            return;
        }

        const editTeamButton = event.target.closest("[data-edit-team]");
        if (editTeamButton) {
            if (!APP_STATE.adminLoggedIn) return;
            const index = Number(editTeamButton.dataset.editTeam);
            const member = APP_STATE.team[index];
            if (member) openModal(buildTeamEditModal(index, member));
            return;
        }

        const editHelpButton = event.target.closest("[data-edit-help]");
        if (editHelpButton) {
            if (!APP_STATE.adminLoggedIn) return;
            const index = Number(editHelpButton.dataset.editHelp);
            const item = APP_STATE.quickHelp[index];
            if (item) openModal(buildQuickHelpEditModal(index, item));
            return;
        }

        const editSupportButton = event.target.closest("[data-edit-support]");
        if (editSupportButton) {
            if (!APP_STATE.adminLoggedIn) return;
            const index = Number(editSupportButton.dataset.editSupport);
            const item = APP_STATE.supportCards[index];
            if (item) openModal(buildSupportEditModal(index, item));
            return;
        }

        const logoutButton = event.target.closest("[data-admin-logout]");
        if (logoutButton) {
            APP_STATE.adminLoggedIn = false;
            sessionStorage.removeItem(STORAGE_KEYS.adminSession);
            renderStats();
            renderTicker();
            renderProjects(APP_STATE.projects);
            renderServices();
            renderTeam();
            renderQuickHelp();
            renderSupportCards();
            updateAdminUI();
            closeModal();
            return;
        }

        const projectButton = event.target.closest("[data-project-modal]");
        if (projectButton) {
            const project = APP_STATE.projects.find((item) => item.id === projectButton.dataset.projectModal);
            if (project) openModal(buildProjectModal(project));
        }
    });
}

function setupRevealAnimations() {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    elements.forEach((element) => { if (!element.classList.contains("active")) observer.observe(element); });
}

function setupLenis() {
    if (typeof Lenis === "undefined") return;
    const lenis = new Lenis({
        duration: 1.1,
        easing: (value) => Math.min(1, 1.001 - Math.pow(2, -10 * value)),
        smoothWheel: true
    });
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    window.lenisInstance = lenis;
}

function animateCounters() {
    const numbers = document.querySelectorAll(".stat-number");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const element = entry.target;
            const target = Number(element.dataset.target);
            const start = performance.now();
            const frame = (time) => {
                const progress = Math.min((time - start) / 1400, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const value = target % 1 === 0 ? Math.round(target * eased) : (target * eased).toFixed(2);
                element.textContent = element.dataset.statKey === "uptime" ? `${value}%` : value;
                if (progress < 1) requestAnimationFrame(frame);
            };
            requestAnimationFrame(frame);
            observer.unobserve(element);
        });
    }, { threshold: 0.3 });
    numbers.forEach((number) => observer.observe(number));
}

function buildTicketModal() {
    return `
        <div class="modal-block">
            <h2 id="modal-title">Submit an IT support request</h2>
            <p>Share the issue clearly and the IT team can triage it faster.</p>
            <div class="form-grid">
                <input type="text" placeholder="Your name">
                <input type="text" placeholder="Department">
                <select><option>Issue type</option><option>Access</option><option>Hardware</option><option>Software</option><option>Network</option></select>
                <textarea rows="5" placeholder="Describe what you need help with"></textarea>
                <button class="btn btn-primary" type="button">Submit Request</button>
            </div>
        </div>
    `;
}

function buildAccessModal(projectName = "restricted systems") {
    return `
        <div class="modal-block">
            <h2 id="modal-title">Request access</h2>
            <p>Use this when access to ${projectName} requires manager or IT approval.</p>
            <ul class="modal-list">
                <li>Confirm the system name and your business reason.</li>
                <li>Include your department and approving manager.</li>
                <li>IT will validate access level and turnaround time.</li>
            </ul>
            <div class="form-grid">
                <input type="text" placeholder="System name">
                <input type="text" placeholder="Approving manager">
                <textarea rows="4" placeholder="Why do you need access?"></textarea>
                <button class="btn btn-primary" type="button">Send Access Request</button>
            </div>
        </div>
    `;
}

function buildProfileModal(memberName) {
    const member = APP_STATE.team.find((item) => item.name === memberName);
    if (!member) return "";
    const assignments = getProjectsForMember(member);
    return `
        <div class="modal-block">
            <h2 id="modal-title">${member.name}</h2>
            <p>${member.role}</p>
            <ul class="modal-list">
                <li>Name: ${member.name}</li>
                <li>Status: ${member.status}</li>
                <li>Mobile Number: ${member.number}</li>
                <li>School: ${member.school}</li>
                <li>Email Address: ${member.email}</li>
                <li>LinkedIn: <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer">${member.linkedin}</a></li>
                <li>Primary support area: ${member.contactFor}</li>
                <li>Skills: ${member.skills.join(", ")}</li>
                <li>Assigned projects: ${assignments.length ? assignments.map((project) => project.name).join(", ") : "No active assignments yet"}</li>
            </ul>
        </div>
    `;
}

function buildMessageModal(name, email) {
    return `
        <div class="modal-block">
            <h2 id="modal-title">Message ${name}</h2>
            <p>Reach out directly using the contact below.</p>
            <ul class="modal-list">
                <li>Email: ${email}</li>
                <li>Best for: quick coordination, issue handoff, or follow-up questions.</li>
            </ul>
        </div>
    `;
}

function buildProjectModal(project) {
    return `
        <div class="modal-block">
            <h2 id="modal-title">${project.name}</h2>
            <p>${project.description}</p>
            <ul class="modal-list">
                <li>Status: ${project.status}</li>
                <li>Progress: ${project.progress}%</li>
                <li>Owner: ${project.ownerName}</li>
                <li>Overseen by: ${project.overseenBy}</li>
                <li>Assigned by: ${project.assignedBy}</li>
                <li>Assigned team: ${project.team.map((member) => resolveMemberName(member, member)).join(", ")}</li>
                <li>Last update: ${project.updated}</li>
            </ul>
            <p>${project.restricted ? "Access is controlled. Use the request access flow if you need entry." : "This system is open to approved employees."}</p>
        </div>
    `;
}

function buildOfflineModal() {
    return `
        <div class="modal-block">
            <h2 id="modal-title">Service temporarily unavailable</h2>
            <p>This tool is currently offline or awaiting a live internal URL.</p>
            <ul class="modal-list">
                <li>Check the announcements panel for maintenance updates.</li>
                <li>Submit a ticket if the outage is blocking your work.</li>
            </ul>
        </div>
    `;
}

function buildAdminLoginModal() {
    return `
        <div class="modal-block">
            <h2 id="modal-title">IT Team Login</h2>
            <p>Sign in to update projects, IT services, team profiles, reports, and support content.</p>
            <form class="form-grid" id="admin-login-form">
                <input type="text" name="username" placeholder="Username" autocomplete="username">
                <input type="password" name="password" placeholder="Password" autocomplete="current-password">
                <p class="admin-feedback" style="color:#f3c8c8;"></p>
                <button class="btn btn-primary" type="submit">Sign In</button>
            </form>
        </div>
    `;
}

function buildOverviewEditModal() {
    return `
        <div class="modal-block">
            <h2 id="modal-title">Edit Overview</h2>
            <p>Update the hero, headline copy, stats, and live feed shown on the dashboard.</p>
            <form class="form-grid" id="overview-edit-form">
                <input type="text" name="currentUser" value="${APP_STATE.overview.currentUser}" placeholder="Current user text">
                <textarea name="heroDescription" rows="3" placeholder="Hero description">${APP_STATE.overview.heroDescription}</textarea>
                <input type="number" name="tickets" value="${APP_STATE.overview.stats.tickets}" placeholder="Open tickets">
                <input type="number" step="0.01" name="uptime" value="${APP_STATE.overview.stats.uptime}" placeholder="System uptime">
                <input type="number" name="users" value="${APP_STATE.overview.stats.users}" placeholder="Active users">
                <input type="number" name="projects" value="${APP_STATE.overview.stats.projects}" placeholder="Running projects">
                <textarea name="ticketUpdates" rows="6" placeholder="One update per line">${APP_STATE.overview.ticketUpdates.join("\n")}</textarea>
                <button class="btn btn-primary" type="submit">Save Overview</button>
            </form>
        </div>
    `;
}

function buildProjectEditModal(project) {
    return `
        <div class="modal-block">
            <h2 id="modal-title">Edit ${project.name}</h2>
            <p>Update what employees see in the Project Radar panel.</p>
            <form class="form-grid" id="project-edit-form">
                <input type="hidden" name="projectId" value="${project.id}">
                <input type="text" name="name" value="${project.name}" placeholder="Project name">
                <select name="status">
                    ${["Live", "In Progress", "Planning", "Completed"].map((status) => `<option value="${status}" ${project.status === status ? "selected" : ""}>${status}</option>`).join("")}
                </select>
                <select name="filter">
                    ${["active", "in-progress", "completed"].map((filter) => `<option value="${filter}" ${project.filter === filter ? "selected" : ""}>${filter}</option>`).join("")}
                </select>
                <input type="text" name="owner" value="${project.owner}" placeholder="Owner initials or name">
                <input type="text" name="ownerName" value="${project.ownerName}" placeholder="Owner name">
                <input type="text" name="overseenBy" value="${project.overseenBy}" placeholder="Overseen by">
                <input type="text" name="assignedBy" value="${project.assignedBy}" placeholder="Assigned by">
                <input type="text" name="updated" value="${project.updated}" placeholder="Updated text">
                <input type="number" name="progress" min="0" max="100" value="${project.progress}" placeholder="Progress">
                <input type="text" name="team" value="${project.team.join(", ")}" placeholder="Team initials or names, comma separated">
                <input type="text" name="systemUrl" value="${project.systemUrl}" placeholder="System URL">
                <label><input type="checkbox" name="restricted" ${project.restricted ? "checked" : ""}> Restricted system</label>
                <textarea name="description" rows="5" placeholder="Project description">${project.description}</textarea>
                <button class="btn btn-primary" type="submit">Save Project Changes</button>
            </form>
        </div>
    `;
}

function buildProjectCreateModal() {
    return `
        <div class="modal-block">
            <h2 id="modal-title">Add Project</h2>
            <p>Create a new project and assign the team right away.</p>
            <form class="form-grid" id="project-create-form">
                <input type="text" name="name" placeholder="Project name">
                <select name="status">
                    ${["Planning", "In Progress", "Live", "Completed"].map((status) => `<option value="${status}">${status}</option>`).join("")}
                </select>
                <select name="filter">
                    ${["in-progress", "active", "completed"].map((filter) => `<option value="${filter}">${filter}</option>`).join("")}
                </select>
                <input type="text" name="owner" placeholder="Owner initials or name">
                <input type="text" name="ownerName" placeholder="Owner full name">
                <input type="text" name="overseenBy" placeholder="Overseen by">
                <input type="text" name="assignedBy" value="Admin" placeholder="Assigned by">
                <input type="text" name="updated" value="Updated just now" placeholder="Updated text">
                <input type="number" name="progress" min="0" max="100" value="0" placeholder="Progress">
                <input type="text" name="team" placeholder="Team initials or names, comma separated">
                <input type="text" name="systemUrl" placeholder="System URL">
                <label><input type="checkbox" name="restricted"> Restricted system</label>
                <textarea name="description" rows="5" placeholder="Project description"></textarea>
                <button class="btn btn-primary" type="submit">Create Project</button>
            </form>
        </div>
    `;
}

function buildServiceEditModal(category, index, service) {
    return `
        <div class="modal-block">
            <h2 id="modal-title">Edit ${service.name}</h2>
            <p>Update the service tile and launch details for employees.</p>
            <form class="form-grid" id="service-edit-form">
                <input type="hidden" name="category" value="${category}">
                <input type="hidden" name="serviceIndex" value="${index}">
                <input type="text" name="icon" value="${service.icon}" placeholder="Icon">
                <input type="text" name="name" value="${service.name}" placeholder="Service name">
                <select name="status">
                    ${["online", "offline"].map((status) => `<option value="${status}" ${service.status === status ? "selected" : ""}>${status}</option>`).join("")}
                </select>
                <input type="text" name="url" value="${service.url}" placeholder="Launch URL">
                <textarea name="description" rows="4" placeholder="Service description">${service.description}</textarea>
                <button class="btn btn-primary" type="submit">Save Service</button>
            </form>
        </div>
    `;
}

function buildTeamEditModal(index, member) {
    return `
        <div class="modal-block">
            <h2 id="modal-title">Edit ${member.name}</h2>
            <p>Update the team card and full profile details shown to staff.</p>
            <form class="form-grid" id="team-edit-form">
                <input type="hidden" name="teamIndex" value="${index}">
                ${buildTeamPhotoFields(member.image)}
                <input type="text" name="name" value="${member.name}" placeholder="Name">
                <input type="text" name="role" value="${member.role}" placeholder="Role">
                <select name="status">
                    ${["Online", "In a Meeting", "Away"].map((status) => `<option value="${status}" ${member.status === status ? "selected" : ""}>${status}</option>`).join("")}
                </select>
                <input type="text" name="number" value="${member.number || ""}" placeholder="Mobile number">
                <input type="text" name="school" value="${member.school || ""}" placeholder="School">
                <input type="email" name="email" value="${member.email || member.message || ""}" placeholder="Email address">
                <input type="url" name="linkedin" value="${member.linkedin || ""}" placeholder="LinkedIn URL">
                <input type="text" name="skills" value="${member.skills.join(", ")}" placeholder="Skills, comma separated">
                <textarea name="contactFor" rows="4" placeholder="Contact-for summary">${member.contactFor}</textarea>
                <button class="btn btn-primary" type="submit">Save Team Member</button>
            </form>
        </div>
    `;
}

function buildTeamCreateModal() {
    return `
        <div class="modal-block">
            <h2 id="modal-title">Add Team Member</h2>
            <p>Create a new team profile that can also be assigned to projects.</p>
            <form class="form-grid" id="team-create-form">
                ${buildTeamPhotoFields("")}
                <input type="text" name="name" placeholder="Name">
                <input type="text" name="role" placeholder="Role">
                <select name="level">
                    ${["intern", "senior"].map((level) => `<option value="${level}">${level}</option>`).join("")}
                </select>
                <select name="status">
                    ${["Online", "In a Meeting", "Away"].map((status) => `<option value="${status}">${status}</option>`).join("")}
                </select>
                <input type="text" name="number" placeholder="Mobile number">
                <input type="text" name="school" placeholder="School">
                <input type="email" name="email" placeholder="Email address">
                <input type="url" name="linkedin" placeholder="LinkedIn URL">
                <input type="text" name="skills" placeholder="Skills, comma separated">
                <textarea name="contactFor" rows="4" placeholder="Contact-for summary"></textarea>
                <button class="btn btn-primary" type="submit">Create Team Member</button>
            </form>
        </div>
    `;
}

function buildQuickHelpEditModal(index, item) {
    return `
        <div class="modal-block">
            <h2 id="modal-title">Edit ${item.label}</h2>
            <p>Update the right-side help card content and action.</p>
            <form class="form-grid" id="quickhelp-edit-form">
                <input type="hidden" name="helpIndex" value="${index}">
                <input type="text" name="label" value="${item.label}" placeholder="Label">
                <input type="text" name="title" value="${item.title}" placeholder="Title">
                <select name="actionType">
                    ${["message", "url", "modal"].map((type) => `<option value="${type}" ${item.actionType === type ? "selected" : ""}>${type}</option>`).join("")}
                </select>
                <input type="text" name="action" value="${item.action}" placeholder="Button label">
                <input type="text" name="value" value="${item.value}" placeholder="Action value">
                <input type="text" name="person" value="${item.person || ""}" placeholder="Person name for message action">
                <textarea name="body" rows="4" placeholder="Card description">${item.body}</textarea>
                <button class="btn btn-primary" type="submit">Save Help Card</button>
            </form>
        </div>
    `;
}

function buildSupportEditModal(index, item) {
    return `
        <div class="modal-block">
            <h2 id="modal-title">Edit Support Card</h2>
            <p>Update the Service Desk panel content and action.</p>
            <form class="form-grid" id="support-edit-form">
                <input type="hidden" name="supportIndex" value="${index}">
                <input type="text" name="label" value="${item.label}" placeholder="Label">
                <input type="text" name="title" value="${item.title}" placeholder="Title">
                <select name="actionType">
                    ${["message", "url", "modal"].map((type) => `<option value="${type}" ${item.actionType === type ? "selected" : ""}>${type}</option>`).join("")}
                </select>
                <input type="text" name="action" value="${item.action}" placeholder="Button label">
                <input type="text" name="value" value="${item.value}" placeholder="Action value">
                <input type="text" name="person" value="${item.person || ""}" placeholder="Person name for message action">
                <textarea name="body" rows="4" placeholder="Support description">${item.body}</textarea>
                <button class="btn btn-primary" type="submit">Save Support Card</button>
            </form>
        </div>
    `;
}

function buildBulkEditModal() {
    return `
        <div class="modal-block">
            <h2 id="modal-title">IT Team Admin Console</h2>
            <p>You can now edit live dashboard content directly from the page.</p>
            <ul class="modal-list">
                <li>Projects: update status, owners, progress, and system links.</li>
                <li>Create new projects and instantly assign team members.</li>
                <li>IT Services: edit service names, status, and launch URLs.</li>
                <li>Team cards: update member info, status, and contact details.</li>
                <li>Add new team members and use them in project assignments.</li>
                <li>Reports and support cards: change guidance copy, actions, and contact routing.</li>
                <li>Project assignments sync automatically to the matching team profiles.</li>
                <li>Use the logout button inside this panel when you are done.</li>
            </ul>
            <div class="project-admin-actions">
                <button class="btn btn-secondary" type="button" data-admin-logout="true">Log Out</button>
            </div>
        </div>
    `;
}

function updateAdminUI() {
    const loginButton = document.getElementById("admin-login-button");
    const overviewButton = document.getElementById("edit-overview-button");
    const addProjectButton = document.getElementById("add-project-button");
    const addTeamButton = document.getElementById("add-team-button");
    if (!loginButton) return;

    document.body.classList.toggle("admin-mode", APP_STATE.adminLoggedIn);
    document.body.classList.toggle("not-admin-mode", !APP_STATE.adminLoggedIn);
    loginButton.classList.toggle("is-active", APP_STATE.adminLoggedIn);
    loginButton.querySelector("span:last-child").textContent = APP_STATE.adminLoggedIn ? "IT Team Mode Active" : "IT Team Login";
    if (overviewButton) overviewButton.hidden = !APP_STATE.adminLoggedIn;
    if (addProjectButton) addProjectButton.hidden = !APP_STATE.adminLoggedIn;
    if (addTeamButton) addTeamButton.hidden = !APP_STATE.adminLoggedIn;
}

function requireAdminAccess() {
    if (APP_STATE.adminLoggedIn) return true;
    openManagedModal(buildAdminLoginModal());
    return false;
}

function openManagedModal(content) {
    if (window.dashboardOpenModal) window.dashboardOpenModal(content);
}

function saveProjects() {
    APP_STATE.projects = APP_STATE.projects.map(normalizeProject);
    syncOverviewProjectCount();
    localStorage.setItem(STORAGE_KEYS.projectData, JSON.stringify(APP_STATE.projects));
    localStorage.setItem(STORAGE_KEYS.overviewData, JSON.stringify(APP_STATE.overview));
}

function saveOverview() {
    syncOverviewProjectCount();
    localStorage.setItem(STORAGE_KEYS.overviewData, JSON.stringify(APP_STATE.overview));
}

function saveServices() {
    localStorage.setItem(STORAGE_KEYS.serviceData, JSON.stringify(APP_STATE.services));
}

function saveTeam() {
    APP_STATE.team = APP_STATE.team.map(normalizeTeamMember);
    localStorage.setItem(STORAGE_KEYS.teamData, JSON.stringify(APP_STATE.team));
}

function saveQuickHelp() {
    localStorage.setItem(STORAGE_KEYS.quickHelpData, JSON.stringify(APP_STATE.quickHelp));
}

function saveSupportCards() {
    localStorage.setItem(STORAGE_KEYS.supportData, JSON.stringify(APP_STATE.supportCards));
}

function loadProjects() {
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.projectData);
        return raw ? JSON.parse(raw).map(normalizeProject) : APP_CONFIG.projects.map(normalizeProject);
    } catch (error) {
        return APP_CONFIG.projects.map(normalizeProject);
    }
}

function loadOverview() {
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.overviewData);
        if (!raw) return APP_CONFIG.overview;
        const parsed = JSON.parse(raw);
        return {
            ...APP_CONFIG.overview,
            ...parsed,
            stats: {
                ...APP_CONFIG.overview.stats,
                ...(parsed.stats || {})
            },
            ticketUpdates: Array.isArray(parsed.ticketUpdates) ? parsed.ticketUpdates : APP_CONFIG.overview.ticketUpdates
        };
    } catch (error) {
        return APP_CONFIG.overview;
    }
}

function loadServices() {
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.serviceData);
        return raw ? JSON.parse(raw) : APP_CONFIG.services;
    } catch (error) {
        return APP_CONFIG.services;
    }
}

function loadTeam() {
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.teamData);
        return raw ? JSON.parse(raw).map(normalizeTeamMember) : APP_CONFIG.team.map(normalizeTeamMember);
    } catch (error) {
        return APP_CONFIG.team.map(normalizeTeamMember);
    }
}

function loadQuickHelp() {
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.quickHelpData);
        return raw ? JSON.parse(raw) : APP_CONFIG.quickHelp;
    } catch (error) {
        return APP_CONFIG.quickHelp;
    }
}

function loadSupportCards() {
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.supportData);
        return raw ? JSON.parse(raw) : APP_CONFIG.supportCards;
    } catch (error) {
        return APP_CONFIG.supportCards;
    }
}

function normalizeProject(project) {
    const normalizedOwner = String(project.owner || "").trim().toUpperCase();
    const normalizedOwnerName = String(project.ownerName || resolveMemberName(normalizedOwner, "Unassigned")).trim();
    return {
        ...project,
        progress: clampProgress(project.progress, 0),
        owner: normalizedOwner,
        ownerName: normalizedOwnerName,
        overseenBy: String(project.overseenBy || normalizedOwnerName || "Admin").trim(),
        assignedBy: String(project.assignedBy || "Admin").trim(),
        team: Array.isArray(project.team) ? project.team.map((item) => String(item).trim().toUpperCase()).filter(Boolean) : [],
        systemUrl: String(project.systemUrl || "").trim(),
        restricted: Boolean(project.restricted)
    };
}

function normalizeTeamMember(member) {
    const email = String(member.email || member.message || "").trim();
    return {
        ...member,
        email,
        message: email,
        number: String(member.number || "").trim(),
        school: String(member.school || "").trim(),
        linkedin: String(member.linkedin || "").trim(),
        image: String(member.image || "").trim() || getDefaultTeamImage(member.level || "intern")
    };
}

function buildTeamPhotoFields(image = "") {
    const previewImage = String(image || "").trim() || getDefaultTeamImage("intern");
    return `
        <div class="team-photo-editor">
            <img src="${previewImage}" alt="Team member preview" class="team-photo-upload-preview" data-team-photo-preview>
            <input type="hidden" name="photoData" value="${previewImage}">
            <input type="text" name="image" value="${previewImage}" placeholder="Image URL or saved photo data">
            <label class="photo-upload-label">
                <span>Upload team photo</span>
                <input type="file" accept="image/*" data-team-photo-input>
            </label>
        </div>
    `;
}

function readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ""));
        reader.onerror = () => reject(reader.error || new Error("Unable to read file."));
        reader.readAsDataURL(file);
    });
}

function syncOverviewProjectCount() {
    if (!APP_STATE.overview?.stats) return;
    APP_STATE.overview.stats.projects = APP_STATE.projects.length;
}

function createProjectId(name) {
    const base = String(name || "project")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") || "project";
    let candidate = base;
    let counter = 2;
    while (APP_STATE.projects.some((project) => project.id === candidate)) {
        candidate = `${base}-${counter}`;
        counter += 1;
    }
    return candidate;
}

function getDefaultTeamImage(level = "intern") {
    return level === "senior"
        ? "paul_pm_portrait_1774849659547.png"
        : "intern_carlo_portrait_1774849747248.png";
}

function clampProgress(value, fallback) {
    const numeric = Number(value);
    if (Number.isNaN(numeric)) return Number(fallback);
    return Math.max(0, Math.min(100, numeric));
}

function clampDecimal(value, fallback) {
    const numeric = Number(value);
    if (Number.isNaN(numeric)) return Number(fallback);
    return Math.max(0, Math.min(100, numeric));
}

function parseTeamList(value) {
    return value
        .split(",")
        .map((item) => normalizeMemberIdentifier(item))
        .filter(Boolean);
}

function parseCommaList(value) {
    return value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
}

function parseMultilineList(value) {
    return value
        .split(/\r?\n/)
        .map((item) => item.trim())
        .filter(Boolean);
}

function buildNotificationsModal() {
    return `
        <div class="modal-block">
            <h2 id="modal-title">Pending IT ticket highlights</h2>
            <p>${APP_STATE.overview.stats.tickets} tickets are currently active across the helpdesk queue.</p>
            <ul class="modal-list">
                ${APP_STATE.overview.ticketUpdates.map((item) => `<li>${item}</li>`).join("")}
            </ul>
        </div>
    `;
}

function mapStatusClass(status) {
    const value = status.toLowerCase();
    if (value === "live" || value === "online") return "status-live";
    if (value === "in progress" || value === "in a meeting") return "status-progress";
    if (value === "completed") return "status-completed";
    if (value === "away") return "status-away";
    return "status-planning";
}

function getInitials(name) {
    return name.split(" ").slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function normalizeMemberIdentifier(value) {
    const raw = String(value || "").trim();
    if (!raw) return "";
    const member = getMemberByIdentifier(raw);
    return member ? getInitials(member.name) : raw.toUpperCase();
}

function getMemberByIdentifier(identifier) {
    const lookup = String(identifier || "").trim().toUpperCase();
    if (!lookup) return null;
    return APP_STATE.team.find((member) => member.name.toUpperCase() === lookup || getInitials(member.name) === lookup) || null;
}

function resolveMemberName(identifier, fallback = "") {
    const member = getMemberByIdentifier(identifier);
    return member ? member.name : String(fallback || "").trim();
}

function getProjectsForMember(member) {
    const memberInitials = getInitials(member.name);
    const memberName = member.name.toUpperCase();
    return APP_STATE.projects.filter((project) => {
        const isOwner = project.owner === memberInitials || String(project.ownerName || "").toUpperCase() === memberName;
        const isAssigned = Array.isArray(project.team) && project.team.includes(memberInitials);
        const isOverseer = String(project.overseenBy || "").toUpperCase() === memberName;
        return isOwner || isAssigned || isOverseer;
    });
}

function syncProjectsWithTeamMember(previousMember, nextMember) {
    if (!previousMember || !nextMember) return APP_STATE.projects;

    const previousName = previousMember.name;
    const nextName = nextMember.name;
    const previousInitials = getInitials(previousName);
    const nextInitials = getInitials(nextName);

    return APP_STATE.projects.map((project) => ({
        ...project,
        owner: project.owner === previousInitials ? nextInitials : project.owner,
        ownerName: project.ownerName === previousName ? nextName : project.ownerName,
        overseenBy: project.overseenBy === previousName ? nextName : project.overseenBy,
        team: Array.isArray(project.team) ? project.team.map((item) => item === previousInitials ? nextInitials : item) : project.team
    })).map(normalizeProject);
}

function buildSearchText(values) {
    return values.join(" ").toLowerCase();
}

function refreshSearchResults() {
    const input = document.getElementById("global-search");
    const meta = document.getElementById("search-meta");
    if (!input || !meta) return;

    const query = input.value.trim().toLowerCase();
    let visibleCount = 0;
    document.querySelectorAll(".searchable-item").forEach((item) => {
        const source = String(item.dataset.search || "");
        const matches = !query || source.includes(query);
        const filteredProject = item.classList.contains("project-card") && item.classList.contains("hidden-by-search");
        const visible = matches && !filteredProject;
        item.style.display = visible ? "" : "none";
        if (visible) visibleCount += 1;
    });

    meta.textContent = query
        ? `${visibleCount} result${visibleCount === 1 ? "" : "s"} matching "${query}".`
        : "Search instantly across tools, project systems, and support contacts.";
}
