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
        stats: { tickets: 18, uptime: 99.98, users: 246, projects: 14 },
        ticketUpdates: [
            "3 printer incidents were cleared in the last hour",
            "ERP maintenance begins tonight at 9:00 PM PHT",
            "VPN onboarding guide updated for new hires",
            "Inventory portal response time improved by 28%"
        ]
    },
    projects: [
        { id: "m88-it-headquarters", name: "m88-it-headquarters", status: "Live", filter: "active", description: "IT headquarters dashboard deployed from GitHub.", progress: 100, owner: "JC", ownerName: "John Carlo Manalo", updated: "Published Apr 10 at 9:26 AM", team: ["JC"], systemUrl: "", restricted: false },
        { id: "m88itsm", name: "m88itsm", status: "Live", filter: "active", description: "IT service management deployment from GitHub.", progress: 100, owner: "JC", ownerName: "John Carlo Manalo", updated: "Published Mar 18", team: ["JC", "MP"], systemUrl: "https://m88itsm.netlify.app", restricted: false },
        { id: "m88iis", name: "m88iis", status: "Live", filter: "active", description: "Infrastructure services deployment from GitHub.", progress: 100, owner: "SS", ownerName: "John Sedrick Sarol", updated: "Published Mar 9", team: ["SS"], systemUrl: "https://m88iis.netlify.app", restricted: false },
        { id: "poinstructions", name: "poinstructions", status: "Live", filter: "active", description: "PO instructions deployment from GitHub.", progress: 100, owner: "JC", ownerName: "John Carlo Manalo", updated: "Published Jan 6", team: ["JC"], systemUrl: "https://poinstructions.netlify.app", restricted: false },
        { id: "m88accountallocation", name: "m88accountallocation", status: "Live", filter: "active", description: "Account allocation deployment from GitHub.", progress: 100, owner: "JC", ownerName: "John Carlo Manalo", updated: "Published Sep 9, 2025", team: ["SS"], systemUrl: "https://m88accountallocation.netlify.app", restricted: false },
        { id: "m88ipt", name: "m88ipt", status: "Live", filter: "active", description: "IT procurement deployment from GitHub.", progress: 100, owner: "JC", ownerName: "John Carlo Manalo", updated: "Published Apr 10 at 10:29 AM", team: ["JC"], systemUrl: "https://m88ipt.netlify.app", restricted: false },
        { id: "m88cashflow", name: "m88cashflow", status: "Live", filter: "active", description: "Cash flow deployment from GitHub.", progress: 100, owner: "JC", ownerName: "John Carlo Manalo", updated: "Published Apr 7", team: ["JC"], systemUrl: "https://m88cashflow.netlify.app", restricted: false },
        { id: "m88-po-cutting", name: "m88-po-cutting", status: "Live", filter: "active", description: "PO cutting deployment from GitHub with Next.js.", progress: 100, owner: "JC", ownerName: "John Carlo Manalo", updated: "Published Mar 31", team: ["JC"], systemUrl: "https://m88-po-cutting.netlify.app", restricted: false },
        { id: "m88devtracker", name: "m88devtracker", status: "Live", filter: "active", description: "Developer tracker deployment from GitHub.", progress: 100, owner: "MP", ownerName: "Mhark Pentinio", updated: "Published Mar 26", team: ["SS"], systemUrl: "https://m88devtracker.netlify.app", restricted: false },
        { id: "madison88-orgchart", name: "madison88-orgchart", status: "Live", filter: "active", description: "Organization chart deployment from GitHub.", progress: 100, owner: "JC", ownerName: "John Carlo Manalo", updated: "Published Mar 10", team: ["JC"], systemUrl: "https://madison88-orgchart.netlify.app", restricted: false },
        { id: "m88ideaintake", name: "m88ideaintake", status: "Live", filter: "active", description: "Idea intake deployment from GitHub.", progress: 100, owner: "MP", ownerName: "Mhark Pentinio", updated: "Published Mar 5", team: ["MP", "SS"], systemUrl: "https://m88ideaintake.netlify.app", restricted: false },
        { id: "costingautomationm88", name: "costingautomationm88", status: "Live", filter: "active", description: "Costing automation deployment from GitHub.", progress: 100, owner: "JC", ownerName: "John Carlo Manalo", updated: "Published Feb 27", team: ["JC"], systemUrl: "https://costingautomationm88.netlify.app", restricted: false }
    ],
    services: [
        { category: "IT Services", items: [
            { icon: "🖥️", name: "IT Services", description: "Comprehensive support and management of information technology systems and infrastructure to ensure operational efficiency.", status: "online", url: "" },
            { icon: "🤖", name: "Automation", description: "Implementation of technology solutions to automate repetitive tasks, enhancing productivity and reducing manual errors.", status: "online", url: "" },
            { icon: "📄", name: "Digitization", description: "Conversion of physical documents and processes into digital formats for improved accessibility and storage.", status: "online", url: "" },
            { icon: "🔄", name: "Continuous Improvement / Continuous Development", description: "Ongoing process of refining systems, software, and services through iterative development and feedback loops.", status: "online", url: "" },
            { icon: "🏗️", name: "Infrastructure", description: "Management and maintenance of the underlying physical and virtual components that support IT operations.", status: "online", url: "" },
            { icon: "🚚", name: "Service Delivery", description: "Efficient delivery of IT services to end-users, ensuring timely and reliable support.", status: "online", url: "" },
            { icon: "💻", name: "Hardware", description: "Procurement, setup, and maintenance of physical computing devices and peripherals.", status: "online", url: "" },
            { icon: "📦", name: "Software Delivery", description: "Development, testing, and deployment of software applications and updates to meet business needs.", status: "online", url: "" }
        ] }
    ],
    team: [
        { name: "Polly Bienen", role: "President", level: "executive", status: "Online", skills: ["Executive Leadership", "Strategy", "Governance"], message: "polly.bienen@madison88.com", email: "polly.bienen@madison88.com", number: "+63 917 800 1107", school: "", linkedin: "", contactFor: "Executive leadership and strategic direction", image: "lester_sysadmin_portrait_1774849673559.png", hierarchy: 2 },
        { name: "Chris Cantasano", role: "Manila: President", level: "executive", status: "Online", skills: ["Regional Leadership", "Operations", "Growth"], message: "chris.cantasano@madison88.com", email: "chris.cantasano@madison88.com", number: "+63 917 800 1108", school: "", linkedin: "", contactFor: "Regional executive leadership for Manila operations", image: "intern_stephanie_portrait_1774849903805.png", hierarchy: 2 },
        { name: "Chris Ascaño", role: "Vice President - Operations", level: "executive", status: "Online", skills: ["Operations", "Process Improvement", "Delivery"], message: "chris.ascano@madison88.com", email: "chris.ascano@madison88.com", number: "+63 917 800 1109", school: "", linkedin: "", contactFor: "Operational leadership and delivery management", image: "intern_carlo_portrait_1774849747248.png", hierarchy: 2 },
        { name: "Paul Avendaño", role: "IT Admin Lead", level: "senior", status: "Online", skills: ["Delivery", "Stakeholder Ops", "Planning"], message: "paul.avendano@madison88.com", email: "paul.avendano@madison88.com", number: "+63 917 800 1101", school: "Polytechnic University of the Philippines", linkedin: "https://www.linkedin.com/in/paul-avendano", contactFor: "IT administration, approvals, and cross-team coordination", image: "paul_pm_portrait_1774849659547.png", hierarchy: 0 },
        { name: "Lester Mendoza", role: "IT Admin", level: "senior", status: "In a Meeting", skills: ["Infrastructure", "Network", "Identity"], message: "lester.mendoza@madison88.com", email: "lester.mendoza@madison88.com", number: "+63 917 800 1102", school: "Technological Institute of the Philippines", linkedin: "https://www.linkedin.com/in/lester-mendoza", contactFor: "Account, server, network, and access administration", image: "lester_sysadmin_portrait_1774849673559.png", hierarchy: 1 },
        { name: "John Carlo Manalo", role: "IT Intern", level: "intern", status: "Online", skills: ["Support", "Documentation", "UI/UX"], message: "johncarlo.manalo@madison88.com", email: "johncarlo.manalo@madison88.com", number: "+63 917 800 1103", school: "National University", linkedin: "www.linkedin.com/in/john-carlo-manalo-54582b171", contactFor: "Portal updates, user guides, and basic support", image: "intern_carlo_portrait_1774849747248.png", hierarchy: 3 },
        { name: "John Sedrick Sarol", role: "IT Intern", level: "intern", status: "Away", skills: ["Hardware", "Troubleshooting", "Deployment"], message: "johnsedrick.sarol@madison88.com", email: "johnsedrick.sarol@madison88.com", number: "+63 917 800 1104", school: "STI College", linkedin: "https://www.linkedin.com/in/john-sedrick-sarol", contactFor: "Device setup, peripherals, and workstation issues", image: "intern_sedrick_portrait_1774849784438.png", hierarchy: 3 },
        { name: "Stephanie Guce", role: "IT Intern", level: "intern", status: "Online", skills: ["UI/UX", "Content", "Training"], message: "stephanie.guce@madison88.com", email: "stephanie.guce@madison88.com", number: "+63 917 800 1105", school: "Far Eastern University", linkedin: "https://www.linkedin.com/in/stephanie-guce", contactFor: "Interface guidance and process walkthroughs", image: "intern_stephanie_portrait_1774849903805.png", hierarchy: 3 },
        { name: "Mhark Pentinio", role: "IT Intern", level: "intern", status: "Online", skills: ["Cybersecurity", "Monitoring", "Endpoint Care"], message: "mhark.pentinio@madison88.com", email: "mhark.pentinio@madison88.com", number: "+63 917 800 1106", school: "AMA Computer College", linkedin: "https://www.linkedin.com/in/mhark-pentinio", contactFor: "Security concerns and suspicious activity reports", image: "intern_mhark_portrait_1774849921272.png", hierarchy: 3 }
    ],
    quickHelp: [
        { label: "Team Coverage", title: "Project approvals and cross-team coordination", body: "Route rollout approvals, timelines, and cross-department planning to Paul Avendaño.", action: "Message Paul", actionType: "message", value: "paul.avendano@madison88.com", person: "Paul Avendaño" },
        { label: "IT Responsibility Map", title: "Account access, password reset, and VPN", body: "Best handled by Lester Mendoza for identity, server, and access-related concerns.", action: "Message Lester", actionType: "message", value: "lester.mendoza@madison88.com", person: "Lester Mendoza" },
        { label: "Who To Contact", title: "Hardware setup, peripherals, and workstation issues", body: "For device support and deployment concerns, contact John Sedrick Sarol.", action: "Message Sedrick", actionType: "message", value: "johnsedrick.sarol@madison88.com", person: "John Sedrick Sarol" },
        { label: "Find The Right IT Person", title: "Portal guidance, onboarding help, and documentation", body: "For walkthroughs, user guidance, and UI-related help, contact Stephanie Guce or John Carlo Manalo.", action: "View Team", actionType: "url", value: "#team" }
    ],
    contactGuide: [
        { label: "Project Ownership", issue: "Project approvals or system rollout concerns", owner: "Paul AvendaÃ±o", initials: "PA" }
    ],
    supportCards: [
        { label: "Priority Lane", title: "Submit a ticket", body: "For device, access, printer, email, or account issues.", action: "Open ITSM", actionType: "url", value: "https://m88itsm.netlify.app" },
        { label: "Direct Contact", title: "Talk to the right IT lead", body: "Reach the correct person faster for approvals, access, or urgent coordination.", action: "Contact IT Lead", actionType: "message", value: "lester.mendoza@madison88.com", person: "Lester Mendoza" }
    ],
    quickHelp: [
        {
            label: "",
            title: "IT Security Policy",
            body: "Our Information Technology systems, computers, networks, email, and communication tools are company property. They must be used professionally, lawfully, and ethically. Because they contain confidential and sensitive information, all employees must follow security rules to protect company assets and data.",
            bodyHtml: "<p>Our Information Technology systems, computers, networks, email, and communication tools are <u>company property</u>. They must be used professionally, lawfully, and ethically. Because they contain confidential and sensitive information, all employees must follow security rules to protect company assets and data.</p>"
        },
        {
            label: "",
            title: "General Provisions & Use of Personal Computers",
            body: "General Provisions: Protect all confidential and proprietary information. Do not access or modify data, files, or systems without authorization. Never bypass or tamper with security controls. Secure documents and storage media; shred or destroy confidential items before disposal. Collect confidential printouts immediately. Only IT is authorized to install or update hardware/software. Never share passwords or disclose internal system information. Use of Personal Computers: Take care of company-issued equipment; report loss or damage immediately. Keep laptops and devices secured, especially outside the office. Do not move or lend IT equipment without IT approval. Shut down your PC before leaving. Lock your PC during breaks; ensure screensaver auto-lock is active.",
            bodyHtml: "<p><strong>General Provisions</strong></p><ul><li>Protect all confidential and proprietary information.</li><li>Do not access or modify data, files, or systems without authorization.</li><li>Never bypass or tamper with security controls.</li><li>Secure documents and storage media; shred or destroy confidential items before disposal.</li><li>Collect confidential printouts immediately.</li><li>Only IT is authorized to install or update hardware/software.</li><li>Never share passwords or disclose internal system information.</li></ul><p><strong>Use of Personal Computers</strong></p><ul><li>Take care of company-issued equipment; report loss or damage immediately.</li><li>Keep laptops and devices secured, especially outside the office.</li><li>Do not move or lend IT equipment without IT approval.</li><li>Shut down your PC before leaving.</li><li>Lock your PC during breaks; ensure screensaver auto-lock is active.</li></ul>"
        },
        {
            label: "",
            title: "Password Policy, Data Storage & Intellectual Property",
            body: "Password Policy: Passwords must remain confidential and never written, shared, or stored in readable form. Request IT assistance if a password is compromised or needs changing. Always decline auto-complete or prompts to save passwords. Data Storage: Save work on network drives where backups are automated. Organize folders for easy retrieval. Avoid downloading unnecessary files that do not support work. Regularly clear outdated or redundant files. Intellectual Property: Do not copy, modify, or install unlicensed or personal software. Do not copy music, media, or personal software to work devices. Personal computers cannot connect to company networks without IT approval. Pirated software is strictly prohibited.",
            bodyHtml: "<p><strong>Password Policy</strong></p><ul><li>Passwords must remain confidential and never written, shared, or stored in readable form.</li><li>Request IT assistance if a password is compromised or needs changing.</li><li>Always decline auto-complete or prompts to save passwords.</li></ul><p><strong>Data Storage</strong></p><ul><li>Save work on network drives where backups are automated.</li><li>Organize folders for easy retrieval.</li><li>Avoid downloading unnecessary files that do not support work.</li><li>Regularly clear outdated or redundant files.</li></ul><p><strong>Intellectual Property</strong></p><ul><li>Do not copy, modify, or install unlicensed or personal software.</li><li>Do not copy music, media, or personal software to work devices.</li><li>Personal computers cannot connect to company networks without IT approval.</li><li>Pirated software is strictly prohibited.</li></ul>"
        },
        {
            label: "",
            title: "Company Information Protection & Internet Usage",
            body: "Company Information Protection: All corporate information belongs to the company. Use information only as needed for work. Never copy, remove, or share documents unless required and authorized. Return all company documents upon separation or when requested. Internet Usage: Internet access is for business purposes. Limited personal browsing is allowed, but personal email use is not. Do not download unapproved software. Never post confidential or sensitive information online. Accessing pornographic, hateful, or illegal content is strictly forbidden.",
            bodyHtml: "<p><strong>Company Information Protection</strong></p><ul><li>All corporate information belongs to the company.</li><li>Use information only as needed for work.</li><li>Never copy, remove, or share documents unless required and authorized.</li><li>Return all company documents upon separation or when requested.</li></ul><p><strong>Internet Usage</strong></p><ul><li>Internet access is for business purposes.</li><li>Limited personal browsing is allowed, but personal email use is not.</li><li>Do not download unapproved software.</li><li>Never post confidential or sensitive information online.</li><li>Accessing pornographic, hateful, or illegal content is strictly forbidden.</li></ul>"
        },
        {
            label: "",
            title: "Remote Work & Email Usage",
            body: "Remote Work - Connectivity & Power Outage: Report internet or power issues immediately via Teams or text. Provide outage details and a post-incident report. Employees should maintain backup connectivity (mobile data). Use offline resources (OneDrive) when needed. After 2 hours of no connectivity, employees must return to the office or use leave credits unless business needs require office return immediately. Email Usage: Company owns all email accounts; email is not private. Do not send confidential data without proper encryption. Report suspicious emails immediately. Do not register for unrelated websites, forums, or chatrooms. Avoid unnecessary email storage; delete outdated messages. Prohibited: chain letters, mass mailings, offensive or discriminatory messages. The company may access email logs and content for business or legal reasons.",
            bodyHtml: "<p><strong>Remote Work - Connectivity & Power Outage</strong></p><ul><li>Report internet or power issues immediately via Teams or text.</li><li>Provide outage details and a post-incident report.</li><li>Employees should maintain backup connectivity (mobile data).</li><li>Use offline resources (OneDrive) when needed.</li><li>After 2 hours of no connectivity, employees must return to the office or use leave credits unless business needs require office return immediately.</li></ul><p><strong>Email Usage</strong></p><ul><li>Company owns all email accounts; email is not private.</li><li>Do not send confidential data without proper encryption.</li><li>Report suspicious emails immediately.</li><li>Do not register for unrelated websites, forums, or chatrooms.</li><li>Avoid unnecessary email storage; delete outdated messages.</li><li>Prohibited: chain letters, mass mailings, offensive or discriminatory messages.</li><li>The company may access email logs and content for business or legal reasons.</li></ul>"
        },
        {
            label: "",
            title: "Social Media Posting & Compliance",
            body: "Social Media Posting: Do not post company-related content without explicit permission. Avoid sharing confidential information in photos, videos, or posts. Use only approved company logos or materials. Maintain a clear separation between personal and professional content. Adjust privacy settings and avoid unknown contacts. Compliance & Disciplinary Action: Violations may result in disciplinary action aligned with the Employee Handbook. Serious breaches may be considered gross misconduct. The company reserves the right to remove unauthorized hardware or software and restore system configurations.",
            bodyHtml: "<p><strong>Social Media Posting</strong></p><ul><li>Do not post company-related content without explicit permission.</li><li>Avoid sharing confidential information in photos, videos, or posts.</li><li>Use only approved company logos or materials.</li><li>Maintain a clear separation between personal and professional content.</li><li>Adjust privacy settings and avoid unknown contacts.</li></ul><p><strong>Compliance & Disciplinary Action</strong></p><ul><li>Violations may result in disciplinary action aligned with the Employee Handbook.</li><li>Serious breaches may be considered gross misconduct.</li><li>The company reserves the right to remove unauthorized hardware or software and restore system configurations.</li></ul>"
        },
        {
            label: "",
            title: "IT Security Violations & Penalties",
            body: "Policies include penalties from warning letters to dismissal for offenses such as unauthorized software installation, changing system configurations, non-business internet use, accessing other users' data, disclosing confidential information, bypassing security controls, unauthorized system access, and sharing passwords. Penalties escalate depending on severity, from Warning (WW) to Dismissal (D).",
            bodyHtml: "<p>Policies include penalties from warning letters to dismissal for offenses such as:</p><ul><li>Unauthorized software installation</li><li>Changing system configurations</li><li>Non-business internet use</li><li>Accessing other users' data</li><li>Disclosing confidential information</li><li>Bypassing security controls</li><li>Unauthorized system access</li><li>Sharing passwords</li></ul><p>Penalties escalate depending on severity, from Warning (WW) to Dismissal (D).</p>"
        }
    ],
    missionVision: {
        mission: {
            title: "Our Mission",
            subtitle: "What we do every day",
            content: "As ONE TEAM, we deliver reliable, innovative, and secure IT solutions that power our organization's operations — with a SERVICE-FIRST mindset, unmatched technical excellence, and a commitment to SUSTAINABLE digital practices.",
            highlights: ["Service First", "Reliability", "Excellence"]
        },
        vision: {
            title: "Our Vision",
            subtitle: "Where we're headed",
            content: "To be the LEADER in IT enablement — the first choice for every team and department through our combined PASSION for technology, drive for INNOVATION, and unwavering INTEGRITY in everything we build.",
            highlights: ["Innovation", "Leadership", "Integrity"]
        },
        values: {
            title: "Our Values",
            subtitle: "How we operate",
            content: "We are a PEOPLE-FIRST team. We make CONSCIOUS choices. We RESPECT each other and our stakeholders. We act with PASSION. We welcome a good CHALLENGE. When the team SUCCEEDS, we all succeed. We take PRIDE in our work."
        }
    },
    adminCredentials: {
        username: "admin123",
        password: "admin123"
    },
    integrations: {
        supabase: {
            url: "",
            anonKey: "",
            table: "dashboard_content"
        }
    }
};

const STORAGE_KEYS = {
    projectData: "madison88-project-data",
    overviewData: "madison88-overview-data",
    serviceData: "madison88-service-data",
    teamData: "madison88-team-data",
    quickHelpData: "madison88-quickhelp-data",
    contactGuideData: "madison88-contact-guide-data",
    supportData: "madison88-support-data",
    policyDocumentsData: "madison88-policy-documents-data",
    adminSession: "madison88-admin-session",
    themePreference: "madison88-theme-preference",
    automationDashboardHidden: "madison88-automation-dashboard-hidden",
    automationPeriod: "madison88-automation-period",
    exchangeRateData: "madison88-exchange-rate-data"
};

const SUPABASE_SECTION_KEYS = {
    overview: "overview",
    projects: "projects",
    services: "services",
    team: "team",
    quickHelp: "quick_help",
    contactGuide: "contact_guide",
    supportCards: "support_cards",
    policyDocuments: "policy_documents",
    missionVision: "mission_vision"
};

const APP_RUNTIME = {
    supabase: null,
    supabaseConfigured: false,
    supabaseStatus: "local-only",
    supabaseLastError: "",
    supabaseLastSyncAt: "",
    exchangeRate: {
        baseCurrency: "PHP",
        targetCurrency: "USD",
        rate: null,
        source: "",
        fetchedAt: "",
        checkedAt: "",
        status: "idle",
        error: ""
    }
};

const POLICY_DOCUMENTS = [
    {
        id: "policy-pdf-1",
        label: "PDF 01",
        typeLabel: "Policy PDF",
        iconLabel: "PDF",
        title: "Madison88 IT Framework Charter",
        description: "Open the official Madison88 IT Framework Charter PDF.",
        actionLabel: "Open PDF",
        sectionIndexes: [0, 1],
        url: "/policies/madison88-it-framework-charter.pdf"
    },
    {
        id: "policy-pdf-2",
        label: "PDF 02",
        typeLabel: "Policy PDF",
        iconLabel: "PDF",
        title: "MADISON88 CHANGE MANAGEMENT POLICY",
        description: "Open the official Madison88 Change Management Policy PDF.",
        actionLabel: "Open PDF",
        sectionIndexes: [2, 3],
        url: "/policies/madison88-change-management-policy.pdf"
    },
    {
        id: "policy-pdf-3",
        label: "PDF 03",
        typeLabel: "Policy PDF",
        iconLabel: "PDF",
        title: "Madison88 Incident Management Policy",
        description: "Open the official Madison88 Incident Management Policy PDF.",
        actionLabel: "Open PDF",
        sectionIndexes: [4, 5, 6],
        url: "/policies/madison88-incident-management-policy.pdf"
    },
    {
        id: "policy-pdf-4",
        label: "PDF 04",
        typeLabel: "Policy PDF",
        iconLabel: "PDF",
        title: "Automation Life Cycle",
        description: "Open the official Automation Life Cycle PDF.",
        actionLabel: "Open PDF",
        sectionIndexes: [],
        url: "/policies/automation-life-cycle.pdf"
    }
];

const POLICY_VISUALS = [
    {
        image: "/policies/images/it-security-policy.png",
        alt: "IT Security Policy"
    },
    {
        image: "/policies/images/general-provisions-personal-computers.png",
        alt: "General Provisions and Use of Personal Computers"
    },
    {
        image: "/policies/images/password-data-storage-intellectual-property.png",
        alt: "Password Policy, Data Storage and Intellectual Property"
    },
    {
        image: "/policies/images/company-information-internet-usage.png",
        alt: "Company Information Protection and Internet Usage"
    },
    {
        image: "/policies/images/remote-work-email-usage.png",
        alt: "Remote Work and Email Usage"
    },
    {
        image: "/policies/images/social-media-compliance.png",
        alt: "Social Media Posting and Compliance"
    },
    {
        image: "/policies/images/it-security-violations-penalties.png",
        alt: "IT Security Violations and Penalties"
    }
];

const AUTOMATION_SOURCE_DATA = [
    {
        sourceKey: "PO_prep",
        projectId: "m88-po-cutting",
        label: "PO Preparation Hub",
        department: "Planning",
        processName: "Purchase Order Prep (PO-cutting)",
        automationTool: "PO preparation hub",
        manualAvgMins: 150,
        manualVolumeMonth: 2,
        manualMonthlyMins: 300,
        autoAvgMins: 60,
        autoVolumeMonth: 2,
        autoMonthlyMins: 120,
        validatedSavedMins: 180,
        roles: "Planning Associate",
        hourlyCostPhp: 450
    },
    {
        sourceKey: "Data_bank",
        projectId: "costingautomationm88",
        label: "Costing Automation",
        department: "Costing",
        processName: "Data Bank",
        automationTool: "Costing Automation",
        manualAvgMins: 5,
        manualVolumeMonth: 140,
        manualMonthlyMins: 700,
        autoAvgMins: 2.5,
        autoVolumeMonth: 140,
        autoMonthlyMins: 350,
        validatedSavedMins: 350,
        roles: "Costing Supervisor/Associate",
        hourlyCostPhp: 450
    },
    {
        sourceKey: "BCBD",
        projectId: "costingautomationm88",
        label: "Costing Automation",
        department: "Costing",
        processName: "BCBD Validation",
        automationTool: "Costing Automation",
        manualAvgMins: 30,
        manualVolumeMonth: 140,
        manualMonthlyMins: 4200,
        autoAvgMins: 10,
        autoVolumeMonth: 140,
        autoMonthlyMins: 1400,
        validatedSavedMins: 2800,
        roles: "Costing Supervisor/Associate",
        hourlyCostPhp: 450
    },
    {
        sourceKey: "ITSM",
        projectId: "m88itsm",
        label: "m88itsm",
        department: "Information Technology",
        processName: "I.T. Technical Support",
        automationTool: "I.T. Service Management Tool",
        manualAvgMins: 120,
        manualVolumeMonth: 15,
        manualMonthlyMins: 1800,
        autoAvgMins: 90,
        autoVolumeMonth: 15,
        autoMonthlyMins: 1350,
        validatedSavedMins: 450,
        roles: "Systems Admin",
        hourlyCostPhp: 450
    },
    {
        sourceKey: "IIS",
        projectId: "m88iis",
        label: "m88iis",
        department: "Information Technology",
        processName: "I.T. Equipment Inventory",
        automationTool: "I.T. Inventory System",
        manualAvgMins: 480,
        manualVolumeMonth: 2,
        manualMonthlyMins: 960,
        autoAvgMins: 240,
        autoVolumeMonth: 2,
        autoMonthlyMins: 480,
        validatedSavedMins: 480,
        roles: "Systems Admin",
        hourlyCostPhp: 450
    },
    {
        sourceKey: "KPI",
        projectId: "m88iis",
        label: "Automated KPI Dash Board (Power Bi)",
        department: "Logistics",
        processName: "KPI",
        automationTool: "Automated KPI Dash Board (Power Bi)",
        manualAvgMins: 120,
        manualVolumeMonth: 20,
        manualMonthlyMins: 2400,
        autoAvgMins: 20,
        autoVolumeMonth: 20,
        autoMonthlyMins: 400,
        validatedSavedMins: 2000,
        roles: "Manager & Supervisor",
        hourlyCostPhp: 450
    },
    {
        sourceKey: "Packing_List",
        projectId: "m88ipt",
        label: "Packing List Generator",
        department: "Logistics",
        processName: "Packing List",
        automationTool: "Packing List Generator",
        manualAvgMins: 90,
        manualVolumeMonth: 1,
        manualMonthlyMins: 90,
        autoAvgMins: 25,
        autoVolumeMonth: 1,
        autoMonthlyMins: 25,
        validatedSavedMins: 65,
        roles: "Logistics Core",
        hourlyCostPhp: 450
    },
    {
        sourceKey: "Trim_Summary",
        projectId: "costingautomationm88",
        label: "Trim Summary",
        department: "Costing",
        processName: "Trim Summary",
        automationTool: "Costing Automation",
        manualAvgMins: 480,
        manualVolumeMonth: 4,
        manualMonthlyMins: 1920,
        autoAvgMins: 30,
        autoVolumeMonth: 4,
        autoMonthlyMins: 120,
        validatedSavedMins: 1800,
        roles: "Costing Supervisor/Associate",
        hourlyCostPhp: 450
    },
    {
        sourceKey: "IPT",
        projectId: "",
        label: "Interns Productivity Tool",
        department: "Information Technology",
        processName: "Interns Productivity Tool",
        automationTool: "Interns Productivity Tool",
        manualAvgMins: 65,
        manualVolumeMonth: 12,
        manualMonthlyMins: 780,
        autoAvgMins: 0,
        autoVolumeMonth: 12,
        autoMonthlyMins: 0,
        validatedSavedMins: 780,
        roles: "IT Interns",
        hourlyCostPhp: 450
    }
];

const AUTOMATION_INTEGRITY_TOLERANCE_MINS = 0.01;
const AUTOMATION_COMPARISON = buildAutomationComparison(AUTOMATION_SOURCE_DATA);
const PRODUCTIVE_HOURS_PER_MONTH = 160;

const AUTOMATION_PROJECT_ALIASES = {
    "po-cutting-system": "m88-po-cutting",
    "costing-automation": "costingautomationm88",
    "it-service-management": "m88itsm",
    "it-infrastructure-services": "m88iis",
    "account-allocation": "m88iis",
    "m88-po-cutting": "m88-po-cutting",
    "costingautomationm88": "costingautomationm88",
    "m88itsm": "m88itsm",
    "m88iis": "m88iis"
};

const SYSTEM_PROJECT_DEFAULTS = Object.fromEntries(
    APP_CONFIG.projects.map((project) => [project.id, cloneData(project)])
);

function cloneData(value) {
    if (typeof structuredClone === "function") {
        return structuredClone(value);
    }
    return JSON.parse(JSON.stringify(value));
}

function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function clearLegacyContentStorage() {
    [
        STORAGE_KEYS.projectData,
        STORAGE_KEYS.overviewData,
        STORAGE_KEYS.serviceData,
        STORAGE_KEYS.teamData,
        STORAGE_KEYS.quickHelpData,
        STORAGE_KEYS.contactGuideData,
        STORAGE_KEYS.supportData,
        STORAGE_KEYS.policyDocumentsData
    ].forEach((key) => localStorage.removeItem(key));
}

function hasLegacyContentStorage() {
    return [
        STORAGE_KEYS.projectData,
        STORAGE_KEYS.overviewData,
        STORAGE_KEYS.serviceData,
        STORAGE_KEYS.teamData,
        STORAGE_KEYS.quickHelpData,
        STORAGE_KEYS.contactGuideData,
        STORAGE_KEYS.supportData,
        STORAGE_KEYS.policyDocumentsData
    ].some((key) => {
        try {
            return localStorage.getItem(key) !== null;
        } catch (error) {
            return false;
        }
    });
}

APP_CONFIG.services = [
    { category: "IT Services", items: [
        { icon: "IT", name: "IT Services", description: "Core information technology services supporting employees, business systems, and daily operations.", status: "online", url: "" },
        { icon: "EUC", name: "End-User Computing (EUC)", description: "End-User Device Provisioning & Lifecycle: Provides, configures, and manages user devices (laptops/desktops/IT peripherals) for employees across MNL & INDO regions.\nEnd-User Software Installation (Standard Apps): Installs approved, licensed applications required for work.\nWorkplace Printing & Peripheral Support: Support for standard printers, scanners, docking stations, monitors, and peripherals.", status: "online", url: "" },
        { icon: "SD", name: "Service Desk & IT Support", description: "Service Desk (Incident & Request Handling): Central support point for logging, tracking, and resolving IT incidents and requests.", status: "online", url: "" },
        { icon: "IAM", name: "Identity & Access Management (IAM)", description: "User Account Management (Onboarding / Offboarding): Creates, modifies, or disables accounts based on HR events and approvals.\nAccess Requests (Role-Based Access / System Permissions): Grants or removes access to Madison88 systems based on role and approvals.\nEmail, Teams & SharePoint Collaboration Support: Support for collaboration tools and shared workspaces.", status: "online", url: "" },
        { icon: "APP", name: "Business Applications & Data Services", description: "ERP Application Support: Support for ERP transactions, user issues, master data requests, and system uptime coordination.\nPLM Support (Vision PLM Next Gen): Support for PLM access, configuration, integration issues, and user enablement.\nHRIS & Timekeeping Support: Support for HRIS access, data issues, workflows, and vendor escalation.\nReporting & BI Support (Power BI / Dashboards): Supports data refresh failures, access, dashboard publishing, and standard KPI reports.", status: "online", url: "" },
        { icon: "NET", name: "Infrastructure & Network Services", description: "Network & Connectivity (LAN/Wi-Fi/VPN/Internet): Ensures reliable connectivity across offices and for remote work to maintain business continuity.\nServer / Cloud Hosting & Platform Services: Manages cloud and on-premise servers, storage, and platform uptime for business systems.", status: "online", url: "" },
        { icon: "SEC", name: "Information Security & Data Protection", description: "Endpoint Security, Patching & Vulnerability Management: Protects endpoints and servers via security tooling, patch cycles, and vulnerability remediation.\nSecurity Incident Response (Cybersecurity Events): Coordinates response to suspected compromise, phishing, malware, or data incidents.\nData Protection & Retention (M365 / SharePoint): Implements protection controls for data, including access controls, retention, and backups.", status: "online", url: "" },
        { icon: "BDR", name: "Backup & Disaster Recovery", description: "Backup & Restore Services: Backup operations for critical systems and restore support for data loss events.", status: "online", url: "" },
        { icon: "CRG", name: "Change, Release & Governance", description: "Change and Release Management: Controls production changes to reduce disruption and ensure proper approvals and testing.\nIT Asset Management (Hardware / Software Inventory): Tracks asset lifecycle, assignment, licensing, and disposal for audit readiness.", status: "online", url: "" },
        { icon: "AUTO", name: "Process Automation & Digital Enablement", description: "Workflow Automation & Platform Support: Builds and supports workflow automation (SharePoint, Power Automate), including minor enhancements and fixes.\nSystem Integration Support: Manages integrations between business systems such as ERP, PLM, HRIS, and Reporting.", status: "online", url: "" }
    ] }
];

const APP_STATE = {
    overview: loadOverview(),
    projects: loadProjects(),
    services: loadServices(),
    team: loadTeam(),
    quickHelp: loadQuickHelp(),
    contactGuide: loadContactGuide(),
    supportCards: loadSupportCards(),
    policyDocuments: loadPolicyDocuments(),
    adminLoggedIn: sessionStorage.getItem(STORAGE_KEYS.adminSession) === "true",
    theme: localStorage.getItem(STORAGE_KEYS.themePreference) === "light" ? "light" : "dark",
    automationDashboardHidden: localStorage.getItem(STORAGE_KEYS.automationDashboardHidden) === "true",
    automationPeriod: localStorage.getItem(STORAGE_KEYS.automationPeriod) || "monthly",
    currentProjectFilter: "all",
    currentProjectPage: 1,
    projectsPerPage: 8
};

let startupLoaderHidden = false;

function hideStartupLoader() {
    if (startupLoaderHidden) return;
    const loader = document.getElementById("loader");
    if (!loader) return;

    startupLoaderHidden = true;
    loader.classList.add("fade-out");
    animateCounters();

    window.setTimeout(() => {
        loader.style.display = "none";
    }, 900);
}

applyTheme(APP_STATE.theme);

window.addEventListener("error", () => {
    hideStartupLoader();
});

window.addEventListener("unhandledrejection", () => {
    hideStartupLoader();
});

document.addEventListener("DOMContentLoaded", async () => {
    try {
        setupLoader();
        setupThemeToggle();
        updateNavigationLabels();
        syncOverviewProjectCount();
        renderStats();
        renderTicker();
        renderAutomationDashboard();
        renderProjects(APP_STATE.projects);
        renderServices();
        renderTeam();
        renderContactGuide();
        renderQuickHelp();
        renderSupportCards();
        renderMissionVision();
        setupProjectFilters();
        setupAutomationDashboardToggle();
        setupSearch();
        setupAdminAutofill();
        setupClock();
        setupWeatherWidget();
        setupLiveItsmTicketStat();
        setupNavigation();
        setupModalSystem();
        setupProjectAdmin();
        setupRevealAnimations();
        setupLenis();
        initializeExchangeRate();
        await hydrateAppStateFromSupabase();
    } catch (error) {
        console.error("Dashboard startup failed:", error);
        hideStartupLoader();
    }
});

function applyTheme(theme) {
    const nextTheme = theme === "light" ? "light" : "dark";
    APP_STATE.theme = nextTheme;
    document.documentElement.setAttribute("data-theme", nextTheme);
    document.documentElement.style.colorScheme = nextTheme;

    const desktopToggle = document.getElementById("theme-toggle");
    const mobileToggle = document.getElementById("theme-toggle-mobile");
    const themeModeLabel = document.getElementById("theme-mode-label");
    const themeToggleIcon = document.querySelector(".theme-toggle-icon");
    const isLight = nextTheme === "light";

    if (themeModeLabel) themeModeLabel.textContent = isLight ? "Light" : "Dark";
    if (themeToggleIcon) themeToggleIcon.textContent = isLight ? "☀" : "☾";
    if (desktopToggle) {
        desktopToggle.setAttribute("aria-pressed", String(isLight));
        desktopToggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
        desktopToggle.title = isLight ? "Switch to dark mode" : "Switch to light mode";
    }
    if (mobileToggle) {
        mobileToggle.setAttribute("aria-pressed", String(isLight));
        mobileToggle.textContent = isLight ? "Dark Mode" : "Light Mode";
    }
}

function toggleTheme() {
    const nextTheme = APP_STATE.theme === "light" ? "dark" : "light";
    applyTheme(nextTheme);
    localStorage.setItem(STORAGE_KEYS.themePreference, nextTheme);
}

function setupThemeToggle() {
    document.getElementById("theme-toggle")?.addEventListener("click", toggleTheme);
    document.getElementById("theme-toggle-mobile")?.addEventListener("click", toggleTheme);
    applyTheme(APP_STATE.theme);
}

function updateNavigationLabels() {
    const commandNav = document.querySelectorAll(".sidebar-nav")[0];
    const operationsNav = document.querySelectorAll(".sidebar-nav")[1];
    const mobileNav = document.querySelector(".mobile-nav");

    const overviewLink = document.querySelector('.sidebar .nav-link[href="#overview"]');
    const teamLink = document.querySelector('.sidebar .nav-link[href="#team"]');
    const servicesLink = document.querySelector('.sidebar .nav-link[href="#services"]');
    const projectsLink = document.querySelector('.sidebar .nav-link[href="#projects"]');
    const policiesLink = document.querySelector('.sidebar .nav-link[href="#announcements"]');
    const supportLink = document.querySelector('.sidebar .nav-link[href="#support"]');

    if (commandNav) {
        [overviewLink, teamLink, servicesLink].filter(Boolean).forEach((link) => commandNav.appendChild(link));
    }

    if (operationsNav) {
        [projectsLink, policiesLink, supportLink].filter(Boolean).forEach((link) => operationsNav.appendChild(link));
    }

    const mobileOverviewLink = document.querySelector('.mobile-nav-link[href="#overview"]');
    const mobileTeamLink = document.querySelector('.mobile-nav-link[href="#team"]');
    const mobileServicesLink = document.querySelector('.mobile-nav-link[href="#services"]');
    const mobileProjectsLink = document.querySelector('.mobile-nav-link[href="#projects"]');
    const mobileSupportLink = document.querySelector('.mobile-nav-link[href="#support"]');

    let mobilePoliciesLink = document.querySelector('.mobile-nav-link[href="#announcements"]');
    if (!mobilePoliciesLink && mobileNav) {
        mobilePoliciesLink = document.createElement("a");
        mobilePoliciesLink.className = "mobile-nav-link";
        mobilePoliciesLink.innerHTML = '<span>✦</span><span>Policies</span>';
        mobileNav.appendChild(mobilePoliciesLink);
    }

    if (mobilePoliciesLink) {
        mobilePoliciesLink.setAttribute("href", "#");
        mobilePoliciesLink.setAttribute("data-modal", "other-policies");
        mobilePoliciesLink.removeAttribute("data-section-link");
        const label = mobilePoliciesLink.querySelector("span:last-child");
        if (label) label.textContent = "Policies";
    }

    if (mobileNav) {
        [mobileOverviewLink, mobileTeamLink, mobileServicesLink, mobileProjectsLink, mobilePoliciesLink, mobileSupportLink]
            .filter(Boolean)
            .forEach((link) => mobileNav.appendChild(link));
    }

    document.querySelectorAll('[href="#announcements"] span:last-child').forEach((label) => {
        label.textContent = "Policies";
    });

    document.querySelectorAll('[href="#announcements"]').forEach((link) => {
        link.setAttribute("href", "#");
        link.setAttribute("data-modal", "other-policies");
        link.removeAttribute("data-section-link");
    });

    document.querySelectorAll('[href="#support"]').forEach((link) => {
        link.setAttribute("href", "#");
        link.setAttribute("data-modal", "support-center");
        link.removeAttribute("data-section-link");
    });

    const announcementsSection = document.getElementById("announcements");
    if (announcementsSection) {
        announcementsSection.hidden = true;
    }

    const supportSection = document.getElementById("support");
    if (supportSection) {
        supportSection.hidden = true;
    }
}

const MANILA_WEATHER_URL = "https://api.open-meteo.com/v1/forecast?latitude=14.5995&longitude=120.9842&current=temperature_2m,apparent_temperature,weather_code,is_day&timezone=Asia%2FManila&forecast_days=1";
const ITSM_API_BASE = "https://madison88-itsm.onrender.com/api";
const ITSM_LOGIN_URL = `${ITSM_API_BASE}/auth/login`;
const ITSM_ACTIVE_TICKET_STATUSES = ["New", "In Progress", "Pending"];
const ITSM_TOKEN_STORAGE_KEYS = ["madison88-itsm-runtime-token", "madison88-itsm-token", "m88itsm-token", "itsmToken"];

function getSupabaseSettings() {
    const runtimeConfig = window.M88_SUPABASE || {};
    const appConfig = APP_CONFIG.integrations?.supabase || {};
    return {
        url: String(runtimeConfig.url || appConfig.url || "").trim(),
        anonKey: String(runtimeConfig.anonKey || appConfig.anonKey || "").trim(),
        table: String(runtimeConfig.table || appConfig.table || "dashboard_content").trim() || "dashboard_content",
        photoBucket: String(runtimeConfig.photoBucket || appConfig.photoBucket || "team-photos").trim() || "team-photos"
    };
}

function initializeSupabaseClient() {
    if (APP_RUNTIME.supabase) return APP_RUNTIME.supabase;

    const { url, anonKey } = getSupabaseSettings();
    APP_RUNTIME.supabaseConfigured = Boolean(url && anonKey);
    if (!APP_RUNTIME.supabaseConfigured) {
        APP_RUNTIME.supabaseStatus = "not-configured";
        return null;
    }

    const createClient = window.supabase?.createClient;
    if (typeof createClient !== "function") {
        APP_RUNTIME.supabaseStatus = "client-missing";
        APP_RUNTIME.supabaseLastError = "Supabase browser client failed to load.";
        return null;
    }

    APP_RUNTIME.supabase = createClient(url, anonKey);
    APP_RUNTIME.supabaseStatus = "connected";
    APP_RUNTIME.supabaseLastError = "";
    return APP_RUNTIME.supabase;
}

function getSupabaseStatusLabel() {
    if (APP_RUNTIME.supabaseStatus === "connected") return "Connected";
    if (APP_RUNTIME.supabaseStatus === "sync-error") return "Connection error";
    if (APP_RUNTIME.supabaseStatus === "not-configured") return "Not configured";
    if (APP_RUNTIME.supabaseStatus === "client-missing") return "Client missing";
    return "Local only";
}

function formatSyncTimestamp(value) {
    if (!value) return "Never";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "Unknown";
    return new Intl.DateTimeFormat("en-PH", {
        dateStyle: "medium",
        timeStyle: "short"
    }).format(date);
}

function refreshDashboardContent() {
    syncOverviewProjectCount();
    renderStats();
    renderTicker();
    renderAutomationDashboard();
    renderProjects(APP_STATE.projects);
    renderServices();
    renderTeam();
    renderContactGuide();
    renderQuickHelp();
    renderPolicyDocuments();
    renderSupportCards();
    renderMissionVision();
    updateAdminUI();
}

async function hydrateAppStateFromSupabase() {
    const client = initializeSupabaseClient();
    if (!client) return;

    const { table } = getSupabaseSettings();
    try {
        const { data, error } = await client
            .from(table)
            .select("key, value");

        if (error) throw error;
        if (!Array.isArray(data) || !data.length) {
            const migrated = await migrateLegacyContentToSupabase();
            if (migrated) {
                await hydrateAppStateFromSupabase();
                return;
            }

            APP_RUNTIME.supabaseStatus = "connected";
            APP_RUNTIME.supabaseLastError = "";
            return;
        }

        const snapshot = Object.fromEntries(
            data
                .filter((row) => row && typeof row.key === "string")
                .map((row) => [row.key, row.value])
        );

        if (snapshot[SUPABASE_SECTION_KEYS.overview]) {
            APP_STATE.overview = {
                ...APP_STATE.overview,
                ...snapshot[SUPABASE_SECTION_KEYS.overview],
                stats: {
                    ...APP_STATE.overview.stats,
                    ...(snapshot[SUPABASE_SECTION_KEYS.overview]?.stats || {})
                }
            };
        }
        if (Array.isArray(snapshot[SUPABASE_SECTION_KEYS.projects])) {
            APP_STATE.projects = snapshot[SUPABASE_SECTION_KEYS.projects].map(normalizeProject);
        }
        if (Array.isArray(snapshot[SUPABASE_SECTION_KEYS.services])) {
            APP_STATE.services = snapshot[SUPABASE_SECTION_KEYS.services];
        }
        if (Array.isArray(snapshot[SUPABASE_SECTION_KEYS.team])) {
            APP_STATE.team = snapshot[SUPABASE_SECTION_KEYS.team].map(normalizeTeamMember).sort((a, b) => a.hierarchy - b.hierarchy);
        }
        if (Array.isArray(snapshot[SUPABASE_SECTION_KEYS.quickHelp])) {
            APP_STATE.quickHelp = normalizeQuickHelpItems(snapshot[SUPABASE_SECTION_KEYS.quickHelp]);
        }
        if (Array.isArray(snapshot[SUPABASE_SECTION_KEYS.contactGuide])) {
            APP_STATE.contactGuide = snapshot[SUPABASE_SECTION_KEYS.contactGuide].map(normalizeContactGuideRow);
        }
        if (Array.isArray(snapshot[SUPABASE_SECTION_KEYS.supportCards])) {
            APP_STATE.supportCards = snapshot[SUPABASE_SECTION_KEYS.supportCards];
        }
        if (Array.isArray(snapshot[SUPABASE_SECTION_KEYS.policyDocuments])) {
            APP_STATE.policyDocuments = snapshot[SUPABASE_SECTION_KEYS.policyDocuments].map(normalizePolicyDocument);
        }
        if (snapshot[SUPABASE_SECTION_KEYS.missionVision]) {
            APP_CONFIG.missionVision = {
                ...APP_CONFIG.missionVision,
                ...snapshot[SUPABASE_SECTION_KEYS.missionVision]
            };
        }

        APP_RUNTIME.supabaseStatus = "connected";
        APP_RUNTIME.supabaseLastError = "";
        APP_RUNTIME.supabaseLastSyncAt = new Date().toISOString();
        clearLegacyContentStorage();
        refreshDashboardContent();
    } catch (error) {
        APP_RUNTIME.supabaseStatus = "sync-error";
        APP_RUNTIME.supabaseLastError = String(error?.message || error || "Unable to load Supabase data.");
        console.warn("Supabase dashboard hydration failed:", error);
    }
}

async function persistSupabaseSection(sectionKey, value) {
    const client = initializeSupabaseClient();
    if (!client) return false;

    const { table } = getSupabaseSettings();
    try {
        const { error } = await client
            .from(table)
            .upsert({
                key: sectionKey,
                value,
                updated_at: new Date().toISOString()
            }, { onConflict: "key" });

        if (error) throw error;
        APP_RUNTIME.supabaseStatus = "connected";
        APP_RUNTIME.supabaseLastError = "";
        APP_RUNTIME.supabaseLastSyncAt = new Date().toISOString();
        return true;
    } catch (error) {
        APP_RUNTIME.supabaseStatus = "sync-error";
        APP_RUNTIME.supabaseLastError = String(error?.message || error || "Unable to save to Supabase.");
        console.warn(`Supabase save failed for ${sectionKey}:`, error);
        return false;
    }
}

async function migrateLegacyContentToSupabase() {
    if (!hasLegacyContentStorage()) return false;

    const legacySnapshot = [
        [SUPABASE_SECTION_KEYS.overview, loadOverview("legacy")],
        [SUPABASE_SECTION_KEYS.projects, loadProjects("legacy")],
        [SUPABASE_SECTION_KEYS.services, loadServices("legacy")],
        [SUPABASE_SECTION_KEYS.team, loadTeam("legacy")],
        [SUPABASE_SECTION_KEYS.quickHelp, loadQuickHelp("legacy")],
        [SUPABASE_SECTION_KEYS.contactGuide, loadContactGuide("legacy")],
        [SUPABASE_SECTION_KEYS.supportCards, loadSupportCards("legacy")],
        [SUPABASE_SECTION_KEYS.policyDocuments, loadPolicyDocuments("legacy")],
        [SUPABASE_SECTION_KEYS.missionVision, cloneData(APP_CONFIG.missionVision)]
    ];

    let migratedAny = false;
    for (const [sectionKey, value] of legacySnapshot) {
        const didPersist = await persistSupabaseSection(sectionKey, value);
        if (!didPersist) return false;
        migratedAny = true;
    }

    if (migratedAny) {
        clearLegacyContentStorage();
    }
    return migratedAny;
}

function sanitizeStorageFilename(name) {
    return String(name || "photo")
        .toLowerCase()
        .replace(/[^a-z0-9.\-_]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "") || "photo";
}

async function uploadTeamPhotoToSupabase(file) {
    const client = initializeSupabaseClient();
    if (!client) return null;

    const { photoBucket } = getSupabaseSettings();
    if (!photoBucket) return null;

    const extension = String(file?.name || "").split(".").pop()?.toLowerCase() || "jpg";
    const baseName = sanitizeStorageFilename(String(file?.name || "team-photo").replace(/\.[^.]+$/, ""));
    const filePath = `team-members/${Date.now()}-${baseName}.${extension}`;

    const { error } = await client.storage.from(photoBucket).upload(filePath, file, {
        cacheControl: "3600",
        upsert: true
    });

    if (error) throw error;

    const { data } = client.storage.from(photoBucket).getPublicUrl(filePath);
    return String(data?.publicUrl || "").trim() || null;
}

function setupLoader() {
    const loader = document.getElementById("loader");
    if (!loader) return;

    window.addEventListener("load", () => {
        setTimeout(hideStartupLoader, 1800);
    }, { once: true });

    // Fallback: don't let the UI stay blocked if a third-party resource stalls.
    setTimeout(hideStartupLoader, 3200);
}

function renderStats() {
    const userNameEl = document.getElementById("user-name");
    const heroDescriptionEl = document.getElementById("hero-description");
    if (userNameEl) userNameEl.textContent = APP_STATE.overview.currentUser;
    if (heroDescriptionEl) heroDescriptionEl.textContent = APP_STATE.overview.heroDescription;
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

function renderAutomationDashboard() {
    const container = document.getElementById("automation-dashboard");
    if (!container) return;

    const period = getAutomationPeriodConfig(APP_STATE.automationPeriod);
    const annualPeriod = getAutomationPeriodConfig("annual");
    const annualRows = AUTOMATION_COMPARISON.map((entry) => computeAutomationBenefits(entry, annualPeriod.multiplier));
    const rows = AUTOMATION_COMPARISON.map((entry) => {
        const project = APP_STATE.projects.find((item) => item.id === entry.projectId);
        return {
            ...computeAutomationBenefits(entry, period.multiplier),
            projectName: project?.name || entry.label
        };
    });

    const annualVolumeManual = annualRows.reduce((sum, item) => sum + item.manualVolume, 0);
    const annualVolumeAutomated = annualRows.reduce((sum, item) => sum + item.automatedVolume, 0);
    const annualBaselineHours = annualRows.reduce((sum, item) => sum + item.manualHours, 0);
    const annualHoursSaved = annualRows.reduce((sum, item) => sum + item.hoursSaved, 0);
    const annualCapacityRelease = annualRows.reduce((sum, item) => sum + item.capacityReleaseFte, 0);
    const annualCostAvoidance = annualRows.reduce((sum, item) => sum + item.costAvoidancePhp, 0);
    const annualBenefits = annualRows.reduce((sum, item) => sum + item.totalBenefitPhp, 0);
    const integrityFailures = annualRows.filter((item) => item.integrityCheck === "FAIL").length;
    const totalVolumeManual = rows.reduce((sum, item) => sum + item.manualVolume, 0);
    const totalVolumeAutomated = rows.reduce((sum, item) => sum + item.automatedVolume, 0);
    const totalProjects = rows.length;
    const statusSummaries = buildAutomationStatusSummaries();
    const overallChart = buildOverallComparisonChart(rows);
    const lifecycleChart = buildAutomationLifecycleChart(statusSummaries);
    const bestPerformer = rows.reduce((best, item) => item.totalBenefitPhp > best.totalBenefitPhp ? item : best, rows[0]);
    const maxMedian = Math.max(...rows.map((item) => calculateMedian([item.manualVolume, item.automatedVolume])), 1);
    const maxTableBenefits = Math.max(...rows.map((item) => item.totalBenefitPhp), 1);
    const isHidden = APP_STATE.automationDashboardHidden;
    const savingsLabel = getSavingsCurrencyLabel();
    const exchangeRateNote = getExchangeRateNote();

    container.innerHTML = `
        <div class="automation-dashboard-top">
            <div>
                <span class="quick-help-label">Automation Dashboard</span>
                <h3>Automation Impact Summary</h3>
                <p class="service-copy">This view follows one benefits measurement framework across all solutions: baseline hours, time saved, capacity release, and cost avoidance. Every total is recalculated from average time and monthly volume before reporting.</p>
            </div>
            <div class="automation-kpi-grid">
                <article class="automation-kpi-card">
                    <span>Baseline Manual Work</span>
                    <strong>${formatCompactNumber(annualBaselineHours)}</strong>
                    <small>hours required annually before automation</small>
                </article>
                <article class="automation-kpi-card">
                    <span>Time Saved</span>
                    <strong>${formatCompactNumber(annualHoursSaved)}</strong>
                    <small>hours removed from manual work annually</small>
                </article>
                <article class="automation-kpi-card">
                    <span>Capacity Release</span>
                    <strong>${formatDecimal(annualCapacityRelease)} FTE</strong>
                    <small>equivalent annual redeployable capacity</small>
                </article>
                <article class="automation-kpi-card">
                    <span>Total Benefits</span>
                    <strong>${formatCurrencyCompact(annualBenefits)}</strong>
                    <small>${formatCurrencyCompact(annualCostAvoidance)} from cost avoidance annually</small>
                </article>
                <article class="automation-kpi-card">
                    <span>Integrity Flags</span>
                    <strong>${integrityFailures}</strong>
                    <small>${integrityFailures === 1 ? "solution needs workbook correction" : "solutions need workbook correction"}</small>
                </article>
            </div>
            <div class="automation-status-grid">
                ${statusSummaries.map((summary) => `
                    <article class="automation-kpi-card automation-status-card">
                        <span>${summary.label}</span>
                        <strong>${summary.projectCount}</strong>
                        <small>${summary.projectCount === 1 ? "project" : "projects"} in this lifecycle stage</small>
                        <div class="automation-status-metrics">
                            <p><strong>${formatCompactNumber(summary.hoursSaved)}</strong> estimated hours saved</p>
                            <p><strong>${formatCurrencyCompact(summary.totalBenefitPhp)}</strong> estimated total benefits</p>
                        </div>
                    </article>
                `).join("")}
            </div>
        </div>
        <div class="automation-dashboard-body" id="automation-dashboard-body"${isHidden ? " hidden" : ""}>
        <div class="automation-overall-chart-card">
            <div class="automation-overall-chart-copy">
                <div>
                    <span class="quick-help-label">Overall Chart</span>
                    <h4>Overall Comparison of Baseline Volume, Automated Volume, and Total Benefits</h4>
                    <p class="automation-chart-intro">Gray bars show the baseline manual transaction volume, green bars show the automated transaction volume, and the blue line shows total computed benefits in ${getSavingsNarrativeLabel()}.</p>
                    <p class="automation-chart-intro"><strong>Viewing:</strong> ${period.label}${period.key === "annual" ? " totals for the full year" : ` estimates derived from the monthly baseline dataset`}</p>
                    <p class="automation-chart-intro">${exchangeRateNote}</p>
                </div>
                <div class="automation-chart-toolbar">
                    <div class="automation-period-switch" role="tablist" aria-label="Automation timeframe filter">
                        ${AUTOMATION_PERIODS.map((item) => `
                            <button
                                class="automation-period-btn${item.key === period.key ? " is-active" : ""}"
                                type="button"
                                data-automation-period="${item.key}"
                                aria-pressed="${String(item.key === period.key)}"
                            >${item.label}</button>
                        `).join("")}
                    </div>
                    <div class="automation-chart-legend">
                    <span><i class="legend-swatch legend-swatch-manual"></i>Baseline manual volume</span>
                    <span><i class="legend-swatch legend-swatch-auto"></i>Automated volume</span>
                    <span><i class="legend-line legend-line-savings"></i>Total benefits (${savingsLabel})</span>
                    </div>
                </div>
            </div>
            <div class="automation-panels-grid">
                <div class="automation-insight-strip">
                    <div class="automation-insight-card">
                        <span>Highest Total Benefit</span>
                        <strong>${bestPerformer.projectName}</strong>
                        <small>${formatCurrencyCompact(bestPerformer.totalBenefitPhp)} in computed ${period.label.toLowerCase()} benefits</small>
                    </div>
                    <div class="automation-insight-card">
                        <span>Overall Throughput</span>
                        <strong>${Math.round((totalVolumeAutomated / Math.max(totalVolumeManual, 1)) * 100)}%</strong>
                        <small>of the ${period.label.toLowerCase()} baseline volume handled through automation</small>
                    </div>
                </div>
                <div class="automation-multiplier-card">
                    <div class="automation-multiplier-header">
                        <span class="quick-help-label">Capacity</span>
                        <h5>${period.label} Capacity Release Per Solution</h5>
                    </div>
                    <div class="automation-multiplier-list">
                        ${rows.map((item) => {
                            return `
                                <div class="automation-multiplier-row" data-automation-key="${escapeHtml(item.projectId)}" tabindex="0">
                                    <span>${escapeHtml(item.label)}</span>
                                    <div class="automation-multiplier-track">
                                        <div class="automation-multiplier-fill" style="width:${(item.capacityReleaseFte / Math.max(...rows.map((row) => row.capacityReleaseFte), 1)) * 100}%"></div>
                                        <strong>${formatDecimal(item.capacityReleaseFte)} FTE</strong>
                                    </div>
                                </div>
                            `;
                        }).join("")}
                    </div>
                </div>
            </div>
            <div class="automation-chart-shell">
                ${overallChart}
            </div>
        </div>
            <div class="automation-overall-chart-card">
                <div class="automation-overall-chart-copy">
                    <div>
                        <span class="quick-help-label">Lifecycle Chart</span>
                        <h4>Project Status Comparison by Lifecycle Stage</h4>
                        <p class="automation-chart-intro">Gray bars show how many projects fall under each lifecycle stage, and the blue line shows the estimated total benefits tied to projects in that stage.</p>
                    </div>
                    <div class="automation-chart-legend">
                        <span><i class="legend-swatch legend-swatch-manual"></i>Project count</span>
                        <span><i class="legend-line legend-line-savings"></i>Total benefits (${savingsLabel})</span>
                    </div>
                </div>
                <div class="automation-chart-shell">
                    ${lifecycleChart}
                </div>
            </div>
            <div class="automation-breakdown-card">
                <div class="automation-breakdown-header">
                    <span class="quick-help-label">Breakdown</span>
                    <h5>${period.label} Benefits Breakdown</h5>
                    <p class="automation-breakdown-definition">Baseline Hours = calculated manual work required before automation using Avg Time × Volume. Time Saved = calculated manual minutes minus calculated automated minutes. Capacity Release = time saved divided by 160 productive hours. Cost Avoidance = released FTE capacity multiplied by annual cost per FTE based on the policy. Total Benefits = policy-based cost avoidance for the selected period. Integrity Check compares workbook-reported totals against the recalculated totals.</p>
                </div>
            <div class="automation-breakdown-table-wrap">
                <table class="automation-breakdown-table">
                    <thead>
                        <tr>
                            <th>Solution</th>
                            <th>Data Integrity Check</th>
                            <th>Baseline Hours</th>
                            <th>Time Saved</th>
                            <th>Capacity Release</th>
                            <th>Cost Avoidance</th>
                            <th>Total Benefits</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows.map((item) => {
                            return `
                                <tr data-automation-key="${escapeHtml(item.projectId)}" tabindex="0">
                                    <td data-label="Solution"><strong>${escapeHtml(item.label)}</strong></td>
                                    <td data-label="Data Integrity Check">
                                        <span class="automation-chip ${item.integrityCheck === "PASS" ? "automation-chip-pass" : "automation-chip-fail"}" title="${escapeHtml(item.integrityMessage)}">${escapeHtml(item.integrityCheck)}</span>
                                    </td>
                                    <td data-label="Baseline Hours">${formatCompactNumber(item.manualHours)}</td>
                                    <td data-label="Time Saved">${formatCompactNumber(item.hoursSaved)}</td>
                                    <td data-label="Capacity Release"><span class="automation-chip automation-chip-multiplier">${formatDecimal(item.capacityReleaseFte)} FTE</span></td>
                                    <td data-label="Cost Avoidance">
                                        <div class="automation-savings-cell">
                                            <strong>${formatCurrencyCompact(item.costAvoidancePhp)}</strong>
                                            <span class="automation-savings-meter"><span style="width:${(item.costAvoidancePhp / Math.max(...rows.map((row) => row.costAvoidancePhp), 1)) * 100}%"></span></span>
                                        </div>
                                    </td>
                                    <td data-label="Total Benefits">
                                        <div class="automation-savings-cell">
                                            <strong>${formatCurrencyCompact(item.totalBenefitPhp)}</strong>
                                            <span class="automation-savings-meter"><span style="width:${(item.totalBenefitPhp / maxTableBenefits) * 100}%"></span></span>
                                        </div>
                                    </td>
                                </tr>
                            `;
                        }).join("")}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    `;

    applyAutomationDashboardVisibility(container, isHidden);
    setupAutomationDashboardInteractions(container);
}

function toggleAutomationDashboardVisibility() {
    APP_STATE.automationDashboardHidden = !APP_STATE.automationDashboardHidden;
    localStorage.setItem(STORAGE_KEYS.automationDashboardHidden, String(APP_STATE.automationDashboardHidden));

    const container = document.getElementById("automation-dashboard");
    if (container && !container.innerHTML.trim()) {
        renderAutomationDashboard();
        return;
    }

    applyAutomationDashboardVisibility(container, APP_STATE.automationDashboardHidden);
}

function setupAutomationDashboardToggle() {
    const toggleButton = document.getElementById("toggle-automation-dashboard");
    if (!toggleButton) return;

    toggleButton.addEventListener("click", () => {
        toggleAutomationDashboardVisibility();
    });

    applyAutomationDashboardVisibility(document.getElementById("automation-dashboard"), APP_STATE.automationDashboardHidden);
}

function applyAutomationDashboardVisibility(container, isHidden) {
    const toolbarToggle = document.getElementById("toggle-automation-dashboard");

    if (container) {
        container.hidden = isHidden;
        container.classList.toggle("is-collapsed", isHidden);
    }

    if (toolbarToggle) {
        toolbarToggle.setAttribute("aria-expanded", String(!isHidden));
        toolbarToggle.textContent = isHidden ? "Show Dashboard" : "Hide Dashboard";
    }
}

function setupAutomationDashboardInteractions(container) {
    if (!container) return;

    container.querySelectorAll("[data-automation-period]").forEach((button) => {
        button.addEventListener("click", () => {
            const nextPeriod = button.getAttribute("data-automation-period");
            if (!nextPeriod || nextPeriod === APP_STATE.automationPeriod) return;
            APP_STATE.automationPeriod = nextPeriod;
            localStorage.setItem(STORAGE_KEYS.automationPeriod, nextPeriod);
            renderAutomationDashboard();
        });
    });

    const clearActive = () => {
        container.classList.remove("has-linked-active");
        container.querySelectorAll(".is-linked-active").forEach((node) => node.classList.remove("is-linked-active"));
    };

    const setActive = (key) => {
        clearActive();
        if (!key) return;
        container.classList.add("has-linked-active");
        container.querySelectorAll(`[data-automation-key="${key}"]`).forEach((node) => node.classList.add("is-linked-active"));
    };

    container.querySelectorAll("[data-automation-key]").forEach((node) => {
        const key = node.getAttribute("data-automation-key");
        node.addEventListener("mouseenter", () => setActive(key));
        node.addEventListener("focus", () => setActive(key));
        node.addEventListener("mouseleave", clearActive);
        node.addEventListener("blur", clearActive);
    });
}

function formatCompactNumber(value) {
    return new Intl.NumberFormat("en-PH", { notation: "compact", maximumFractionDigits: 1 }).format(value);
}

function formatCurrencyCompactPHP(value) {
    return new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP",
        notation: "compact",
        maximumFractionDigits: 1
    }).format(value);
}

function formatCurrencyCompactUSD(value) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        notation: "compact",
        maximumFractionDigits: 1
    }).format(value);
}

function formatCurrencyCompact(value) {
    const converted = convertPhpToUsd(value);
    return converted === null ? formatCurrencyCompactPHP(value) : formatCurrencyCompactUSD(converted);
}

function normalizeAutomationNumber(value) {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : 0;
}

function hasReportedAutomationValue(value) {
    return value !== null && value !== undefined && String(value).trim() !== "";
}

function valuesMatchWithinTolerance(left, right, tolerance = AUTOMATION_INTEGRITY_TOLERANCE_MINS) {
    return Math.abs(normalizeAutomationNumber(left) - normalizeAutomationNumber(right)) <= tolerance;
}

function buildAutomationValidation(row = {}) {
    const manualAvgMins = normalizeAutomationNumber(row.manualAvgMins);
    const manualVolumeMonth = normalizeAutomationNumber(row.manualVolumeMonth);
    const autoAvgMins = normalizeAutomationNumber(row.autoAvgMins);
    const autoVolumeMonth = normalizeAutomationNumber(row.autoVolumeMonth || row.manualVolumeMonth);
    const calculatedManualMonthlyMins = manualAvgMins * manualVolumeMonth;
    const calculatedAutoMonthlyMins = autoAvgMins * autoVolumeMonth;
    const calculatedSavedMins = Math.max(0, calculatedManualMonthlyMins - calculatedAutoMonthlyMins);

    const reportedManualMonthlyMins = hasReportedAutomationValue(row.reportedManualMonthlyMins)
        ? normalizeAutomationNumber(row.reportedManualMonthlyMins)
        : normalizeAutomationNumber(row.manualMonthlyMins);
    const reportedAutoMonthlyMins = hasReportedAutomationValue(row.reportedAutoMonthlyMins)
        ? normalizeAutomationNumber(row.reportedAutoMonthlyMins)
        : normalizeAutomationNumber(row.autoMonthlyMins);
    const reportedSavedMins = hasReportedAutomationValue(row.reportedSavedMins)
        ? normalizeAutomationNumber(row.reportedSavedMins)
        : normalizeAutomationNumber(row.validatedSavedMins);

    const checks = [
        {
            key: "manual",
            label: "Manual total",
            hasReportedValue: hasReportedAutomationValue(row.reportedManualMonthlyMins) || hasReportedAutomationValue(row.manualMonthlyMins),
            reportedValue: reportedManualMonthlyMins,
            calculatedValue: calculatedManualMonthlyMins
        },
        {
            key: "auto",
            label: "Automated total",
            hasReportedValue: hasReportedAutomationValue(row.reportedAutoMonthlyMins) || hasReportedAutomationValue(row.autoMonthlyMins),
            reportedValue: reportedAutoMonthlyMins,
            calculatedValue: calculatedAutoMonthlyMins
        },
        {
            key: "saved",
            label: "Time saved",
            hasReportedValue: hasReportedAutomationValue(row.reportedSavedMins) || hasReportedAutomationValue(row.validatedSavedMins),
            reportedValue: reportedSavedMins,
            calculatedValue: calculatedSavedMins
        }
    ];

    const mismatches = checks.filter((check) => check.hasReportedValue && !valuesMatchWithinTolerance(check.reportedValue, check.calculatedValue));
    const integrityCheck = mismatches.length ? "FAIL" : "PASS";
    const integrityMessage = mismatches.length
        ? mismatches.map((check) => `${check.label}: reported ${formatDecimal(check.reportedValue)} min, calculated ${formatDecimal(check.calculatedValue)} min`).join(" | ")
        : "Reported totals match calculated totals.";

    return {
        manualAvgMins,
        manualVolumeMonth,
        autoAvgMins,
        autoVolumeMonth,
        calculatedManualMonthlyMins,
        calculatedAutoMonthlyMins,
        calculatedSavedMins,
        reportedManualMonthlyMins,
        reportedAutoMonthlyMins,
        reportedSavedMins,
        integrityCheck,
        integrityMessage,
        integrityMismatches: mismatches.length,
        integrityChecks: checks
    };
}

function buildAutomationComparison(sourceRows = []) {
    const grouped = new Map();

    sourceRows.forEach((row) => {
        const validation = buildAutomationValidation(row);
        const groupKey = String(row.projectId || row.label || row.sourceKey || "").trim();
        if (!groupKey) return;

        const current = grouped.get(groupKey);
        if (!current) {
            grouped.set(groupKey, {
                projectId: String(row.projectId || "").trim(),
                label: String(row.label || row.automationTool || row.processName || "Automation").trim(),
                department: String(row.department || "").trim(),
                roles: String(row.roles || "").trim(),
                monthlyTransactions: validation.manualVolumeMonth,
                automatedVolume: validation.autoVolumeMonth,
                manualMonthlyMins: validation.calculatedManualMonthlyMins,
                autoMonthlyMins: validation.calculatedAutoMonthlyMins,
                savedMonthlyMins: validation.calculatedSavedMins,
                manualWeightedMins: validation.calculatedManualMonthlyMins,
                autoWeightedMins: validation.calculatedAutoMonthlyMins,
                hourlyCostPhpWeighted: normalizeAutomationNumber(row.hourlyCostPhp || 0) * Math.max(validation.calculatedManualMonthlyMins, 1),
                sourceCount: 1,
                integrityChecks: [validation.integrityCheck],
                integrityMessages: [validation.integrityMessage],
                integrityMismatches: validation.integrityMismatches
            });
            return;
        }

        current.monthlyTransactions += validation.manualVolumeMonth;
        current.automatedVolume += validation.autoVolumeMonth;
        current.manualMonthlyMins += validation.calculatedManualMonthlyMins;
        current.autoMonthlyMins += validation.calculatedAutoMonthlyMins;
        current.savedMonthlyMins += validation.calculatedSavedMins;
        current.manualWeightedMins += validation.calculatedManualMonthlyMins;
        current.autoWeightedMins += validation.calculatedAutoMonthlyMins;
        current.hourlyCostPhpWeighted += normalizeAutomationNumber(row.hourlyCostPhp || 0) * Math.max(validation.calculatedManualMonthlyMins, 1);
        current.sourceCount += 1;
        current.integrityChecks.push(validation.integrityCheck);
        current.integrityMessages.push(validation.integrityMessage);
        current.integrityMismatches += validation.integrityMismatches;
    });

    return [...grouped.values()].map((entry) => {
        const manualMonthlyMins = Number(entry.manualMonthlyMins || 0);
        const autoMonthlyMins = Number(entry.autoMonthlyMins || 0);
        const manualVolume = Math.max(Number(entry.monthlyTransactions || 0), 1);
        const autoVolume = Math.max(Number(entry.automatedVolume || 0), 1);
        const weightBase = Math.max(Number(entry.manualWeightedMins || 0), 1);

        return {
            projectId: entry.projectId,
            label: entry.label,
            department: entry.department,
            roles: entry.roles,
            monthlyTransactions: Number(entry.monthlyTransactions || 0),
            automatedVolume: Number(entry.automatedVolume || 0),
            manualMonthlyMins,
            autoMonthlyMins,
            savedMonthlyMins: Number(entry.savedMonthlyMins || 0),
            avgHandlingTimeMins: manualMonthlyMins / manualVolume,
            automatedHandlingTimeMins: autoMonthlyMins / autoVolume,
            hourlyCostPhp: Number(entry.hourlyCostPhpWeighted || 0) / weightBase,
            integrityCheck: entry.integrityChecks.every((status) => status === "PASS") ? "PASS" : "FAIL",
            integrityMessage: entry.integrityMessages.filter(Boolean).join(" || "),
            integrityMismatches: Number(entry.integrityMismatches || 0),
            sourceCount: Number(entry.sourceCount || 0)
        };
    });
}

function formatDecimal(value, maximumFractionDigits = 2) {
    return new Intl.NumberFormat("en-PH", {
        minimumFractionDigits: 0,
        maximumFractionDigits
    }).format(Number(value) || 0);
}

function calculateMedian(values) {
    const sorted = values
        .map((value) => Number(value))
        .filter((value) => Number.isFinite(value))
        .sort((a, b) => a - b);

    if (!sorted.length) return 0;

    const middle = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0
        ? (sorted[middle - 1] + sorted[middle]) / 2
        : sorted[middle];
}

const AUTOMATION_PERIODS = [
    { key: "daily", label: "Daily", multiplier: 1 / 22 },
    { key: "weekly", label: "Weekly", multiplier: 1 / 4.33 },
    { key: "monthly", label: "Monthly", multiplier: 1 },
    { key: "annual", label: "Annual", multiplier: 12 }
];

function getAutomationPeriodConfig(periodKey) {
    return AUTOMATION_PERIODS.find((item) => item.key === periodKey) || AUTOMATION_PERIODS[AUTOMATION_PERIODS.length - 1];
}

function computeAutomationBenefits(entry, multiplier = 1) {
    const monthlyTransactions = Number(entry.monthlyTransactions || 0);
    const avgHandlingTimeMins = Number(entry.avgHandlingTimeMins || 0);
    const automatedHandlingTimeMins = Number(entry.automatedHandlingTimeMins || 0);
    const productiveHoursForPeriod = Math.max(PRODUCTIVE_HOURS_PER_MONTH * Number(multiplier || 1), 1);
    const automatedVolume = scaleAutomationMetric(entry.automatedVolume, multiplier);
    const manualVolume = scaleAutomationMetric(monthlyTransactions, multiplier);
    const calculatedManualMonthlyMins = Number(entry.manualMonthlyMins || (monthlyTransactions * avgHandlingTimeMins));
    const calculatedAutoMonthlyMins = Number(entry.autoMonthlyMins || (Number(entry.automatedVolume || monthlyTransactions) * automatedHandlingTimeMins));
    const calculatedSavedMonthlyMins = Number.isFinite(Number(entry.savedMonthlyMins))
        ? Number(entry.savedMonthlyMins)
        : Math.max(0, calculatedManualMonthlyMins - calculatedAutoMonthlyMins);
    const manualHours = scaleAutomationMetric(calculatedManualMonthlyMins / 60, multiplier);
    const automatedHours = scaleAutomationMetric(calculatedAutoMonthlyMins / 60, multiplier);
    const hoursSaved = scaleAutomationMetric(Math.max(0, calculatedSavedMonthlyMins) / 60, multiplier);
    const hourlyCostPhp = Number(entry.hourlyCostPhp || 450);
    const timeSavedValuePhp = hoursSaved * hourlyCostPhp;
    const capacityReleaseFte = hoursSaved / productiveHoursForPeriod;
    const annualCostPerFte = hourlyCostPhp * PRODUCTIVE_HOURS_PER_MONTH * 12;
    // Policy-based inference: without separate growth/hiring assumptions,
    // treat released FTE capacity as the avoided future FTE requirement.
    const annualCostAvoidancePhp = capacityReleaseFte * annualCostPerFte;
    const costAvoidancePhp = annualCostAvoidancePhp * (Number(multiplier || 1) / 12);

    return {
        ...entry,
        manualVolume,
        automatedVolume,
        manualHours,
        automatedHours,
        hoursSaved,
        integrityCheck: entry.integrityCheck || "PASS",
        integrityMessage: entry.integrityMessage || "Reported totals match calculated totals.",
        integrityMismatches: Number(entry.integrityMismatches || 0),
        hourlyCostPhp,
        timeSavedValuePhp,
        annualCostPerFte,
        costAvoidancePhp,
        capacityReleaseFte,
        totalBenefitPhp: costAvoidancePhp
    };
}

function getProjectLifecycleStatus(project) {
    const status = String(project?.status || "").trim().toLowerCase();
    const progress = Number(project?.progress || 0);

    if (status === "planning" || progress <= 0) return "not-started";
    if (status === "completed" || progress >= 100) return "completed";
    if (status === "in progress") return "in-progress";
    if (status === "live") return progress >= 100 ? "completed" : "in-progress";
    return progress >= 100 ? "completed" : "in-progress";
}

function normalizeAutomationLookupValue(value) {
    return String(value || "")
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "");
}

function buildAutomationLookupMap() {
    const lookup = new Map();

    AUTOMATION_COMPARISON.forEach((entry) => {
        const benefitEntry = computeAutomationBenefits(entry, 12);
        const keys = [
            entry.projectId,
            AUTOMATION_PROJECT_ALIASES[entry.projectId],
            entry.label,
            entry.department
        ];

        keys.forEach((key) => {
            const normalized = normalizeAutomationLookupValue(key);
            if (normalized) lookup.set(normalized, benefitEntry);
        });
    });

    Object.entries(AUTOMATION_PROJECT_ALIASES).forEach(([alias, target]) => {
        const targetEntry = AUTOMATION_COMPARISON.find((entry) => entry.projectId === target);
        if (!targetEntry) return;
        const normalizedAlias = normalizeAutomationLookupValue(alias);
        if (!normalizedAlias) return;
        lookup.set(normalizedAlias, computeAutomationBenefits(targetEntry, 12));
    });

    return lookup;
}

function resolveAutomationBenefitsForProject(project, lookup) {
    const keys = [
        project?.id,
        AUTOMATION_PROJECT_ALIASES[String(project?.id || "").trim()],
        project?.name
    ];

    for (const key of keys) {
        const normalized = normalizeAutomationLookupValue(key);
        if (!normalized) continue;
        const matched = lookup.get(normalized);
        if (matched) return matched;
    }

    return null;
}

function buildAutomationStatusSummaries() {
    const automationLookup = buildAutomationLookupMap();

    const summaryMap = {
        completed: { key: "completed", label: "Completed", projectCount: 0, hoursSaved: 0, totalBenefitPhp: 0 },
        "in-progress": { key: "in-progress", label: "In Progress", projectCount: 0, hoursSaved: 0, totalBenefitPhp: 0 },
        "not-started": { key: "not-started", label: "Not Started", projectCount: 0, hoursSaved: 0, totalBenefitPhp: 0 }
    };

    APP_STATE.projects.forEach((project) => {
        const lifecycleStatus = getProjectLifecycleStatus(project);
        const summary = summaryMap[lifecycleStatus];
        if (!summary) return;

        summary.projectCount += 1;
        const automation = resolveAutomationBenefitsForProject(project, automationLookup);
        if (!automation) return;

        summary.hoursSaved += automation.hoursSaved;
        summary.totalBenefitPhp += automation.totalBenefitPhp;
    });

    return [
        summaryMap.completed,
        summaryMap["in-progress"],
        summaryMap["not-started"]
    ];
}

function initializeExchangeRate() {
    hydrateCachedExchangeRate();
    if (APP_RUNTIME.exchangeRate.rate) {
        renderAutomationDashboard();
    }
    void fetchLatestExchangeRate();
    window.setInterval(() => {
        void fetchLatestExchangeRate();
    }, 30 * 60 * 1000);
}

function hydrateCachedExchangeRate() {
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.exchangeRateData);
        if (!raw) return;

        const cached = JSON.parse(raw);
        const rate = Number(cached?.rate);
        if (!Number.isFinite(rate) || rate <= 0) return;

        APP_RUNTIME.exchangeRate = {
            ...APP_RUNTIME.exchangeRate,
            rate,
            source: String(cached.source || ""),
            fetchedAt: String(cached.fetchedAt || ""),
            checkedAt: String(cached.checkedAt || cached.fetchedAt || ""),
            status: "cached",
            error: ""
        };
    } catch (error) {
        // Ignore malformed cached rate data.
    }
}

async function fetchLatestExchangeRate() {
    const requestStartedAt = new Date().toISOString();
    APP_RUNTIME.exchangeRate.status = "loading";
    APP_RUNTIME.exchangeRate.error = "";
    APP_RUNTIME.exchangeRate.checkedAt = requestStartedAt;
    renderAutomationDashboard();

    const providers = [
        {
            source: "open.er-api.com",
            url: "https://open.er-api.com/v6/latest/PHP",
            parse(data) {
                return {
                    rate: Number(data?.rates?.USD),
                    fetchedAt: String(data?.time_last_update_utc || "")
                };
            }
        },
        {
            source: "frankfurter.app",
            url: "https://api.frankfurter.app/latest?from=PHP&to=USD",
            parse(data) {
                return {
                    rate: Number(data?.rates?.USD),
                    fetchedAt: String(data?.date || "")
                };
            }
        }
    ];

    for (const provider of providers) {
        try {
            const response = await fetch(provider.url, {
                method: "GET",
                headers: { Accept: "application/json" }
            });

            if (!response.ok) {
                throw new Error(`Rate request failed with status ${response.status}`);
            }

            const data = await response.json();
            const parsed = provider.parse(data);
            if (!Number.isFinite(parsed.rate) || parsed.rate <= 0) {
                throw new Error("Invalid USD exchange rate received.");
            }

            APP_RUNTIME.exchangeRate = {
                ...APP_RUNTIME.exchangeRate,
                rate: parsed.rate,
                source: provider.source,
                fetchedAt: parsed.fetchedAt,
                checkedAt: new Date().toISOString(),
                status: "ready",
                error: ""
            };

            localStorage.setItem(STORAGE_KEYS.exchangeRateData, JSON.stringify({
                rate: parsed.rate,
                source: provider.source,
                fetchedAt: parsed.fetchedAt,
                checkedAt: APP_RUNTIME.exchangeRate.checkedAt
            }));

            renderAutomationDashboard();
            return;
        } catch (error) {
            APP_RUNTIME.exchangeRate.error = error instanceof Error ? error.message : "Unable to fetch exchange rate.";
        }
    }

    APP_RUNTIME.exchangeRate.status = APP_RUNTIME.exchangeRate.rate ? "cached" : "error";
    renderAutomationDashboard();
}

function convertPhpToUsd(value) {
    const amount = Number(value);
    const rate = Number(APP_RUNTIME.exchangeRate.rate);
    if (!Number.isFinite(amount) || !Number.isFinite(rate) || rate <= 0) return null;
    return amount * rate;
}

function getSavingsCurrencyLabel() {
    return convertPhpToUsd(1) === null ? "PHP" : "USD";
}

function getSavingsNarrativeLabel() {
    return convertPhpToUsd(1) === null ? "Philippine pesos" : "U.S. dollars";
}

function formatExchangeRateTimestamp(value) {
    const raw = String(value || "").trim();
    if (!raw) return "";

    const parsed = new Date(raw);
    if (!Number.isNaN(parsed.getTime())) {
        return new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "short"
        }).format(parsed);
    }

    if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
        const normalized = new Date(`${raw}T00:00:00`);
        if (!Number.isNaN(normalized.getTime())) {
            return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(normalized);
        }
    }

    return raw;
}

function formatExchangeRateValue(value) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 4,
        maximumFractionDigits: 4
    }).format(value);
}

function getExchangeRateNote() {
    const rate = Number(APP_RUNTIME.exchangeRate.rate);
    const providerTimestamp = formatExchangeRateTimestamp(APP_RUNTIME.exchangeRate.fetchedAt);
    const checkedTimestamp = formatExchangeRateTimestamp(APP_RUNTIME.exchangeRate.checkedAt);

    if (Number.isFinite(rate) && rate > 0) {
        const freshness = APP_RUNTIME.exchangeRate.status === "ready"
            ? "Live rate"
            : APP_RUNTIME.exchangeRate.status === "loading"
                ? "Refreshing rate"
                : "Last saved rate";
        const providerLabel = providerTimestamp ? ` Provider updated ${providerTimestamp}.` : "";
        const checkedLabel = checkedTimestamp ? ` Dashboard checked ${checkedTimestamp}.` : "";
        return `${freshness}: 1 PHP = ${formatExchangeRateValue(rate)} from ${APP_RUNTIME.exchangeRate.source || "exchange feed"}.${providerLabel}${checkedLabel}`;
    }

    if (APP_RUNTIME.exchangeRate.status === "loading") {
        return "Loading the latest PHP to USD exchange rate. Savings will switch to dollars as soon as the rate is available.";
    }

    return "Live USD rate is temporarily unavailable, so savings are still shown in Philippine pesos for now.";
}

function scaleAutomationMetric(value, multiplier) {
    return Number((Number(value) * Number(multiplier || 1)).toFixed(1));
}

function getAutomationChartLabel(label = "") {
    const normalized = String(label || "").trim();
    const labelMap = {
        "PO Preparation Hub": "PO Prep Hub",
        "Costing Automation": "Costing Auto",
        "Automated KPI Dash Board (Power Bi)": "Automated KPI"
    };

    return labelMap[normalized] || normalized;
}

function buildOverallComparisonChart(rows) {
    const pointCount = Math.max(rows.length, 1);
    const chartWidth = Math.max(860, 220 + (pointCount * 132));
    const chartHeight = 386;
    const leftAxisX = 88;
    const rightAxisX = chartWidth - 112;
    const topY = 76;
    const baseY = 286;
    const chartInnerHeight = baseY - topY;
    const maxVolume = Math.max(...rows.flatMap((item) => [item.manualVolume, item.automatedVolume]), 1);
    const maxBenefitValue = Math.max(...rows.map((item) => item.totalBenefitPhp), 1);
    const chartStartX = leftAxisX + 54;
    const chartUsableWidth = rightAxisX - chartStartX - 18;
    const chartStep = pointCount === 1 ? 0 : chartUsableWidth / (pointCount - 1);
    const groupWidth = 88;
    const barWidth = 34;
    const barGap = 10;
    const gridValues = [1, 0.833, 0.667, 0.5, 0.333, 0.167, 0];

    const points = rows.map((item, index) => {
        const anchorX = pointCount === 1
            ? chartStartX + (chartUsableWidth / 2)
            : chartStartX + index * chartStep;
        const groupX = anchorX - (groupWidth / 2);
        const centerX = groupX + groupWidth / 2;
        const manualHeight = Math.max(18, (item.manualVolume / maxVolume) * chartInnerHeight);
        const autoHeight = Math.max(18, (item.automatedVolume / maxVolume) * chartInnerHeight);
        const lineY = baseY - (item.totalBenefitPhp / maxBenefitValue) * chartInnerHeight;
        const labelParts = splitChartLabel(getAutomationChartLabel(item.label));
        return {
            ...item,
            groupX,
            centerX,
            manualX: groupX,
            autoX: groupX + barWidth + barGap,
            manualY: baseY - manualHeight,
            autoY: baseY - autoHeight,
            manualHeight,
            autoHeight,
            lineY,
            labelParts
        };
    });

    const savingsPath = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.centerX} ${point.lineY}`).join(" ");

    return `
        <svg class="automation-overall-chart" viewBox="0 0 ${chartWidth} ${chartHeight}" role="img" aria-label="Overall automation comparison chart">
            <defs>
                <linearGradient id="chartManualBar" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stop-color="#a8a6a1"></stop>
                    <stop offset="100%" stop-color="#8f8d88"></stop>
                </linearGradient>
                <linearGradient id="chartAutoBar" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stop-color="#2ab489"></stop>
                    <stop offset="100%" stop-color="#259e79"></stop>
                </linearGradient>
                <linearGradient id="chartSavingsLine" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stop-color="#4798f5"></stop>
                    <stop offset="100%" stop-color="#2d82e6"></stop>
                </linearGradient>
                <filter id="automationSoftGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="7" result="blur"></feGaussianBlur>
                    <feMerge>
                        <feMergeNode in="blur"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                </filter>
            </defs>
            <rect x="${leftAxisX}" y="${topY}" width="${rightAxisX - leftAxisX}" height="${baseY - topY}" rx="24" class="chart-plot"></rect>
            <text x="28" y="36" class="chart-axis-title">Volume</text>
            <text x="${chartWidth - 30}" y="36" class="chart-axis-title chart-axis-title-right">Total Benefits (${getSavingsCurrencyLabel()})</text>
            <line x1="${leftAxisX}" y1="${baseY}" x2="${rightAxisX}" y2="${baseY}" class="chart-axis"></line>
            ${gridValues.map((value, index) => {
                const y = topY + (index * chartInnerHeight) / (gridValues.length - 1);
                return `
                    <g>
                        <line x1="${leftAxisX}" y1="${y}" x2="${rightAxisX}" y2="${y}" class="chart-grid-line"></line>
                        <text x="${leftAxisX - 16}" y="${y + 4}" class="chart-scale chart-scale-left">${formatCompactNumber(Math.round(maxVolume * value))}</text>
                        <text x="${chartWidth - 30}" y="${y + 4}" class="chart-scale chart-scale-right">${formatCurrencyCompact(Math.round(maxBenefitValue * value))}</text>
                    </g>
                `;
            }).join("")}
            ${points.map((point) => `
                <g class="chart-series-group" data-automation-key="${escapeHtml(point.projectId)}">
                    <rect x="${point.manualX}" y="${point.manualY}" width="${barWidth}" height="${point.manualHeight}" rx="4" class="chart-bar chart-bar-manual"></rect>
                    <rect x="${point.autoX}" y="${point.autoY}" width="${barWidth}" height="${point.autoHeight}" rx="4" class="chart-bar chart-bar-auto"></rect>
                    <text x="${point.centerX}" y="${baseY + 22}" text-anchor="middle" class="chart-label">
                        <tspan x="${point.centerX}" dy="0">${escapeHtml(point.labelParts[0])}</tspan>
                        ${point.labelParts[1] ? `<tspan x="${point.centerX}" dy="14">${escapeHtml(point.labelParts[1])}</tspan>` : ""}
                    </text>
                </g>
            `).join("")}
            <path d="${savingsPath}" class="chart-line-glow chart-line-glow-savings"></path>
            <path d="${savingsPath}" class="chart-line chart-line-savings"></path>
            ${points.map((point) => `
                <g class="chart-series-group" data-automation-key="${escapeHtml(point.projectId)}">
                    <circle cx="${point.centerX}" cy="${point.lineY}" r="9" class="chart-point-ring chart-point-ring-savings"></circle>
                    <circle cx="${point.centerX}" cy="${point.lineY}" r="5.5" class="chart-point chart-point-savings" filter="url(#automationSoftGlow)"></circle>
                </g>
            `).join("")}
        </svg>
    `;
}

function buildAutomationLifecycleChart(statusSummaries) {
    const rows = Array.isArray(statusSummaries) ? statusSummaries : [];
    if (!rows.length) return "";

    const chartWidth = 760;
    const chartHeight = 360;
    const leftAxisX = 86;
    const rightAxisX = 700;
    const topY = 52;
    const baseY = 300;
    const chartInnerHeight = baseY - topY;
    const chartInnerWidth = rightAxisX - leftAxisX;
    const groupWidth = chartInnerWidth / Math.max(rows.length, 1);
    const barWidth = 72;
    const maxProjectCount = Math.max(...rows.map((item) => item.projectCount), 1);
    const maxBenefitValue = Math.max(...rows.map((item) => item.totalBenefitPhp), 1);
    const gridValues = [1, 0.75, 0.5, 0.25, 0];

    const points = rows.map((item, index) => {
        const centerX = leftAxisX + (groupWidth * index) + groupWidth / 2;
        const countHeight = Math.max(item.projectCount > 0 ? 18 : 0, (item.projectCount / maxProjectCount) * chartInnerHeight);
        const lineY = baseY - (item.totalBenefitPhp / maxBenefitValue) * chartInnerHeight;

        return {
            ...item,
            centerX,
            barX: centerX - barWidth / 2,
            barY: baseY - countHeight,
            countHeight,
            lineY,
            labelParts: splitChartLabel(item.label)
        };
    });

    const benefitsPath = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.centerX} ${point.lineY}`).join(" ");

    return `
        <svg class="automation-overall-chart" viewBox="0 0 ${chartWidth} ${chartHeight}" role="img" aria-label="Project lifecycle status comparison chart">
            <defs>
                <linearGradient id="chartLifecycleBar" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stop-color="#d9e1ea"></stop>
                    <stop offset="100%" stop-color="#9aa8b8"></stop>
                </linearGradient>
                <linearGradient id="chartLifecycleLine" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stop-color="#4798f5"></stop>
                    <stop offset="100%" stop-color="#2d82e6"></stop>
                </linearGradient>
                <filter id="automationLifecycleGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="7" result="blur"></feGaussianBlur>
                    <feMerge>
                        <feMergeNode in="blur"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                </filter>
            </defs>
            <rect x="${leftAxisX}" y="${topY}" width="${rightAxisX - leftAxisX}" height="${baseY - topY}" rx="24" class="chart-plot"></rect>
            <text x="28" y="34" class="chart-axis-title">Projects</text>
            <text x="728" y="34" class="chart-axis-title chart-axis-title-right">Total Benefits (${getSavingsCurrencyLabel()})</text>
            <line x1="${leftAxisX}" y1="${baseY}" x2="${rightAxisX}" y2="${baseY}" class="chart-axis"></line>
            ${gridValues.map((value, index) => {
                const y = topY + (index * chartInnerHeight) / (gridValues.length - 1);
                return `
                    <g>
                        <line x1="${leftAxisX}" y1="${y}" x2="${rightAxisX}" y2="${y}" class="chart-grid-line"></line>
                        <text x="72" y="${y + 4}" class="chart-scale chart-scale-left">${formatDecimal(maxProjectCount * value, 0)}</text>
                        <text x="728" y="${y + 4}" class="chart-scale chart-scale-right">${formatCurrencyCompact(Math.round(maxBenefitValue * value))}</text>
                    </g>
                `;
            }).join("")}
            ${points.map((point) => `
                <g class="chart-series-group" data-automation-status-key="${escapeHtml(point.key)}">
                    <rect x="${point.barX}" y="${point.barY}" width="${barWidth}" height="${point.countHeight}" rx="8" fill="url(#chartLifecycleBar)" class="chart-bar"></rect>
                    <text x="${point.centerX}" y="${baseY + 22}" text-anchor="middle" class="chart-label">
                        <tspan x="${point.centerX}" dy="0">${escapeHtml(point.labelParts[0])}</tspan>
                        ${point.labelParts[1] ? `<tspan x="${point.centerX}" dy="14">${escapeHtml(point.labelParts[1])}</tspan>` : ""}
                    </text>
                </g>
            `).join("")}
            <path d="${benefitsPath}" class="chart-line-glow chart-line-glow-savings"></path>
            <path d="${benefitsPath}" class="chart-line chart-line-savings"></path>
            ${points.map((point) => `
                <g class="chart-series-group" data-automation-status-key="${escapeHtml(point.key)}">
                    <circle cx="${point.centerX}" cy="${point.lineY}" r="9" class="chart-point-ring chart-point-ring-savings"></circle>
                    <circle cx="${point.centerX}" cy="${point.lineY}" r="5.5" class="chart-point chart-point-savings" filter="url(#automationLifecycleGlow)"></circle>
                </g>
            `).join("")}
        </svg>
    `;
}

function splitChartLabel(label) {
    const words = String(label || "").trim().split(/\s+/).filter(Boolean);
    if (words.length <= 1) return [String(label || "").trim()];

    const midpoint = Math.ceil(words.length / 2);
    return [
        words.slice(0, midpoint).join(" "),
        words.slice(midpoint).join(" ")
    ];
}

function renderProjects(projects) {
    const grid = document.getElementById("projects-grid");
    const pagination = document.getElementById("project-pagination");
    if (!grid) return;
    const isAdmin = APP_STATE.adminLoggedIn;

    const query = String(document.getElementById("global-search")?.value || "").trim().toLowerCase();
    const filteredProjects = projects.filter((project) => {
        const matchesFilter = APP_STATE.currentProjectFilter === "all" || project.filter === APP_STATE.currentProjectFilter;
        const matchesQuery = !query || buildSearchText([project.name, project.description, project.ownerName, project.status, project.overseenBy, project.assignedBy]).includes(query);
        return matchesFilter && matchesQuery;
    });
    const totalPages = Math.max(1, Math.ceil(filteredProjects.length / APP_STATE.projectsPerPage));
    APP_STATE.currentProjectPage = Math.min(APP_STATE.currentProjectPage, totalPages);
    const startIndex = (APP_STATE.currentProjectPage - 1) * APP_STATE.projectsPerPage;
    const visibleProjects = isAdmin
        ? filteredProjects
        : filteredProjects.slice(startIndex, startIndex + APP_STATE.projectsPerPage);

    grid.innerHTML = visibleProjects.map((project) => {
        const openButton = project.systemUrl
            ? `<button class="btn btn-primary" type="button" data-open-url="${project.systemUrl}">Open System</button>`
            : `<button class="btn btn-primary" type="button" data-project-modal="${project.id}">Open System</button>`;
        const requestButton = `<button class="btn btn-secondary" type="button" data-project-modal="${project.id}">View Details</button>`;

        return `
            <article class="project-card glass reveal searchable-item ${isAdmin ? "is-admin" : ""}" draggable="${isAdmin ? "true" : "false"}" data-project-id="${project.id}" data-filter="${project.filter}" data-search="${buildSearchText([project.name, project.description, project.ownerName, project.status, project.overseenBy, project.assignedBy])}">
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

    if (pagination && !isAdmin) {
        const showingFrom = filteredProjects.length ? startIndex + 1 : 0;
        const showingTo = Math.min(startIndex + APP_STATE.projectsPerPage, filteredProjects.length);
        pagination.innerHTML = `
            <div class="project-pagination-status">Showing ${showingFrom}-${showingTo} of ${filteredProjects.length} projects</div>
            <div class="project-pagination-actions">
                <button class="btn btn-secondary" type="button" data-project-page="prev" ${APP_STATE.currentProjectPage === 1 ? "disabled" : ""}>Previous 8</button>
                <span class="project-pagination-page">Page ${APP_STATE.currentProjectPage} of ${totalPages}</span>
                <button class="btn btn-secondary" type="button" data-project-page="next" ${APP_STATE.currentProjectPage >= totalPages ? "disabled" : ""}>Next 8</button>
            </div>
        `;
    } else if (pagination) {
        pagination.innerHTML = `
            <div class="project-pagination-status">Admin reorder mode: showing all ${filteredProjects.length} projects</div>
        `;
    }

    updateAdminUI();
    setupProjectDragAndDrop();
    setupRevealAnimations();
    refreshSearchResults();
}

function setupProjectDragAndDrop() {
    const grid = document.getElementById("projects-grid");
    if (!grid || !APP_STATE.adminLoggedIn) return;

    let dragProjectId = null;

    const clearDragStyles = () => {
        grid.querySelectorAll(".project-card").forEach((card) => {
            card.classList.remove("dragging", "drag-over");
        });
    };

    const reorderProjects = (sourceId, targetId) => {
        if (!sourceId || !targetId || sourceId === targetId) return;
        const sourceIndex = APP_STATE.projects.findIndex((project) => project.id === sourceId);
        const targetIndex = APP_STATE.projects.findIndex((project) => project.id === targetId);
        if (sourceIndex === -1 || targetIndex === -1) return;

        const [moved] = APP_STATE.projects.splice(sourceIndex, 1);
        APP_STATE.projects.splice(targetIndex, 0, moved);
        saveProjects();
        renderProjects(APP_STATE.projects);
    };

    grid.querySelectorAll(".project-card").forEach((card) => {
        const projectId = String(card.dataset.projectId || "");

        card.addEventListener("dragstart", (event) => {
            dragProjectId = projectId;
            card.classList.add("dragging");
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData("text/plain", projectId);
            if (event.dataTransfer.setDragImage) {
                event.dataTransfer.setDragImage(card, 20, 20);
            }
        });

        card.addEventListener("dragenter", (event) => {
            event.preventDefault();
            if (projectId !== dragProjectId) {
                card.classList.add("drag-over");
            }
        });

        card.addEventListener("dragover", (event) => {
            event.preventDefault();
            if (projectId !== dragProjectId) {
                card.classList.add("drag-over");
            }
            event.dataTransfer.dropEffect = "move";
        });

        card.addEventListener("dragleave", () => {
            card.classList.remove("drag-over");
        });

        card.addEventListener("drop", (event) => {
            event.preventDefault();
            card.classList.remove("drag-over");
            if (dragProjectId) {
                reorderProjects(dragProjectId, projectId);
            }
            clearDragStyles();
        });

        card.addEventListener("dragend", () => {
            dragProjectId = null;
            clearDragStyles();
        });
    });
}

function renderServices() {
    const container = document.getElementById("services-grid");
    if (!container) return;
    const isAdmin = APP_STATE.adminLoggedIn;

    container.innerHTML = APP_STATE.services.map((group) => `
        <section class="service-category">
            <h3>${group.category}</h3>
            <div class="service-grid">
                ${group.items.map((service, index) => {
                    if (String(service.name || "").trim().toLowerCase() === "it services") return "";
                    return `
                    <article class="service-tile glass reveal searchable-item" data-search="${buildSearchText([group.category, service.name, service.description, service.status])}">
                        <div class="service-header">
                            <span class="service-icon" aria-hidden="true">${getServiceIconMarkup(service.name)}</span>
                        </div>
                        <div class="service-body">
                            <h4>${service.name}</h4>
                            ${formatServiceDescription(service.description)}
                        </div>
                        <div class="tile-meta">
                            <span class="status-badge ${service.status === "online" ? "status-online" : "status-planning"}">${service.status}</span>
                        </div>
                        ${isAdmin ? `<button class="btn btn-secondary" type="button" data-edit-service="${group.category}" data-edit-service-index="${index}">Edit Service</button>` : ""}
                    </article>
                `;
                }).join("")}
            </div>
        </section>
    `).join("");
    setupRevealAnimations();
    refreshSearchResults();
}

function formatServiceDescription(description) {
    const items = String(description || "")
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean);

    if (items.length <= 1) {
        return formatServiceDescriptionItem(items[0] || "");
    }

    return `
        <ul class="service-copy service-bullet-list">
            ${items.map((item) => `<li class="service-bullet-item">${formatServiceDescriptionItem(item)}</li>`).join("")}
        </ul>
    `;
}

function formatServiceDescriptionItem(item) {
    const text = String(item || "").trim();
    if (!text) return `<p class="service-copy"></p>`;

    const colonIndex = text.indexOf(":");
    if (colonIndex === -1) {
        return `<p class="service-copy">${text}</p>`;
    }

    const title = text.slice(0, colonIndex).trim();
    const detail = text.slice(colonIndex + 1).trim();

    return `
        <div class="service-description-item">
            <strong class="service-description-title">${title}</strong>
            <p class="service-description-detail">${detail}</p>
        </div>
    `;
}

function getServiceIconMarkup(serviceName) {
    const name = String(serviceName || "").toLowerCase();

    if (name.includes("end-user computing")) {
        return '<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="11" rx="2"></rect><path d="M10 19h4"></path><path d="M8 16h8"></path></svg>';
    }
    if (name.includes("service desk")) {
        return '<svg viewBox="0 0 24 24" fill="none"><path d="M4 6h16"></path><path d="M4 12h10"></path><path d="M4 18h8"></path></svg>';
    }
    if (name.includes("identity") || name.includes("access")) {
        return '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3"></circle><path d="M6 19a6 6 0 0 1 12 0"></path><path d="M17 10l3 3-3 3"></path></svg>';
    }
    if (name.includes("business applications") || name.includes("data services")) {
        return '<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="7" height="7" rx="1.5"></rect><rect x="13" y="4" width="7" height="7" rx="1.5"></rect><rect x="4" y="13" width="7" height="7" rx="1.5"></rect><path d="M16.5 13v7"></path><path d="M13 16.5h7"></path></svg>';
    }
    if (name.includes("network") || name.includes("infrastructure")) {
        return '<svg viewBox="0 0 24 24" fill="none"><rect x="9" y="4" width="6" height="4" rx="1"></rect><rect x="4" y="16" width="6" height="4" rx="1"></rect><rect x="14" y="16" width="6" height="4" rx="1"></rect><path d="M12 8v4"></path><path d="M7 16v-2h10v2"></path></svg>';
    }
    if (name.includes("security") || name.includes("protection")) {
        return '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 4.5-3 7.8-7 10-4-2.2-7-5.5-7-10V6l7-3z"></path><path d="M9.5 12l1.8 1.8L15 10.2"></path></svg>';
    }
    if (name.includes("backup") || name.includes("disaster")) {
        return '<svg viewBox="0 0 24 24" fill="none"><path d="M12 5a7 7 0 1 0 6.6 9.2"></path><path d="M12 1v4"></path><path d="M19 5v4h-4"></path></svg>';
    }
    if (name.includes("change") || name.includes("release")) {
        return '<svg viewBox="0 0 24 24" fill="none"><path d="M7 7h10"></path><path d="M7 12h7"></path><path d="M7 17h10"></path><path d="M17 5l2 2-2 2"></path><path d="M14 15l2 2-2 2"></path></svg>';
    }
    if (name.includes("automation") || name.includes("digital enablement")) {
        return '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 1 1-4 0v-.2a1 1 0 0 0-.7-.9 1 1 0 0 0-1 .2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a2 2 0 1 1 0-4h.2a1 1 0 0 0 .9-.7 1 1 0 0 0-.2-1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1 1 0 0 0 1.1.2 1 1 0 0 0 .6-.9V4a2 2 0 1 1 4 0v.2a1 1 0 0 0 .7.9 1 1 0 0 0 1-.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1 1 0 0 0-.2 1.1 1 1 0 0 0 .9.6H20a2 2 0 1 1 0 4h-.2a1 1 0 0 0-.9.7"></path></svg>';
    }
    if (name.includes("governance") || name.includes("compliance") || name.includes("policy")) {
        return '<svg viewBox="0 0 24 24" fill="none"><path d="M8 4h8"></path><path d="M9 2h6v4H9z"></path><rect x="5" y="6" width="14" height="16" rx="2"></rect><path d="M8 11h8"></path><path d="M8 15h8"></path></svg>';
    }

    return '<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="14" rx="3"></rect><path d="M8 10h8"></path><path d="M8 14h5"></path></svg>';
}

function renderTeam() {
    const grid = document.getElementById("team-grid");
    if (!grid) return;
    const isAdmin = APP_STATE.adminLoggedIn;

    grid.innerHTML = APP_STATE.team.map((member, index) => {
        const assignments = getProjectsForMember(member);
        const isAdminMember = member.level === "executive" || /admin/i.test(member.role);
        const assignmentSummary = assignments.length
            ? assignments.slice(0, 2).map((project) => project.name).join(" | ")
            : "No active project assignment yet";
        const titleText = member.level === "executive" ? `${member.name} — ${member.role}` : member.name;
        const roleText = member.level !== "executive" ? `<p class="member-role">${member.role}</p>` : "";

        return `
        <article class="team-card glass reveal searchable-item ${member.level}" draggable="${isAdmin ? "true" : "false"}" data-team-index="${index}" data-search="${buildSearchText([member.name, member.role, member.contactFor, ...member.skills])}">
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
            ${!isAdminMember ? `
            <div class="member-assignment">
                <span class="member-assignment-label">Assigned Projects</span>
                <p>${assignmentSummary}</p>
            </div>
            ` : ""}
            <div class="member-actions">
                <button class="btn btn-primary" type="button" data-message="${member.email}" data-member="${member.name}">Message</button>
                <button class="btn btn-secondary" type="button" data-modal="profile" data-member="${member.name}">View Profile</button>
                ${isAdmin ? `<button class="btn btn-secondary" type="button" data-edit-team="${index}">Edit Member</button>` : ""}
            </div>
            </div>
        </article>
    `;
    }).join("");
    setupTeamDragAndDrop();
    setupRevealAnimations();
    refreshSearchResults();
}

function setupTeamDragAndDrop() {
    const grid = document.getElementById("team-grid");
    if (!grid || !APP_STATE.adminLoggedIn) return;

    let dragSrcIndex = null;

    const clearDragStyles = () => {
        grid.querySelectorAll(".team-card").forEach((card) => {
            card.classList.remove("dragging", "drag-over");
        });
    };

    const reorderTeam = (sourceIndex, targetIndex) => {
        if (sourceIndex === targetIndex) return;
        const moved = APP_STATE.team.splice(sourceIndex, 1)[0];
        APP_STATE.team.splice(targetIndex, 0, moved);
        APP_STATE.team = APP_STATE.team.map((member, index) => ({ ...member, hierarchy: index }));
        saveTeam();
        renderTeam();
    };

    grid.querySelectorAll(".team-card").forEach((card) => {
        const index = Number(card.dataset.teamIndex);
        card.addEventListener("dragstart", (event) => {
            dragSrcIndex = index;
            card.classList.add("dragging");
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData("text/plain", String(index));
        });

        card.addEventListener("dragover", (event) => {
            event.preventDefault();
            card.classList.add("drag-over");
            event.dataTransfer.dropEffect = "move";
        });

        card.addEventListener("dragleave", () => {
            card.classList.remove("drag-over");
        });

        card.addEventListener("drop", (event) => {
            event.preventDefault();
            const targetIndex = Number(card.dataset.teamIndex);
            card.classList.remove("drag-over");
            if (dragSrcIndex !== null) {
                reorderTeam(dragSrcIndex, targetIndex);
            }
            clearDragStyles();
        });

        card.addEventListener("dragend", () => {
            clearDragStyles();
        });
    });
}

function setupSupportDragAndDrop() {
    const grid = document.getElementById("support-stack");
    if (!grid || !APP_STATE.adminLoggedIn) return;

    let dragSrcIndex = null;

    const clearDragStyles = () => {
        grid.querySelectorAll(".support-card").forEach((card) => {
            card.classList.remove("dragging", "drag-over");
        });
    };

    const reorderSupport = (sourceIndex, targetIndex) => {
        if (sourceIndex === targetIndex) return;
        const moved = APP_STATE.supportCards.splice(sourceIndex, 1)[0];
        APP_STATE.supportCards.splice(targetIndex, 0, moved);
        saveSupportCards();
        renderSupportCards();
    };

    grid.addEventListener("dragenter", (event) => {
        event.preventDefault();
    });

    grid.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    grid.addEventListener("drop", (event) => {
        event.preventDefault();
        const targetCard = event.target.closest(".support-card");
        const targetIndex = targetCard ? Number(targetCard.dataset.supportIndex) : null;
        if (dragSrcIndex !== null && targetIndex !== null && !Number.isNaN(targetIndex)) {
            reorderSupport(dragSrcIndex, targetIndex);
        }
        clearDragStyles();
    });

    grid.querySelectorAll(".support-card").forEach((card) => {
        const index = Number(card.dataset.supportIndex);
        card.addEventListener("dragstart", (event) => {
            dragSrcIndex = index;
            card.classList.add("dragging");
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData("text/plain", String(index));
            if (event.dataTransfer.setDragImage) {
                event.dataTransfer.setDragImage(card, 20, 20);
            }
        });

        card.addEventListener("dragenter", (event) => {
            event.preventDefault();
            card.classList.add("drag-over");
        });

        card.addEventListener("dragover", (event) => {
            event.preventDefault();
            card.classList.add("drag-over");
            event.dataTransfer.dropEffect = "move";
        });

        card.addEventListener("dragleave", () => {
            card.classList.remove("drag-over");
        });

        card.addEventListener("drop", (event) => {
            event.preventDefault();
            const targetIndex = Number(card.dataset.supportIndex);
            card.classList.remove("drag-over");
            if (dragSrcIndex !== null) {
                reorderSupport(dragSrcIndex, targetIndex);
            }
            clearDragStyles();
        });

        card.addEventListener("dragend", () => {
            clearDragStyles();
        });
    });
}

function setupContactGuideDragAndDrop() {
    const grid = document.getElementById("contact-guide");
    if (!grid || !APP_STATE.adminLoggedIn) return;

    let dragSrcIndex = null;

    const clearDragStyles = () => {
        grid.querySelectorAll(".guide-row").forEach((row) => {
            row.classList.remove("dragging", "drag-over");
        });
    };

    const reorderGuide = (sourceIndex, targetIndex) => {
        if (sourceIndex === targetIndex) return;
        const moved = APP_STATE.contactGuide.splice(sourceIndex, 1)[0];
        APP_STATE.contactGuide.splice(targetIndex, 0, moved);
        saveContactGuide();
        renderContactGuide();
    };

    grid.querySelectorAll(".guide-row").forEach((row) => {
        const index = Number(row.dataset.guideIndex);
        row.addEventListener("dragstart", (event) => {
            dragSrcIndex = index;
            row.classList.add("dragging");
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData("text/plain", String(index));
            if (event.dataTransfer.setDragImage) {
                event.dataTransfer.setDragImage(row, 20, 20);
            }
        });

        row.addEventListener("dragenter", (event) => {
            event.preventDefault();
            row.classList.add("drag-over");
        });

        row.addEventListener("dragover", (event) => {
            event.preventDefault();
            row.classList.add("drag-over");
            event.dataTransfer.dropEffect = "move";
        });

        row.addEventListener("dragleave", () => {
            row.classList.remove("drag-over");
        });

        row.addEventListener("drop", (event) => {
            event.preventDefault();
            const targetIndex = Number(row.dataset.guideIndex);
            row.classList.remove("drag-over");
            if (dragSrcIndex !== null) {
                reorderGuide(dragSrcIndex, targetIndex);
            }
            clearDragStyles();
        });

        row.addEventListener("dragend", () => {
            clearDragStyles();
        });
    });
}

function setupQuickHelpDragAndDrop() {
    const grid = document.getElementById("quick-help-grid");
    if (!grid || !APP_STATE.adminLoggedIn) return;

    let dragSrcIndex = null;

    const clearDragStyles = () => {
        grid.querySelectorAll(".quick-help-card").forEach((card) => {
            card.classList.remove("dragging", "drag-over");
        });
    };

    const reorderQuickHelp = (sourceIndex, targetIndex) => {
        if (sourceIndex === targetIndex) return;
        const moved = APP_STATE.quickHelp.splice(sourceIndex, 1)[0];
        APP_STATE.quickHelp.splice(targetIndex, 0, moved);
        saveQuickHelp();
        renderQuickHelp();
    };

    grid.querySelectorAll(".quick-help-card").forEach((card) => {
        const index = Number(card.dataset.helpIndex);
        card.addEventListener("dragstart", (event) => {
            dragSrcIndex = index;
            card.classList.add("dragging");
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData("text/plain", String(index));
            if (event.dataTransfer.setDragImage) {
                event.dataTransfer.setDragImage(card, 20, 20);
            }
        });

        card.addEventListener("dragenter", (event) => {
            event.preventDefault();
            card.classList.add("drag-over");
        });

        card.addEventListener("dragover", (event) => {
            event.preventDefault();
            card.classList.add("drag-over");
            event.dataTransfer.dropEffect = "move";
        });

        card.addEventListener("dragleave", () => {
            card.classList.remove("drag-over");
        });

        card.addEventListener("drop", (event) => {
            event.preventDefault();
            const targetIndex = Number(card.dataset.helpIndex);
            card.classList.remove("drag-over");
            if (dragSrcIndex !== null) {
                reorderQuickHelp(dragSrcIndex, targetIndex);
            }
            clearDragStyles();
        });

        card.addEventListener("dragend", () => {
            clearDragStyles();
        });
    });
}

function renderContactGuide() {
    const guide = document.getElementById("contact-guide");
    if (!guide) return;

    const rows = APP_STATE.contactGuide;
    guide.innerHTML = `
        <div class="contact-guide-header">
            <span class="eyebrow">Who To Contact</span>
            <h3>Who to contact and why</h3>
        </div>
        ${rows.map((row, index) => `
        <div class="guide-row searchable-item" draggable="${APP_STATE.adminLoggedIn ? "true" : "false"}" data-guide-index="${index}" data-search="${buildSearchText([row.label, row.issue, row.owner])}">
            <div class="guide-main">
                <span class="guide-kicker">${row.label}</span>
                <strong class="guide-title">${row.issue}</strong>
                <p class="guide-caption">Recommended contact</p>
            </div>
            <span class="guide-person"><span class="guide-person-badge">${row.initials}</span>${row.owner}</span>
        </div>
    `).join("")}
    `;

    setupContactGuideDragAndDrop();
    refreshSearchResults();
}

function renderQuickHelp() {
    const container = document.getElementById("quick-help-grid");
    if (!container) return;
    const isAdmin = APP_STATE.adminLoggedIn;

    container.innerHTML = APP_STATE.quickHelp.map((item, index) => `
        <article class="quick-help-card glass searchable-item" draggable="${isAdmin ? "true" : "false"}" data-help-index="${index}" data-search="${buildSearchText([item.label, item.title, item.body, item.action || "", item.person || ""])}">
            ${item.label ? `
            <div class="quick-help-top">
                <span class="quick-help-label">${item.label}</span>
            </div>` : ""}
            <div>
                <h3>${item.title}</h3>
                <div class="announcement-body">${item.bodyHtml || `<p>${item.body}</p>`}</div>
            </div>
            ${!item.action
                ? ""
                : item.actionType === "url"
                ? `<button class="btn btn-secondary" type="button" data-open-url="${item.value}">${item.action}</button>`
                : item.actionType === "message"
                ? `<button class="btn btn-secondary" type="button" data-message="${item.value}" data-member="${item.person}">${item.action}</button>`
                : `<button class="btn btn-secondary" type="button" data-modal="${item.value}">${item.action}</button>`
            }
            ${isAdmin ? `<button class="btn btn-secondary" type="button" data-edit-help="${index}">Edit Card</button>` : ""}
        </article>
    `).join("");
    setupQuickHelpDragAndDrop();
    renderPolicyDocuments();
    refreshSearchResults();
}

function renderPolicyDocuments() {
    const container = document.getElementById("policy-library-grid");
    if (!container) return;
    const isAdmin = APP_STATE.adminLoggedIn;

    container.innerHTML = APP_STATE.policyDocuments.map((document, index) => {
        const sections = document.sectionIndexes
            .map((index) => APP_STATE.quickHelp[index])
            .filter(Boolean);
        const sectionTitles = sections.map((section) => section.title).join(" ");

        return `
            <article class="policy-document-card glass searchable-item" role="link" tabindex="0" data-open-url="${document.url}" data-search="${buildSearchText([document.title, document.description, sectionTitles, "pdf", "policy"])}">
                <div class="policy-document-top">
                    <span class="policy-document-badge">${document.label}</span>
                    <span class="policy-document-type">${document.typeLabel}</span>
                </div>
                <div class="policy-document-icon" aria-hidden="true">${document.iconLabel}</div>
                <div>
                    <h3>${document.title}</h3>
                    <p>${document.description}</p>
                </div>
                <div class="policy-document-list">
                    ${sections.map((section) => `<span>${section.title}</span>`).join("")}
                </div>
                <button class="btn btn-secondary" type="button" data-open-url="${document.url}">${document.actionLabel}</button>
                ${isAdmin ? `<button class="btn btn-secondary" type="button" data-edit-policy-document="${index}">Edit Document</button>` : ""}
            </article>
        `;
    }).join("");
}

function getPolicyVisual(index, item) {
    const visual = POLICY_VISUALS[index];
    return {
        image: visual?.image || "",
        alt: visual?.alt || item?.title || "Policy preview"
    };
}

function buildPolicyPreviewBrowser() {
    const previewItems = APP_STATE.quickHelp.map((item, index) => {
        return `
            <button
                class="policy-nav-item ${index === 0 ? "is-active" : ""}"
                type="button"
                data-policy-preview="${index}"
                data-policy-title="${escapeHtml(item.title)}"
            >
                <strong>${item.title}</strong>
            </button>
        `;
    }).join("");

    const firstItem = APP_STATE.quickHelp[0];

    return `
        <div class="policy-browser">
            <div class="policy-browser-list">
                ${previewItems}
            </div>
            <div class="policy-browser-preview">
                <div class="policy-preview-header">
                    <h3 id="policy-preview-title">${firstItem?.title || "Policy Preview"}</h3>
                    <div id="policy-preview-summary" class="announcement-body">${firstItem?.bodyHtml || `<p>${firstItem?.body || ""}</p>`}</div>
                </div>
            </div>
        </div>
    `;
}

function renderSupportCards() {
    const container = document.getElementById("support-stack");
    if (!container) return;
    const isAdmin = APP_STATE.adminLoggedIn;

    container.innerHTML = APP_STATE.supportCards.map((item, index) => `
        <div class="support-card searchable-item" draggable="${isAdmin ? "true" : "false"}" data-support-index="${index}" data-search="${buildSearchText([item.label, item.title, item.body, item.action, item.person || "", "support"])}">
            <div class="support-card-handle" draggable="true" title="Drag to reorder">☰</div>
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
    setupSupportDragAndDrop();
    refreshSearchResults();
}

function renderMissionVision() {
    const containers = document.querySelectorAll("[data-mission-vision-panel]");
    if (!containers.length) return;

    const mv = APP_CONFIG.missionVision;
    const content = `
        <article class="mission-vision-card glass searchable-item" data-search="${buildSearchText(["Madison88 IT & D", "Mission", mv.mission.content, "Vision", mv.vision.content, "Values", mv.values.content])}">
            <div class="mission-vision-grid">
                <div class="mission-vision-block">
                    <h3>${mv.mission.title}</h3>
                    <p class="mission-subtitle">${mv.mission.subtitle}</p>
                    <p class="announcement-body">${mv.mission.content}</p>
                    <div class="mission-highlights">
                        ${mv.mission.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join("")}
                    </div>
                </div>
                <div class="mission-vision-block">
                    <h3>${mv.vision.title}</h3>
                    <p class="mission-subtitle">${mv.vision.subtitle}</p>
                    <p class="announcement-body">${mv.vision.content}</p>
                    <div class="mission-highlights">
                        ${mv.vision.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join("")}
                    </div>
                </div>
                <div class="mission-vision-block">
                    <h3>${mv.values.title}</h3>
                    <p class="mission-subtitle">${mv.values.subtitle}</p>
                    <p class="announcement-body">${mv.values.content}</p>
                </div>
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
        APP_STATE.currentProjectFilter = filter;
        APP_STATE.currentProjectPage = 1;
        renderProjects(APP_STATE.projects);
    });
}

function setupProjectAdmin() {
    const logoTrigger = document.getElementById("admin-logo-trigger");
    const overviewButton = document.getElementById("edit-overview-button");
    const addProjectButton = document.getElementById("add-project-button");
    const addTeamButton = document.getElementById("add-team-button");
    let logoClickCount = 0;
    let logoClickTimer = null;

    const resetLogoClicks = () => {
        logoClickCount = 0;
        if (logoClickTimer) {
            clearTimeout(logoClickTimer);
            logoClickTimer = null;
        }
    };

    const handleLogoAdminTrigger = () => {
        logoClickCount += 1;
        if (logoClickTimer) clearTimeout(logoClickTimer);

        if (logoClickCount >= 5) {
            resetLogoClicks();
            if (APP_STATE.adminLoggedIn) {
                openManagedModal(buildBulkEditModal());
                return;
            }
            openManagedModal(buildAdminLoginModal());
            return;
        }

        logoClickTimer = setTimeout(() => {
            resetLogoClicks();
        }, 1600);
    };

    if (logoTrigger) {
        logoTrigger.addEventListener("click", handleLogoAdminTrigger);
        logoTrigger.addEventListener("keydown", (event) => {
            if (event.key !== "Enter" && event.key !== " ") return;
            event.preventDefault();
            handleLogoAdminTrigger();
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

    input.addEventListener("input", () => {
        APP_STATE.currentProjectPage = 1;
        renderProjects(APP_STATE.projects);
    });
    clearButton.addEventListener("click", () => {
        input.value = "";
        APP_STATE.currentProjectPage = 1;
        renderProjects(APP_STATE.projects);
        input.focus();
    });
}

function setupAdminAutofill() {
    ensureTeamAutofillList();
    document.querySelectorAll("[data-team-autofill]").forEach((field) => {
        field.setAttribute("list", "team-member-options");
        field.setAttribute("autocomplete", "off");
    });

    document.addEventListener("input", (event) => {
        const field = event.target.closest("[data-team-autofill]");
        if (!field) return;

        field.setAttribute("list", "team-member-options");

        const form = field.closest("form");
        if (!form) return;

        const member = findTeamMemberMatch(field.value);
        if (!member) return;

        const mode = field.dataset.teamAutofill;
        if (mode === "project-owner") {
            autofillProjectOwnerFields(form, member);
            return;
        }
        if (mode === "card-person") {
            autofillCardPersonFields(form, member);
            return;
        }
        if (mode === "guide-owner") {
            autofillGuideOwnerFields(form, member);
        }
    });

    document.addEventListener("change", (event) => {
        const statusField = event.target.closest("[data-project-status]");
        if (!statusField) return;

        const form = statusField.closest("form");
        if (!form) return;

        const status = String(statusField.value || "Planning");
        const filterField = form.querySelector("[data-project-filter]");
        const progressField = form.querySelector("[data-project-progress]");
        const updatedField = form.querySelector("[data-project-updated]");
        const systemUrlField = form.querySelector("[data-project-system-url]");
        const systemUrlHint = systemUrlField?.closest(".field-stack")?.querySelector(".field-hint");

        if (filterField) {
            filterField.value = getDefaultProjectFilter(status);
        }

        if (progressField && form.id === "project-create-form") {
            progressField.value = String(getDefaultProjectProgress(status));
        }

        if (updatedField && form.id === "project-create-form" && !String(updatedField.value || "").trim()) {
            updatedField.value = getDefaultProjectUpdatedText();
        }

        if (systemUrlField) {
            const allowSystemUrl = projectStatusAllowsSystemUrl(status);
            systemUrlField.disabled = !allowSystemUrl;
            if (!allowSystemUrl) {
                systemUrlField.value = "";
                systemUrlField.placeholder = "Available when status is Live or Completed";
            } else {
                systemUrlField.placeholder = "https://example.com";
            }
            if (systemUrlHint) {
                systemUrlHint.textContent = allowSystemUrl
                    ? "Add the live project link employees should open."
                    : "System URL is locked until the project is Live or Completed.";
            }
        }
    });
}

function ensureTeamAutofillList() {
    const listId = "team-member-options";
    let datalist = document.getElementById(listId);

    if (!datalist) {
        datalist = document.createElement("datalist");
        datalist.id = listId;
        document.body.appendChild(datalist);
    }

    const values = new Set();
    APP_STATE.team.forEach((member) => {
        const name = String(member.name || "").trim();
        const email = String(member.email || member.message || "").trim();
        const initials = getInitials(name);
        const tokens = name.split(/\s+/).filter(Boolean);
        const shortName = tokens.length >= 2 ? `${tokens[0]} ${tokens[1]}` : name;

        [name, shortName, initials, email].forEach((value) => {
            if (value) values.add(value);
        });
    });

    datalist.innerHTML = [...values].map((value) => {
        const safeValue = String(value)
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        return `<option value="${safeValue}"></option>`;
    }).join("");
}

function setupClock() {
    const timeEl = document.getElementById("current-time");
    const dateEl = document.getElementById("current-date");
    const greetingEl = document.getElementById("greeting-part");
    if (!timeEl || !dateEl) return;

    const updateClock = () => {
        const now = new Date();
        const hour = Number(new Intl.DateTimeFormat("en-PH", { timeZone: APP_CONFIG.timezone, hour: "numeric", hour12: false }).format(now));
        if (greetingEl) {
            greetingEl.textContent = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";
        }
        timeEl.textContent = new Intl.DateTimeFormat("en-PH", { timeZone: APP_CONFIG.timezone, hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true }).format(now);
        dateEl.textContent = new Intl.DateTimeFormat("en-PH", { timeZone: APP_CONFIG.timezone, weekday: "long", month: "long", day: "numeric", year: "numeric" }).format(now);
    };

    updateClock();
    setInterval(updateClock, 1000);
}

function setupWeatherWidget() {
    const widget = document.querySelector(".weather-widget");
    const temperatureEl = document.getElementById("weather-temperature");
    const conditionEl = document.getElementById("weather-condition");
    const iconEl = document.getElementById("weather-icon");
    if (!widget || !temperatureEl || !conditionEl || !iconEl) return;

    const applyWeather = (temperature, condition, iconMarkup, state) => {
        temperatureEl.innerHTML = `${Math.round(Number(temperature))}&deg;C`;
        conditionEl.textContent = condition;
        iconEl.innerHTML = iconMarkup;
        widget.dataset.weatherState = state;
    };

    const fallbackIcon = buildWeatherIconMarkup("sunny");
    applyWeather(29, "Sunny", fallbackIcon, "sunny");

    const loadWeather = async () => {
        try {
            const response = await fetch(MANILA_WEATHER_URL, {
                headers: { Accept: "application/json" },
                cache: "no-store"
            });
            if (!response.ok) throw new Error(`Weather request failed: ${response.status}`);
            const payload = await response.json();
            const current = payload?.current;
            if (!current || typeof current.temperature_2m !== "number") return;

            const weather = mapWeatherCodeToDisplay(current.weather_code, current.is_day);
            const displayTemperature = typeof current.apparent_temperature === "number"
                ? current.apparent_temperature
                : current.temperature_2m;
            applyWeather(displayTemperature, weather.label, buildWeatherIconMarkup(weather.state), weather.state);
        } catch (error) {
            console.warn("Weather widget fallback in use:", error);
        }
    };

    loadWeather();
    setInterval(loadWeather, 15 * 60 * 1000);
}

function setupLiveItsmTicketStat() {
    const ticketNumberEl = document.querySelector('.stat-number[data-stat-key="tickets"]');
    const ticketCard = ticketNumberEl?.closest(".stat-card") || null;
    const noteEl = ticketCard?.querySelector(".stat-note") || null;
    const syncTicketCardState = (mode = "fallback") => {
        if (!ticketCard || !noteEl) return;
        ticketCard.classList.remove("itsm-connectable");

        if (mode === "connectable" && APP_STATE.adminLoggedIn) {
            ticketCard.dataset.manageItsm = "true";
            ticketCard.classList.add("itsm-connectable");
            noteEl.textContent = isLocalFilePreview()
                ? "Click to connect ITSM or paste a live token"
                : "Click to connect this card to ITSM live queue";
            return;
        }

        delete ticketCard.dataset.manageItsm;

        if (mode === "live") {
            noteEl.textContent = "Live queue from ITSM";
            return;
        }

        if (mode === "syncing") {
            noteEl.textContent = "Syncing live queue from ITSM";
            return;
        }

        if (mode === "error") {
            noteEl.textContent = "Unable to sync ITSM right now";
            return;
        }

        noteEl.textContent = APP_STATE.adminLoggedIn
            ? "Click to connect this card to ITSM live queue"
            : "Using local queue while ITSM auth is unavailable";
    };

    const updateLiveTicketCount = async () => {
        try {
            syncTicketCardState("syncing");
            const token = await resolveItsmToken();
            if (!token) {
                syncTicketCardState(APP_STATE.adminLoggedIn ? "connectable" : "fallback");
                return;
            }

            const statusParam = encodeURIComponent(ITSM_ACTIVE_TICKET_STATUSES.join(","));
            const response = await fetchItsmWithAuth(`${ITSM_API_BASE}/tickets?status=${statusParam}&limit=500`, token);

            if (!response.ok) {
                throw new Error(`ITSM ticket request failed: ${response.status}`);
            }

            const payload = await response.json();
            const tickets = payload?.data?.tickets || payload?.data?.data?.tickets || [];
            const total = Number(
                payload?.data?.pagination?.total
                || payload?.data?.total
                || payload?.pagination?.total
                || tickets.length
            );

            if (!Number.isFinite(total)) return;

            APP_STATE.overview.stats.tickets = total;
            updateSingleStatValue("tickets", total);
            syncTicketCardState("live");
        } catch (error) {
            console.warn("ITSM live ticket stat fallback in use:", error);
            syncTicketCardState("error");
        }
    };

    updateLiveTicketCount();
    window.addEventListener("itsm-token-updated", updateLiveTicketCount);
    if (window.__itsmLiveTicketInterval) {
        clearInterval(window.__itsmLiveTicketInterval);
    }
    window.__itsmLiveTicketInterval = setInterval(updateLiveTicketCount, 30 * 1000);
}

function getItsmToken() {
    const configuredToken = String(APP_CONFIG?.integrations?.itsmBearerToken || "").trim();
    if (configuredToken) return configuredToken;

    for (const key of ITSM_TOKEN_STORAGE_KEYS) {
        const localToken = String(localStorage.getItem(key) || "").trim();
        if (localToken) return localToken;

        const sessionToken = String(sessionStorage.getItem(key) || "").trim();
        if (sessionToken) return sessionToken;
    }

    return "";
}

async function resolveItsmToken(forceRefresh = false) {
    if (!forceRefresh) {
        return getItsmToken();
    }
    return "";
}

function isLocalFilePreview() {
    return window.location.protocol === "file:";
}

function describeItsmConnectionError(error) {
    const rawMessage = String(error?.message || "").trim();
    if (!rawMessage) {
        return "Unable to connect to ITSM right now.";
    }

    const normalizedMessage = rawMessage.toLowerCase();
    if (normalizedMessage.includes("failed to fetch") || normalizedMessage.includes("networkerror")) {
        if (isLocalFilePreview()) {
            return "ITSM live connect is blocked while this dashboard is opened as a local file. Open it through localhost or your deployed site, or paste a bearer token directly.";
        }

        return "The ITSM server could not be reached right now. Check your internet connection, CORS access, or try again in a moment.";
    }

    return rawMessage;
}

async function fetchItsmWithAuth(url, token) {
    const request = (authToken) => fetch(url, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${authToken}`
        }
    });

    let response = await request(token);
    if (response.status !== 401) return response;

    sessionStorage.removeItem(ITSM_TOKEN_STORAGE_KEYS[0]);
    window.dispatchEvent(new CustomEvent("itsm-token-updated"));
    const refreshedToken = await resolveItsmToken(true);
    if (!refreshedToken) return response;

    response = await request(refreshedToken);
    return response;
}

async function connectItsmSession(email, password) {
    let response;
    try {
        response = await fetch(ITSM_LOGIN_URL, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });
    } catch (error) {
        throw new Error(describeItsmConnectionError(error));
    }

    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
        throw new Error(payload?.message || `ITSM login failed: ${response.status}`);
    }

    const token = String(payload?.token || payload?.data?.token || "").trim();
    if (!token) {
        throw new Error("ITSM token not found in login response");
    }

    sessionStorage.setItem(ITSM_TOKEN_STORAGE_KEYS[0], token);
    window.dispatchEvent(new CustomEvent("itsm-token-updated"));
    return token;
}

function clearItsmSession() {
    sessionStorage.removeItem(ITSM_TOKEN_STORAGE_KEYS[0]);
    window.dispatchEvent(new CustomEvent("itsm-token-updated"));
}

function updateSingleStatValue(statKey, value) {
    const numberEl = document.querySelector(`.stat-number[data-stat-key="${statKey}"]`);
    if (numberEl) {
        numberEl.dataset.target = String(value);
        numberEl.textContent = statKey === "uptime" ? `${value}%` : String(value);
    }

    const notificationBadge = document.getElementById("notification-badge");
    if (notificationBadge && statKey === "tickets") {
        notificationBadge.textContent = String(value);
    }
}

function mapWeatherCodeToDisplay(code, isDay) {
    const weatherCode = Number(code);
    const dayTime = Number(isDay) === 1;

    if (weatherCode === 0) return { label: dayTime ? "Sunny" : "Clear night", state: dayTime ? "sunny" : "night" };
    if ([1, 2].includes(weatherCode)) return { label: dayTime ? "Partly cloudy" : "Cloudy night", state: "partly-cloudy" };
    if (weatherCode === 3) return { label: "Cloudy", state: "cloudy" };
    if ([45, 48].includes(weatherCode)) return { label: "Foggy", state: "fog" };
    if ([51, 53, 55, 56, 57].includes(weatherCode)) return { label: "Light rain", state: "rain" };
    if ([61, 63, 65, 80, 81, 82].includes(weatherCode)) return { label: "Rain showers", state: "rain" };
    if ([66, 67].includes(weatherCode)) return { label: "Freezing rain", state: "rain" };
    if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) return { label: "Snow", state: "snow" };
    if ([95, 96, 99].includes(weatherCode)) return { label: "Thunderstorm", state: "storm" };
    return { label: "Weather update", state: "cloudy" };
}

function buildWeatherIconMarkup(state) {
    if (state === "night") {
        return '<svg viewBox="0 0 48 48" fill="none"><path d="M29.8 8.3A13.8 13.8 0 1 0 39.7 32 15 15 0 1 1 29.8 8.3Z" fill="currentColor"></path></svg>';
    }
    if (state === "partly-cloudy") {
        return '<svg viewBox="0 0 48 48" fill="none"><circle cx="17" cy="16" r="6" fill="currentColor"></circle><path d="M17 5v4M17 23v4M6 16h4M24 16h4M9.8 8.8l2.8 2.8M21.4 20.4l2.8 2.8M9.8 23.2l2.8-2.8M21.4 11.6l2.8-2.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path><path d="M31 33H16.5a6.5 6.5 0 1 1 1.8-12.8A8.4 8.4 0 0 1 34 23a5.5 5.5 0 0 1-3 10Z" fill="currentColor" opacity="0.32"></path></svg>';
    }
    if (state === "cloudy") {
        return '<svg viewBox="0 0 48 48" fill="none"><path d="M32.5 34H15.5a7.5 7.5 0 1 1 2-14.7A10 10 0 0 1 36.7 23a6.3 6.3 0 0 1-4.2 11Z" fill="currentColor"></path></svg>';
    }
    if (state === "fog") {
        return '<svg viewBox="0 0 48 48" fill="none"><path d="M31 28H16.5a6.5 6.5 0 1 1 1.8-12.8A8.4 8.4 0 0 1 34 18a5.5 5.5 0 0 1-3 10Z" fill="currentColor" opacity="0.34"></path><path d="M12 33h24M15 37h18" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"></path></svg>';
    }
    if (state === "rain") {
        return '<svg viewBox="0 0 48 48" fill="none"><path d="M31 25H16.5a6.5 6.5 0 1 1 1.8-12.8A8.4 8.4 0 0 1 34 15a5.5 5.5 0 0 1-3 10Z" fill="currentColor" opacity="0.34"></path><path d="M18 30l-2 5M25 30l-2 5M32 30l-2 5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"></path></svg>';
    }
    if (state === "storm") {
        return '<svg viewBox="0 0 48 48" fill="none"><path d="M31 25H16.5a6.5 6.5 0 1 1 1.8-12.8A8.4 8.4 0 0 1 34 15a5.5 5.5 0 0 1-3 10Z" fill="currentColor" opacity="0.34"></path><path d="M23 29h5l-4 7h4l-7 9 2.5-8H20z" fill="currentColor"></path></svg>';
    }
    if (state === "snow") {
        return '<svg viewBox="0 0 48 48" fill="none"><path d="M31 25H16.5a6.5 6.5 0 1 1 1.8-12.8A8.4 8.4 0 0 1 34 15a5.5 5.5 0 0 1-3 10Z" fill="currentColor" opacity="0.34"></path><path d="M18 31v8M14 35h8M15.7 32.7l4.6 4.6M20.3 32.7l-4.6 4.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>';
    }
    return '<svg viewBox="0 0 48 48" fill="none"><circle cx="18" cy="18" r="7" fill="currentColor"></circle><path d="M18 4v5M18 27v5M4 18h5M27 18h5M8.1 8.1l3.5 3.5M24.4 24.4l3.5 3.5M8.1 27.9l3.5-3.5M24.4 11.6l3.5-3.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"></path><path d="M30 33.5H15.5a6.5 6.5 0 1 1 1.8-12.8A8.4 8.4 0 0 1 33 23.3a5.5 5.5 0 0 1-3 10.2Z" fill="currentColor" opacity="0.28"></path></svg>';
}

function setupNavigation() {
    const links = document.querySelectorAll("[data-section-link]");
    const sections = [...links]
        .map((link) => String(link.getAttribute("href") || "").replace("#", ""))
        .filter(Boolean)
        .map((id) => document.getElementById(id))
        .filter(Boolean);
    if (!links.length || !sections.length) return;

    const defaultSection = "overview";
    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
    }

    const scrollToSection = (id, smooth = true) => {
        const target = document.getElementById(id);
        if (!target) return;
        target.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
    };

    const setActive = () => {
        const current = sections.find((section) => {
            const rect = section.getBoundingClientRect();
            return rect.top <= 160 && rect.bottom >= 160;
        }) || sections[0];
        links.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${current.id}`));
    };

    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = String(link.getAttribute("href") || "").replace("#", "");
            if (!targetId) return;
            history.replaceState(null, "", `#${targetId}`);
            scrollToSection(targetId);
            setActive();
        });
    });

    history.replaceState(null, "", `#${defaultSection}`);
    window.scrollTo(0, 0);
    scrollToSection(defaultSection, false);
    setActive();

    window.addEventListener("scroll", setActive, { passive: true });
}

function setupModalSystem() {
    const modal = document.getElementById("universal-modal");
    const modalBody = document.getElementById("modal-body");
    const modalContent = document.getElementById("universal-modal-content");
    const closeButton = document.querySelector(".modal-close");
    if (!modal || !modalBody || !modalContent || !closeButton) return;

    const openModal = (content) => {
        modalBody.innerHTML = content;
        modalBody.scrollTop = 0;
        modalContent.scrollTop = 0;
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        if (window.lenisInstance) window.lenisInstance.stop();
        document.documentElement.classList.add("modal-open");
        document.body.classList.add("modal-open");
        document.body.style.overflow = "hidden";
        requestAnimationFrame(() => modalContent.focus({ preventScroll: true }));
    };
    const closeModal = () => {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        if (window.lenisInstance) window.lenisInstance.start();
        document.documentElement.classList.remove("modal-open");
        document.body.classList.remove("modal-open");
        document.body.style.overflow = "";
    };

    window.dashboardOpenModal = openModal;
    window.dashboardCloseModal = closeModal;

    closeButton.addEventListener("click", closeModal);
    modal.addEventListener("click", (event) => { if (event.target === modal) closeModal(); });
    modal.addEventListener("wheel", (event) => {
        if (!modal.classList.contains("active")) return;
        const scrollContainer = event.target.closest("[data-native-scroll]") || modalContent;
        if (!scrollContainer) return;

        const hasVerticalScroll = scrollContainer.scrollHeight > scrollContainer.clientHeight;
        if (!hasVerticalScroll) {
            event.preventDefault();
            return;
        }

        const nextScrollTop = scrollContainer.scrollTop + event.deltaY;
        const maxScrollTop = scrollContainer.scrollHeight - scrollContainer.clientHeight;
        scrollContainer.scrollTop = Math.max(0, Math.min(nextScrollTop, maxScrollTop));
        event.preventDefault();
    }, { passive: false });
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

        try {
            let photoUrl = await uploadTeamPhotoToSupabase(file);
            if (!photoUrl) {
                const dataUrl = await readFileAsDataUrl(file);
                photoUrl = dataUrl;
            }
            hiddenInput.value = photoUrl;
            urlInput.value = photoUrl;
            preview.src = photoUrl;
        } catch (error) {
            window.alert(error?.message || "Unable to process this photo right now.");
        }
    });

    document.addEventListener("submit", async (event) => {
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
    renderAutomationDashboard();
    renderProjects(APP_STATE.projects);
                renderServices();
                renderTeam();
                renderContactGuide();
                renderQuickHelp();
                renderPolicyDocuments();
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
            renderAutomationDashboard();
            closeModal();
            return;
        }

        const deleteProjectButton = event.target.closest("[data-delete-project]");
        if (deleteProjectButton) {
            if (!APP_STATE.adminLoggedIn) return;
            const form = deleteProjectButton.closest("#project-edit-form");
            const projectId = String(form?.querySelector("input[name='projectId']")?.value || "").trim();
            if (!projectId) return;
            const project = APP_STATE.projects.find((item) => item.id === projectId);
            if (!project) return;
            if (!confirm(`Delete "${project.name}" from Projects? This cannot be undone.`)) return;
            APP_STATE.projects = APP_STATE.projects.filter((item) => item.id !== projectId);
            saveProjects();
            renderStats();
            renderProjects(APP_STATE.projects);
            renderTeam();
            renderAutomationDashboard();
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
            renderAutomationDashboard();
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
            try {
                APP_STATE.team = APP_STATE.team.map((member, memberIndex) => memberIndex === index ? {
                    ...member,
                    name: String(formData.get("name") || member.name),
                    role: String(formData.get("role") || member.role),
                    level: String(formData.get("level") || member.level),
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
            } catch (error) {
                window.alert(error?.message || "Unable to save this team update right now.");
            }
            return;
        }

        const createTeamForm = event.target.closest("#team-create-form");
        if (createTeamForm) {
            event.preventDefault();
            if (!requireAdminAccess()) return;
            const formData = new FormData(createTeamForm);
            try {
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
            } catch (error) {
                window.alert(error?.message || "Unable to create this team profile right now.");
            }
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

        const createHelpForm = event.target.closest("#quickhelp-create-form");
        if (createHelpForm) {
            event.preventDefault();
            if (!requireAdminAccess()) return;
            const formData = new FormData(createHelpForm);
            APP_STATE.quickHelp = [...APP_STATE.quickHelp, {
                label: String(formData.get("label") || "").trim() || "Who To Contact",
                title: String(formData.get("title") || "").trim() || "New guidance card",
                body: String(formData.get("body") || "").trim() || "Add the team guidance details for this card.",
                action: String(formData.get("action") || "").trim() || "Open",
                actionType: String(formData.get("actionType") || "message").trim(),
                value: String(formData.get("value") || "").trim(),
                person: String(formData.get("person") || "").trim()
            }];
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

        const createSupportForm = event.target.closest("#support-create-form");
        if (createSupportForm) {
            event.preventDefault();
            if (!requireAdminAccess()) return;
            const formData = new FormData(createSupportForm);
            APP_STATE.supportCards = [...APP_STATE.supportCards, {
                label: String(formData.get("label") || "").trim() || "Priority Lane",
                title: String(formData.get("title") || "").trim() || "New support card",
                body: String(formData.get("body") || "").trim() || "Add the support guidance for this card.",
                action: String(formData.get("action") || "").trim() || "Open",
                actionType: String(formData.get("actionType") || "message").trim(),
                value: String(formData.get("value") || "").trim(),
                person: String(formData.get("person") || "").trim()
            }];
            saveSupportCards();
            renderSupportCards();
            closeModal();
            return;
        }

        const policyDocumentForm = event.target.closest("#policy-document-edit-form");
        if (policyDocumentForm) {
            event.preventDefault();
            if (!requireAdminAccess()) return;
            const formData = new FormData(policyDocumentForm);
            const index = Number(formData.get("policyDocumentIndex"));
            APP_STATE.policyDocuments = APP_STATE.policyDocuments.map((item, itemIndex) => itemIndex === index
                ? normalizePolicyDocument({
                    ...item,
                    label: String(formData.get("label") || item.label),
                    typeLabel: String(formData.get("typeLabel") || item.typeLabel),
                    iconLabel: String(formData.get("iconLabel") || item.iconLabel),
                    title: String(formData.get("title") || item.title),
                    description: String(formData.get("description") || item.description),
                    actionLabel: String(formData.get("actionLabel") || item.actionLabel),
                    url: String(formData.get("url") || item.url),
                    sectionIndexes: parseIndexList(String(formData.get("sectionIndexes") || ""))
                })
                : item);
            savePolicyDocuments();
            renderPolicyDocuments();
            openModal(buildOtherPoliciesModal());
            return;
        }

        const createPolicyDocumentForm = event.target.closest("#policy-document-create-form");
        if (createPolicyDocumentForm) {
            event.preventDefault();
            if (!requireAdminAccess()) return;
            const formData = new FormData(createPolicyDocumentForm);
            APP_STATE.policyDocuments = [...APP_STATE.policyDocuments, normalizePolicyDocument({
                id: createPolicyDocumentId(String(formData.get("title") || "")),
                label: String(formData.get("label") || "").trim() || `PDF ${String(APP_STATE.policyDocuments.length + 1).padStart(2, "0")}`,
                typeLabel: String(formData.get("typeLabel") || "").trim() || "Policy PDF",
                iconLabel: String(formData.get("iconLabel") || "").trim() || "PDF",
                title: String(formData.get("title") || "").trim() || "New policy document",
                description: String(formData.get("description") || "").trim() || "Open the policy document PDF.",
                actionLabel: String(formData.get("actionLabel") || "").trim() || "Open PDF",
                url: String(formData.get("url") || "").trim(),
                sectionIndexes: parseIndexList(String(formData.get("sectionIndexes") || ""))
            })];
            savePolicyDocuments();
            renderPolicyDocuments();
            openModal(buildOtherPoliciesModal());
            return;
        }

        const guideForm = event.target.closest("#contact-guide-edit-form");
        if (guideForm) {
            event.preventDefault();
            if (!requireAdminAccess()) return;
            const formData = new FormData(guideForm);
            const index = Number(formData.get("guideIndex"));
            APP_STATE.contactGuide = APP_STATE.contactGuide.map((item, itemIndex) => itemIndex === index ? normalizeContactGuideRow({
                ...item,
                label: String(formData.get("label") || item.label),
                issue: String(formData.get("issue") || item.issue),
                owner: String(formData.get("owner") || item.owner),
                initials: String(formData.get("initials") || item.initials)
            }) : item);
            saveContactGuide();
            renderContactGuide();
            closeModal();
            return;
        }

        const itsmConnectForm = event.target.closest("#itsm-connect-form");
        if (itsmConnectForm) {
            event.preventDefault();
            if (!requireAdminAccess()) return;
            const formData = new FormData(itsmConnectForm);
            const feedback = itsmConnectForm.querySelector(".admin-feedback");
            const directToken = String(formData.get("token") || "").trim();
            const email = String(formData.get("email") || "").trim();
            const password = String(formData.get("password") || "").trim();

            try {
                if (directToken) {
                    sessionStorage.setItem(ITSM_TOKEN_STORAGE_KEYS[0], directToken);
                    window.dispatchEvent(new CustomEvent("itsm-token-updated"));
                    openManagedModal(buildBulkEditModal());
                    return;
                }

                if (!email || !password) {
                    if (feedback) feedback.textContent = "Enter your ITSM email/password or paste a bearer token.";
                    return;
                }

                await connectItsmSession(email, password);
                openManagedModal(buildBulkEditModal());
            } catch (error) {
                if (feedback) feedback.textContent = describeItsmConnectionError(error);
            }
            return;
        }
    });

    document.addEventListener("click", (event) => {
        const editPolicyDocumentButton = event.target.closest("[data-edit-policy-document]");
        if (editPolicyDocumentButton) {
            if (!APP_STATE.adminLoggedIn) return;
            const index = Number(editPolicyDocumentButton.dataset.editPolicyDocument);
            const item = APP_STATE.policyDocuments[index];
            if (item) openModal(buildPolicyDocumentEditModal(index, item));
            return;
        }

        const addPolicyDocumentButton = event.target.closest("#add-policy-document-button");
        if (addPolicyDocumentButton) {
            if (!APP_STATE.adminLoggedIn) return;
            openModal(buildPolicyDocumentCreateModal());
            return;
        }

        const deletePolicyDocumentButton = event.target.closest("[data-delete-policy-document]");
        if (deletePolicyDocumentButton) {
            if (!APP_STATE.adminLoggedIn) return;
            const index = Number(deletePolicyDocumentButton.dataset.deletePolicyDocument);
            const item = APP_STATE.policyDocuments[index];
            if (!item) return;
            if (!confirm(`Delete "${item.title}" from Policies and Other Documents?`)) return;
            APP_STATE.policyDocuments.splice(index, 1);
            savePolicyDocuments();
            renderPolicyDocuments();
            openModal(buildOtherPoliciesModal());
            return;
        }

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

        const policyPreviewButton = event.target.closest("[data-policy-preview]");
        if (policyPreviewButton) {
            const modalBody = document.getElementById("modal-body");
            if (modalBody) {
                const policyIndex = Number(policyPreviewButton.dataset.policyPreview);
                const policyItem = APP_STATE.quickHelp[policyIndex];
                modalBody.querySelectorAll("[data-policy-preview]").forEach((button) => {
                    button.classList.toggle("is-active", button === policyPreviewButton);
                });

                const title = modalBody.querySelector("#policy-preview-title");
                const summary = modalBody.querySelector("#policy-preview-summary");

                if (title) title.textContent = policyPreviewButton.dataset.policyTitle || "Policy Preview";
                if (summary) {
                    summary.innerHTML = policyItem?.bodyHtml || `<p>${policyItem?.body || ""}</p>`;
                }
            }
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
            if (type === "other-policies") openModal(buildOtherPoliciesModal());
            if (type === "support-center") openModal(buildSupportCenterModal());
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

        const deleteTeamButton = event.target.closest("[data-delete-team]");
        if (deleteTeamButton) {
            if (!APP_STATE.adminLoggedIn) return;
            const form = deleteTeamButton.closest("#team-edit-form");
            const index = Number(form?.querySelector("input[name='teamIndex']")?.value);
            if (!Number.isFinite(index)) return;
            const member = APP_STATE.team[index];
            if (!member) return;
            if (!confirm(`Delete ${member.name} from the IT team? This cannot be undone.`)) return;
            const removedInitials = getInitials(member.name);
            APP_STATE.team.splice(index, 1);
            APP_STATE.projects = APP_STATE.projects.map((project) => ({
                ...project,
                team: Array.isArray(project.team) ? project.team.filter((item) => item !== removedInitials) : project.team
            }));
            saveTeam();
            saveProjects();
            renderTeam();
            renderProjects(APP_STATE.projects);
            closeModal();
            return;
        }

        const resetTeamButton = event.target.closest("[data-reset-team]");
        if (resetTeamButton) {
            if (!APP_STATE.adminLoggedIn) return;
            if (!confirm("Reset all edited team member changes and restore the default IT team list?")) return;
            APP_STATE.team = loadTeam();
            saveTeam();
            renderTeam();
            renderProjects(APP_STATE.projects);
            closeModal();
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

        const addQuickHelpButton = event.target.closest("#add-quickhelp-card-button");
        if (addQuickHelpButton) {
            if (!APP_STATE.adminLoggedIn) return;
            openModal(buildQuickHelpCreateModal());
            return;
        }

        const deleteHelpButton = event.target.closest("[data-delete-help]");
        if (deleteHelpButton) {
            if (!APP_STATE.adminLoggedIn) return;
            const index = Number(deleteHelpButton.dataset.deleteHelp);
            const item = APP_STATE.quickHelp[index];
            if (!item) return;
            if (!confirm(`Delete "${item.title}" from the Team Guidance cards?`)) return;
            APP_STATE.quickHelp.splice(index, 1);
            saveQuickHelp();
            renderQuickHelp();
            closeModal();
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

        const addSupportButton = event.target.closest("#add-support-card-button");
        if (addSupportButton) {
            if (!APP_STATE.adminLoggedIn) return;
            openModal(buildSupportCreateModal());
            return;
        }

        const deleteSupportButton = event.target.closest("[data-delete-support]");
        if (deleteSupportButton) {
            if (!APP_STATE.adminLoggedIn) return;
            const index = Number(deleteSupportButton.dataset.deleteSupport);
            const item = APP_STATE.supportCards[index];
            if (!item) return;
            if (!confirm(`Delete "${item.title}" from the support cards?`)) return;
            APP_STATE.supportCards.splice(index, 1);
            saveSupportCards();
            renderSupportCards();
            closeModal();
            return;
        }

        const editGuideButton = event.target.closest("[data-edit-guide]");
        if (editGuideButton) {
            if (!APP_STATE.adminLoggedIn) return;
            const index = Number(editGuideButton.dataset.editGuide);
            const item = APP_STATE.contactGuide[index];
            if (item) openModal(buildContactGuideEditModal(index, item));
            return;
        }

        const manageItsmButton = event.target.closest("[data-manage-itsm]");
        if (manageItsmButton) {
            if (!APP_STATE.adminLoggedIn) return;
            openManagedModal(buildItsmConnectModal());
            return;
        }

        const manageSupabaseButton = event.target.closest("[data-manage-supabase]");
        if (manageSupabaseButton) {
            if (!APP_STATE.adminLoggedIn) return;
            openManagedModal(buildSupabaseSetupModal());
            return;
        }

        const clearItsmButton = event.target.closest("[data-clear-itsm]");
        if (clearItsmButton) {
            if (!APP_STATE.adminLoggedIn) return;
            clearItsmSession();
            openManagedModal(buildBulkEditModal());
            return;
        }

        const logoutButton = event.target.closest("[data-admin-logout]");
        if (logoutButton) {
            APP_STATE.adminLoggedIn = false;
            clearItsmSession();
            sessionStorage.removeItem(STORAGE_KEYS.adminSession);
            renderStats();
            renderTicker();
            renderProjects(APP_STATE.projects);
            renderServices();
            renderTeam();
            renderContactGuide();
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
            return;
        }

        const projectPageButton = event.target.closest("[data-project-page]");
        if (projectPageButton) {
            const direction = projectPageButton.dataset.projectPage;
            if (direction === "next") APP_STATE.currentProjectPage += 1;
            if (direction === "prev") APP_STATE.currentProjectPage = Math.max(1, APP_STATE.currentProjectPage - 1);
            renderProjects(APP_STATE.projects);
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
        smoothWheel: true,
        prevent: (node) => Boolean(node?.closest?.("[data-lenis-prevent], [data-native-scroll]"))
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

function getDefaultProjectFilter(status = "") {
    const normalized = String(status || "").toLowerCase();
    if (normalized === "live") return "active";
    if (normalized === "completed") return "completed";
    return "in-progress";
}

function getDefaultProjectProgress(status = "") {
    const normalized = String(status || "").toLowerCase();
    if (normalized === "planning") return 15;
    if (normalized === "in progress") return 60;
    if (normalized === "live" || normalized === "completed") return 100;
    return 0;
}

function getDefaultProjectUpdatedText() {
    const formatter = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" });
    return `Updated ${formatter.format(new Date())}`;
}

function projectStatusAllowsSystemUrl(status = "") {
    const normalized = String(status || "").toLowerCase();
    return normalized === "live" || normalized === "completed";
}

function buildProjectStatusOptions(selectedStatus = "Planning") {
    return ["Planning", "In Progress", "Live", "Completed"]
        .map((status) => `<option value="${status}" ${selectedStatus === status ? "selected" : ""}>${status}</option>`)
        .join("");
}

function buildProjectLaneOptions(selectedLane = "in-progress") {
    return ["in-progress", "active", "completed"]
        .map((filter) => `<option value="${filter}" ${selectedLane === filter ? "selected" : ""}>${filter}</option>`)
        .join("");
}

function buildProjectFormFields(project = {}) {
    const status = String(project.status || "Planning");
    const filter = String(project.filter || getDefaultProjectFilter(status));
    const progress = Number.isFinite(Number(project.progress)) ? Number(project.progress) : getDefaultProjectProgress(status);
    const updated = String(project.updated || getDefaultProjectUpdatedText());
    const systemUrlEnabled = projectStatusAllowsSystemUrl(status);

    return `
        <div class="project-form-section">
            <div class="project-form-section-head">
                <h3>Core Details</h3>
                <p>Start with the basics so the project appears correctly on the dashboard.</p>
            </div>
            <div class="project-form-grid project-form-grid-double">
                <label class="field-stack project-form-span-2">
                    <span>Project name</span>
                    <input type="text" name="name" value="${escapeHtml(project.name || "")}" placeholder="Idea Intake Portal" required>
                    <small class="field-hint">Use the public-facing project name employees will recognize.</small>
                </label>
                <label class="field-stack">
                    <span>Status</span>
                    <select name="status" data-project-status>
                        ${buildProjectStatusOptions(status)}
                    </select>
                    <small class="field-hint">Sets the project stage shown to employees.</small>
                </label>
                <label class="field-stack">
                    <span>Project lane</span>
                    <select name="filter" data-project-filter>
                        ${buildProjectLaneOptions(filter)}
                    </select>
                    <small class="field-hint">This controls which tab the project appears in.</small>
                </label>
                <label class="field-stack project-form-span-2">
                    <span>Description</span>
                    <textarea name="description" rows="4" placeholder="Short summary of what this project does and who it helps.">${escapeHtml(project.description || "")}</textarea>
                </label>
            </div>
        </div>

        <div class="project-form-section">
            <div class="project-form-section-head">
                <h3>Ownership</h3>
                <p>Type a team member name or initials and the form will auto-fill matching details.</p>
            </div>
            <div class="project-form-grid project-form-grid-double">
                <label class="field-stack">
                    <span>Owner</span>
                    <input type="text" name="owner" value="${escapeHtml(project.owner || "")}" placeholder="JC or John Carlo Manalo" data-team-autofill="project-owner">
                </label>
                <label class="field-stack">
                    <span>Owner full name</span>
                    <input type="text" name="ownerName" value="${escapeHtml(project.ownerName || "")}" placeholder="Auto-filled from team directory when available">
                </label>
                <label class="field-stack">
                    <span>Overseen by</span>
                    <input type="text" name="overseenBy" value="${escapeHtml(project.overseenBy || "")}" placeholder="Usually the same as the owner or lead approver">
                </label>
                <label class="field-stack">
                    <span>Assigned by</span>
                    <input type="text" name="assignedBy" value="${escapeHtml(project.assignedBy || "")}" placeholder="Defaults to Admin if left blank">
                </label>
                <label class="field-stack project-form-span-2">
                    <span>Developers</span>
                    <input type="text" name="team" value="${escapeHtml(Array.isArray(project.team) ? project.team.join(", ") : "")}" placeholder="JC, PA, MP">
                    <small class="field-hint">Separate multiple developer names or initials with commas.</small>
                </label>
            </div>
        </div>

        <div class="project-form-section">
            <div class="project-form-section-head">
                <h3>Launch And Access</h3>
                <p>Set the project link, progress, update label, and whether access is restricted.</p>
            </div>
            <div class="project-form-grid project-form-grid-double">
                <label class="field-stack project-form-span-2">
                    <span>System URL</span>
                    <input type="text" name="systemUrl" value="${escapeHtml(systemUrlEnabled ? (project.systemUrl || "") : "")}" placeholder="${systemUrlEnabled ? "https://example.com" : "Available when status is Live or Completed"}" data-project-system-url ${systemUrlEnabled ? "" : "disabled"}>
                    <small class="field-hint">${systemUrlEnabled ? "Add the live project link employees should open." : "System URL is locked until the project is Live or Completed."}</small>
                </label>
                <label class="field-stack">
                    <span>Progress</span>
                    <input type="number" name="progress" min="0" max="100" value="${progress}" placeholder="0-100" data-project-progress>
                    <small class="field-hint">Use a 0 to 100 completion estimate.</small>
                </label>
                <label class="field-stack">
                    <span>Updated label</span>
                    <input type="text" name="updated" value="${escapeHtml(updated)}" placeholder="Updated today" data-project-updated>
                    <small class="field-hint">Shown on the project card exactly as entered.</small>
                </label>
                <label class="toggle-field project-form-span-2" title="Check this if the project should be treated as access-controlled or private.">
                    <input type="checkbox" name="restricted" ${project.restricted ? "checked" : ""}>
                    <span class="toggle-copy">
                        <strong>Restricted system</strong>
                        <small>Turn this on if employees should request access before entering the system.</small>
                    </span>
                </label>
            </div>
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

function buildOtherPoliciesModal() {
    const isAdmin = APP_STATE.adminLoggedIn;
    const documentCards = APP_STATE.policyDocuments.map((document, index) => `
        <article class="policy-document-card glass searchable-item" role="link" tabindex="0" data-open-url="${document.url}">
            <div class="policy-document-top">
                <span class="policy-document-badge">${document.label}</span>
                <span class="policy-document-type">${document.typeLabel}</span>
            </div>
            <div class="policy-document-icon" aria-hidden="true">${document.iconLabel}</div>
            <div>
                <h3>${document.title}</h3>
                <p>${document.description}</p>
            </div>
            <button class="btn btn-secondary" type="button" data-open-url="${document.url}">${document.actionLabel}</button>
            ${isAdmin ? `<button class="btn btn-secondary" type="button" data-edit-policy-document="${index}">Edit Document</button>` : ""}
        </article>
    `).join("");

    return `
        <div class="modal-block">
            <span class="quick-help-label">Policies</span>
            <h2 id="modal-title">Policies and Other Documents</h2>
            <p>Open the PDF files below, then click a policy item to show the correct policy image and content preview.</p>
            ${isAdmin ? `<button class="btn btn-secondary" type="button" id="add-policy-document-button">Add Document</button>` : ""}
            <div class="policy-library-grid modal-policy-library-grid">${documentCards}</div>
            ${buildPolicyPreviewBrowser()}
        </div>
    `;
}

function buildSupportCenterModal() {
    const isAdmin = APP_STATE.adminLoggedIn;
    const cards = APP_STATE.supportCards.map((item, index) => `
        <article class="support-card searchable-item" data-support-index="${index}">
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
        </article>
    `).join("");

    return `
        <div class="modal-block">
            <span class="quick-help-label">Support</span>
            <h2 id="modal-title">Information Security & Acceptable Use Policy</h2>
            <p>Guidelines for protecting company systems, information, devices, and communication tools across daily work.</p>
            <div class="support-stack modal-support-stack">${cards}</div>
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
            <p>Update what employees see in the Project Radar panel with fewer manual steps.</p>
            <form class="form-grid" id="project-edit-form">
                <input type="hidden" name="projectId" value="${project.id}">
                ${buildProjectFormFields(project)}
                <div class="form-grid-actions">
                    <button class="btn btn-danger" type="button" data-delete-project="true">Delete Project</button>
                    <button class="btn btn-primary" type="submit">Save Project Changes</button>
                </div>
            </form>
        </div>
    `;
}

function buildProjectCreateModal() {
    return `
        <div class="modal-block">
            <h2 id="modal-title">Add Project</h2>
            <p>Create a new project with smart defaults so setup is faster and less hassle.</p>
            <form class="form-grid" id="project-create-form">
                ${buildProjectFormFields()}
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
                <input type="text" name="name" value="${member.name}" placeholder="Full name (e.g. John Carlo Manalo)">
                <input type="text" name="role" value="${member.role}" placeholder="Role (e.g. IT Intern)">
                <select name="level">
                    ${["intern", "senior", "executive"].map((level) => `<option value="${level}" ${member.level === level ? "selected" : ""}>${level}</option>`).join("")}
                </select>
                <select name="status">
                    ${["Online", "In a Meeting", "Away"].map((status) => `<option value="${status}" ${member.status === status ? "selected" : ""}>${status}</option>`).join("")}
                </select>
                <input type="text" name="number" value="${member.number || ""}" placeholder="Mobile number (+63 ...)">
                <input type="text" name="school" value="${member.school || ""}" placeholder="School or university">
                <input type="email" name="email" value="${member.email || member.message || ""}" placeholder="Email address (e.g. name@company.com)">
                <input type="text" name="linkedin" value="${member.linkedin || ""}" placeholder="LinkedIn URL (www.linkedin.com/in/...)">
                <input type="text" name="skills" value="${member.skills.join(", ")}" placeholder="Skills, comma separated (e.g. Support, UI/UX)">
                <textarea name="contactFor" rows="4" placeholder="Primary support area or short bio">${member.contactFor}</textarea>
                <div class="form-grid-actions">
                    <button class="btn btn-danger" type="button" data-delete-team="true">Delete Team Member</button>
                    <button class="btn btn-primary" type="submit">Save Team Member</button>
                </div>
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
                <input type="text" name="name" placeholder="Full name (e.g. John Carlo Manalo)">
                <input type="text" name="role" placeholder="Role (e.g. IT Intern)">
                <select name="level">
                    ${["intern", "senior", "executive"].map((level) => `<option value="${level}">${level}</option>`).join("")}
                </select>
                <select name="status">
                    ${["Online", "In a Meeting", "Away"].map((status) => `<option value="${status}">${status}</option>`).join("")}
                </select>
                <input type="text" name="number" placeholder="Mobile number (+63 ...)">
                <input type="text" name="school" placeholder="School or university">
                <input type="email" name="email" placeholder="Email address (e.g. name@company.com)">
                <input type="text" name="linkedin" placeholder="LinkedIn URL (www.linkedin.com/in/...)">
                <input type="text" name="skills" placeholder="Skills, comma separated (e.g. Support, UI/UX)">
                <textarea name="contactFor" rows="4" placeholder="Primary support area or short bio"></textarea>
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
                <input type="text" name="person" value="${item.person || ""}" placeholder="Person name for message action" data-team-autofill="card-person">
                <textarea name="body" rows="4" placeholder="Card description">${item.body}</textarea>
                <div class="form-grid-actions">
                    <button class="btn btn-danger" type="button" data-delete-help="${index}">Delete Card</button>
                    <button class="btn btn-primary" type="submit">Save Help Card</button>
                </div>
            </form>
        </div>
    `;
}

function buildQuickHelpCreateModal() {
    return `
        <div class="modal-block">
            <h2 id="modal-title">Add New Card</h2>
            <p>Create a new Team Guidance card for the right-side panel.</p>
            <form class="form-grid" id="quickhelp-create-form">
                <input type="text" name="label" placeholder="Label" value="Who To Contact">
                <input type="text" name="title" placeholder="Title">
                <select name="actionType">
                    ${["message", "url", "modal"].map((type) => `<option value="${type}">${type}</option>`).join("")}
                </select>
                <input type="text" name="action" placeholder="Button label" value="Open">
                <input type="text" name="value" placeholder="Action value">
                <input type="text" name="person" placeholder="Person name for message action" data-team-autofill="card-person">
                <textarea name="body" rows="4" placeholder="Card description"></textarea>
                <button class="btn btn-primary" type="submit">Create Card</button>
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
                <input type="text" name="person" value="${item.person || ""}" placeholder="Person name for message action" data-team-autofill="card-person">
                <textarea name="body" rows="4" placeholder="Support description">${item.body}</textarea>
                <div class="form-grid-actions">
                    <button class="btn btn-danger" type="button" data-delete-support="${index}">Delete Card</button>
                    <button class="btn btn-primary" type="submit">Save Support Card</button>
                </div>
            </form>
        </div>
    `;
}

function buildSupportCreateModal() {
    return `
        <div class="modal-block">
            <h2 id="modal-title">Add Support Card</h2>
            <p>Create a new support card for the Service Desk panel.</p>
            <form class="form-grid" id="support-create-form">
                <input type="text" name="label" placeholder="Label" value="Priority Lane">
                <input type="text" name="title" placeholder="Title">
                <select name="actionType">
                    ${["message", "url", "modal"].map((type) => `<option value="${type}">${type}</option>`).join("")}
                </select>
                <input type="text" name="action" placeholder="Button label" value="Open">
                <input type="text" name="value" placeholder="Action value">
                <input type="text" name="person" placeholder="Person name for message action" data-team-autofill="card-person">
                <textarea name="body" rows="4" placeholder="Support description"></textarea>
                <button class="btn btn-primary" type="submit">Create Support Card</button>
            </form>
        </div>
    `;
}

function buildPolicyDocumentSectionHint(selectedIndexes = []) {
    const selected = Array.isArray(selectedIndexes) ? selectedIndexes : [];
    if (!APP_STATE.quickHelp.length) {
        return '<small class="field-hint">No linked policy preview sections are available yet.</small>';
    }

    const sectionSummary = APP_STATE.quickHelp
        .map((item, index) => `${index}: ${item.title}${selected.includes(index) ? " (selected)" : ""}`)
        .join(" | ");

    return `
        <small class="field-hint">
            Link preview sections by index, separated with commas.
            Available:
            ${escapeHtml(sectionSummary)}
        </small>
    `;
}

function buildPolicyDocumentFormFields(item = {}) {
    const sectionIndexes = Array.isArray(item.sectionIndexes) ? item.sectionIndexes.join(", ") : "";
    return `
        <input type="text" name="label" value="${escapeHtml(item.label || "")}" placeholder="Badge label (e.g. PDF 05)" required>
        <input type="text" name="typeLabel" value="${escapeHtml(item.typeLabel || "Policy PDF")}" placeholder="Type label">
        <input type="text" name="iconLabel" value="${escapeHtml(item.iconLabel || "PDF")}" placeholder="Icon label">
        <input type="text" name="title" value="${escapeHtml(item.title || "")}" placeholder="Document title" required>
        <input type="text" name="actionLabel" value="${escapeHtml(item.actionLabel || "Open PDF")}" placeholder="Button text">
        <input type="text" name="url" value="${escapeHtml(item.url || "")}" placeholder="/policies/your-file.pdf or https://..." required>
        <textarea name="description" rows="4" placeholder="Short description shown on the card">${escapeHtml(item.description || "")}</textarea>
        <label class="field-stack">
            <span>Linked preview section indexes</span>
            <input type="text" name="sectionIndexes" value="${escapeHtml(sectionIndexes)}" placeholder="0, 1, 2">
            ${buildPolicyDocumentSectionHint(item.sectionIndexes)}
        </label>
    `;
}

function buildPolicyDocumentEditModal(index, item) {
    return `
        <div class="modal-block">
            <h2 id="modal-title">Edit Policy Document</h2>
            <p>Update the content, labels, PDF link, and linked preview sections for this card.</p>
            <form class="form-grid" id="policy-document-edit-form">
                <input type="hidden" name="policyDocumentIndex" value="${index}">
                ${buildPolicyDocumentFormFields(item)}
                <div class="form-grid-actions">
                    <button class="btn btn-danger" type="button" data-delete-policy-document="${index}">Delete Document</button>
                    <button class="btn btn-primary" type="submit">Save Document</button>
                </div>
            </form>
        </div>
    `;
}

function buildPolicyDocumentCreateModal() {
    return `
        <div class="modal-block">
            <h2 id="modal-title">Add Policy Document</h2>
            <p>Create a new card for the Policies and Other Documents library.</p>
            <form class="form-grid" id="policy-document-create-form">
                ${buildPolicyDocumentFormFields({
                    label: `PDF ${String(APP_STATE.policyDocuments.length + 1).padStart(2, "0")}`,
                    typeLabel: "Policy PDF",
                    iconLabel: "PDF",
                    actionLabel: "Open PDF"
                })}
                <button class="btn btn-primary" type="submit">Create Document</button>
            </form>
        </div>
    `;
}

function buildContactGuideEditModal(index, item) {
    return `
        <div class="modal-block">
            <h2 id="modal-title">Edit Contact Guide Row</h2>
            <p>Update the quick routing guidance shown above the IT team cards.</p>
            <form class="form-grid" id="contact-guide-edit-form">
                <input type="hidden" name="guideIndex" value="${index}">
                <input type="text" name="label" value="${item.label}" placeholder="Label">
                <input type="text" name="issue" value="${item.issue}" placeholder="Issue or guidance title">
                <input type="text" name="owner" value="${item.owner}" placeholder="Recommended contact" data-team-autofill="guide-owner">
                <input type="text" name="initials" value="${item.initials}" placeholder="Badge initials">
                <button class="btn btn-primary" type="submit">Save Guide Row</button>
            </form>
        </div>
    `;
}

function buildBulkEditModal() {
    const itsmConnected = Boolean(getItsmToken());
    const supabaseStatus = getSupabaseStatusLabel();
    const supabaseLastSync = formatSyncTimestamp(APP_RUNTIME.supabaseLastSyncAt);
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
                <li>Supabase shared sync: ${supabaseStatus}</li>
                <li>Last Supabase sync: ${supabaseLastSync}</li>
                <li>ITSM live queue: ${itsmConnected ? "Connected for this session" : "Not connected yet"}</li>
                <li>Use the logout button inside this panel when you are done.</li>
            </ul>
            <div class="project-admin-actions">
                <button class="btn btn-secondary" type="button" data-manage-supabase="true">Supabase Setup</button>
                <button class="btn btn-secondary" type="button" data-manage-itsm="true">${itsmConnected ? "Manage ITSM Session" : "Connect ITSM"}</button>
                <button class="btn btn-secondary" type="button" data-reset-team="true">Reset Team Edits</button>
                <button class="btn btn-secondary" type="button" data-admin-logout="true">Log Out</button>
            </div>
        </div>
    `;
}

function buildSupabaseSetupModal() {
    const { url, anonKey, table } = getSupabaseSettings();
    const { photoBucket } = getSupabaseSettings();
    const tableName = table || "dashboard_content";
    const bucketName = photoBucket || "team-photos";
    const sql = [
        `create table if not exists public.${tableName} (`,
        "  key text primary key,",
        "  value jsonb not null default '{}'::jsonb,",
        "  updated_at timestamptz not null default now()",
        ");",
        "",
        `alter table public.${tableName} enable row level security;`,
        "",
        `create index if not exists idx_${tableName}_updated_at on public.${tableName}(updated_at desc);`,
        "",
        "do $$",
        "begin",
        `  if not exists (select 1 from pg_policies where schemaname = 'public' and tablename = '${tableName}' and policyname = 'Allow anon read ${tableName}') then`,
        `    create policy "Allow anon read ${tableName}" on public.${tableName}`,
        "    for select to anon using (true);",
        "  end if;",
        "end $$;",
        "",
        "do $$",
        "begin",
        `  if not exists (select 1 from pg_policies where schemaname = 'public' and tablename = '${tableName}' and policyname = 'Allow anon insert ${tableName}') then`,
        `    create policy "Allow anon insert ${tableName}" on public.${tableName}`,
        "    for insert to anon with check (true);",
        "  end if;",
        "end $$;",
        "",
        "do $$",
        "begin",
        `  if not exists (select 1 from pg_policies where schemaname = 'public' and tablename = '${tableName}' and policyname = 'Allow anon update ${tableName}') then`,
        `    create policy "Allow anon update ${tableName}" on public.${tableName}`,
        "    for update to anon using (true) with check (true);",
        "  end if;",
        "end $$;",
        "",
        `insert into storage.buckets (id, name, public)`,
        `values ('${bucketName}', '${bucketName}', true)`,
        "on conflict (id) do update set public = excluded.public;",
        "",
        "do $$",
        "begin",
        `  if not exists (select 1 from pg_policies where schemaname = 'storage' and tablename = 'objects' and policyname = 'Allow public read team photos ${bucketName}') then`,
        `    create policy "Allow public read team photos ${bucketName}" on storage.objects`,
        "    for select to public using (bucket_id = '" + bucketName + "');",
        "  end if;",
        "end $$;",
        "",
        "do $$",
        "begin",
        `  if not exists (select 1 from pg_policies where schemaname = 'storage' and tablename = 'objects' and policyname = 'Allow anon upload team photos ${bucketName}') then`,
        `    create policy "Allow anon upload team photos ${bucketName}" on storage.objects`,
        "    for insert to anon with check (bucket_id = '" + bucketName + "');",
        "  end if;",
        "end $$;",
        "",
        "do $$",
        "begin",
        `  if not exists (select 1 from pg_policies where schemaname = 'storage' and tablename = 'objects' and policyname = 'Allow anon update team photos ${bucketName}') then`,
        `    create policy "Allow anon update team photos ${bucketName}" on storage.objects`,
        "    for update to anon using (bucket_id = '" + bucketName + "') with check (bucket_id = '" + bucketName + "');",
        "  end if;",
        "end $$;"
    ].join("\n");

    const samplePayload = {
        overview: {
            currentUser: "Madison88 Team",
            heroDescription: "One launchpad for support, systems, projects, and the people keeping Madison88 running at full speed.",
            stats: { tickets: 18, uptime: 99.98, users: 246, projects: 14 },
            ticketUpdates: ["Update 1", "Update 2"]
        },
        projects: [
            {
                id: "it-service-management",
                name: "IT Service Management System",
                status: "Live",
                filter: "active",
                description: "Enterprise IT service desk.",
                progress: 100,
                owner: "JC",
                ownerName: "John Carlo Manalo",
                updated: "Updated Apr 6",
                team: ["JC", "MP"],
                systemUrl: "https://m88itsm.netlify.app",
                restricted: false
            }
        ],
        team: [
            {
                name: "Mhark Pentinio",
                role: "IT Intern",
                level: "intern",
                status: "Online",
                skills: ["Cybersecurity", "Monitoring"],
                email: "mhark.pentinio@madison88.com",
                number: "+63 917 800 1106",
                contactFor: "Security concerns",
                image: `https://YOUR-SUPABASE-URL/storage/v1/object/public/${bucketName}/team-members/....jpg`,
                hierarchy: 3
            }
        ]
    };

    return `
        <div class="modal-block">
            <h2 id="modal-title">Supabase Setup</h2>
            <p>This dashboard now supports shared Supabase persistence. Add your project values in <code>window.M88_SUPABASE</code> inside <code>index.html</code>.</p>
            <ul class="modal-list">
                <li>Status: ${getSupabaseStatusLabel()}</li>
                <li>Project URL: ${url || "Not set yet"}</li>
                <li>Anon key: ${anonKey ? "Configured" : "Not set yet"}</li>
                <li>Table: ${tableName}</li>
                <li>Storage bucket: ${bucketName}</li>
                ${APP_RUNTIME.supabaseLastError ? `<li>Last sync error: ${APP_RUNTIME.supabaseLastError}</li>` : ""}
            </ul>
            <p>Use this SQL in the Supabase SQL editor:</p>
            <pre class="setup-code-block">${sql}</pre>
            <p>Sample payloads stored in <code>${tableName}</code>:</p>
            <pre class="setup-code-block">${JSON.stringify(samplePayload, null, 2)}</pre>
            <p>This SQL creates the shared content table, enables RLS, adds anon read/insert/update policies, creates or updates the <code>${bucketName}</code> bucket, and adds the storage policies needed for public photo URLs plus browser uploads.</p>
            <p>Then keep <code>url</code>, <code>anonKey</code>, <code>table</code>, and <code>photoBucket</code> in <code>index.html</code> and republish the site.</p>
        </div>
    `;
}

function buildItsmConnectModal() {
    const connected = Boolean(getItsmToken());
    const localFileNotice = isLocalFilePreview()
        ? '<p class="admin-feedback">You are opening this dashboard via a local file path, so browser security may block live ITSM login. Use localhost/deployed hosting, or paste a bearer token instead.</p>'
        : "";
    return `
        <div class="modal-block">
            <h2 id="modal-title">Connect ITSM Live Queue</h2>
            <p>Use your ITSM admin login or paste a bearer token. This is stored in session only and is cleared when you log out or close the tab.</p>
            ${localFileNotice}
            <form class="form-grid" id="itsm-connect-form">
                <input type="email" name="email" placeholder="ITSM email">
                <input type="password" name="password" placeholder="ITSM password" autocomplete="current-password">
                <input type="text" name="token" placeholder="Optional: paste ITSM bearer token directly">
                <p class="admin-feedback" style="color:#f3c8c8;"></p>
                <div class="form-grid-actions">
                    ${connected ? '<button class="btn btn-danger" type="button" data-clear-itsm="true">Disconnect ITSM</button>' : '<span></span>'}
                    <button class="btn btn-primary" type="submit">${connected ? "Refresh Session" : "Connect ITSM"}</button>
                </div>
            </form>
        </div>
    `;
}

function updateAdminUI() {
    const logoTrigger = document.getElementById("admin-logo-trigger");
    const overviewButton = document.getElementById("edit-overview-button");
    const addProjectButton = document.getElementById("add-project-button");
    const addTeamButton = document.getElementById("add-team-button");
    const addSupportCardButton = document.getElementById("add-support-card-button");
    const addQuickHelpCardButton = document.getElementById("add-quickhelp-card-button");

    document.body.classList.toggle("admin-mode", APP_STATE.adminLoggedIn);
    document.body.classList.toggle("not-admin-mode", !APP_STATE.adminLoggedIn);
    if (logoTrigger) {
        logoTrigger.classList.toggle("is-admin-active", APP_STATE.adminLoggedIn);
        logoTrigger.title = APP_STATE.adminLoggedIn
            ? "Admin mode active"
            : "Click the Madison88 logo 5 times to open the IT admin login";
        logoTrigger.setAttribute("aria-label", APP_STATE.adminLoggedIn
            ? "Madison88 IT and Development Headquarters, admin mode active"
            : "Madison88 IT and Development Headquarters");
    }
    if (overviewButton) overviewButton.hidden = !APP_STATE.adminLoggedIn;
    if (addProjectButton) addProjectButton.hidden = !APP_STATE.adminLoggedIn;
    if (addTeamButton) addTeamButton.hidden = !APP_STATE.adminLoggedIn;
    if (addSupportCardButton) addSupportCardButton.hidden = !APP_STATE.adminLoggedIn;
    if (addQuickHelpCardButton) addQuickHelpCardButton.hidden = !APP_STATE.adminLoggedIn;
    window.dispatchEvent(new CustomEvent("itsm-token-updated"));
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
    void persistSupabaseSection(SUPABASE_SECTION_KEYS.projects, APP_STATE.projects);
    void persistSupabaseSection(SUPABASE_SECTION_KEYS.overview, APP_STATE.overview);
}

function saveOverview() {
    syncOverviewProjectCount();
    void persistSupabaseSection(SUPABASE_SECTION_KEYS.overview, APP_STATE.overview);
}

function saveServices() {
    void persistSupabaseSection(SUPABASE_SECTION_KEYS.services, APP_STATE.services);
}

function saveTeam() {
    APP_STATE.team = APP_STATE.team.map(normalizeTeamMember);
    ensureTeamAutofillList();
    void persistSupabaseSection(SUPABASE_SECTION_KEYS.team, APP_STATE.team);
}

function saveQuickHelp() {
    void persistSupabaseSection(SUPABASE_SECTION_KEYS.quickHelp, APP_STATE.quickHelp);
}

function saveContactGuide() {
    void persistSupabaseSection(SUPABASE_SECTION_KEYS.contactGuide, APP_STATE.contactGuide);
}

function saveSupportCards() {
    void persistSupabaseSection(SUPABASE_SECTION_KEYS.supportCards, APP_STATE.supportCards);
}

function savePolicyDocuments() {
    APP_STATE.policyDocuments = APP_STATE.policyDocuments.map(normalizePolicyDocument);
    void persistSupabaseSection(SUPABASE_SECTION_KEYS.policyDocuments, APP_STATE.policyDocuments);
}

function loadProjects(source = "default") {
    if (source !== "legacy") {
        return cloneData(APP_CONFIG.projects).map(normalizeProject);
    }
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.projectData);
        return raw ? JSON.parse(raw).map(normalizeProject) : APP_CONFIG.projects.map(normalizeProject);
    } catch (error) {
        return APP_CONFIG.projects.map(normalizeProject);
    }
}

function loadOverview(source = "default") {
    if (source !== "legacy") {
        return cloneData(APP_CONFIG.overview);
    }
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

function loadServices(source = "default") {
    if (source !== "legacy") {
        return cloneData(APP_CONFIG.services);
    }
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.serviceData);
        const saved = raw ? JSON.parse(raw) : null;
        if (!Array.isArray(saved)) return APP_CONFIG.services;

        return APP_CONFIG.services.map((defaultGroup) => {
            const savedGroup = saved.find((group) => group.category === defaultGroup.category);
            if (!savedGroup || !Array.isArray(savedGroup.items)) return defaultGroup;

            return {
                ...defaultGroup,
                items: defaultGroup.items.map((defaultItem) => {
                    const savedItem = savedGroup.items.find((item) => item.name === defaultItem.name);
                    return savedItem ? {
                        ...defaultItem,
                        ...savedItem,
                        url: String(savedItem.url || defaultItem.url || "").trim()
                    } : defaultItem;
                })
            };
        });
    } catch (error) {
        return APP_CONFIG.services;
    }
}

function loadTeam(source = "default") {
    if (source !== "legacy") {
        return cloneData(APP_CONFIG.team).map(normalizeTeamMember).sort((a, b) => a.hierarchy - b.hierarchy);
    }
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.teamData);
        if (!raw) {
            return APP_CONFIG.team.map(normalizeTeamMember).sort((a, b) => a.hierarchy - b.hierarchy);
        }
        const saved = JSON.parse(raw);
        if (!Array.isArray(saved)) {
            return APP_CONFIG.team.map(normalizeTeamMember).sort((a, b) => a.hierarchy - b.hierarchy);
        }
        return saved.map(normalizeTeamMember).sort((a, b) => a.hierarchy - b.hierarchy);
    } catch (error) {
        return APP_CONFIG.team.map(normalizeTeamMember).sort((a, b) => a.hierarchy - b.hierarchy);
    }
}

function loadQuickHelp(source = "default") {
    if (source !== "legacy") {
        return cloneData(APP_CONFIG.quickHelp);
    }
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.quickHelpData);
        return raw ? normalizeQuickHelpItems(JSON.parse(raw)) : APP_CONFIG.quickHelp;
    } catch (error) {
        return APP_CONFIG.quickHelp;
    }
}

function normalizeQuickHelpItems(items) {
    if (!Array.isArray(items) || !items.length) return APP_CONFIG.quickHelp;

    const hasLegacyContactCards = items.some((item) => {
        const title = String(item?.title || "").toLowerCase();
        const action = String(item?.action || "").toLowerCase();
        const actionType = String(item?.actionType || "").toLowerCase();

        return actionType === "message"
            || action.includes("message ")
            || title.includes("project approvals")
            || title.includes("account access")
            || title.includes("hardware setup")
            || title.includes("portal guidance");
    });

    return hasLegacyContactCards ? cloneData(APP_CONFIG.quickHelp) : items;
}

function loadContactGuide(source = "default") {
    if (source !== "legacy") {
        return cloneData(APP_CONFIG.contactGuide).map(normalizeContactGuideRow);
    }
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.contactGuideData);
        const savedRows = raw ? JSON.parse(raw) : APP_CONFIG.contactGuide;
        return Array.isArray(savedRows) ? savedRows.map(normalizeContactGuideRow) : APP_CONFIG.contactGuide.map(normalizeContactGuideRow);
    } catch (error) {
        return APP_CONFIG.contactGuide.map(normalizeContactGuideRow);
    }
}

function loadSupportCards(source = "default") {
    if (source !== "legacy") {
        return cloneData(APP_CONFIG.supportCards);
    }
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.supportData);
        return raw ? JSON.parse(raw) : APP_CONFIG.supportCards;
    } catch (error) {
        return APP_CONFIG.supportCards;
    }
}

function reconcileSystemProjects(projects = []) {
    const incoming = Array.isArray(projects) ? projects : [];
    const incomingById = new Map(incoming.map((project) => [project.id, project]));
    const canonicalProjects = APP_CONFIG.projects.map((defaultProject) => {
        const existing = incomingById.get(defaultProject.id) || {};
        return normalizeProject({
            ...defaultProject,
            ...existing,
            team: Array.isArray(existing.team) && existing.team.length ? existing.team : defaultProject.team,
            owner: existing.owner || defaultProject.owner,
            ownerName: existing.ownerName || defaultProject.ownerName,
            updated: existing.updated || defaultProject.updated,
            systemUrl: existing.systemUrl || defaultProject.systemUrl || "",
            restricted: typeof existing.restricted === "boolean" ? existing.restricted : defaultProject.restricted
        });
    });

    const extraProjects = incoming
        .filter((project) => project && !SYSTEM_PROJECT_DEFAULTS[project.id])
        .map(normalizeProject);

    return [...canonicalProjects, ...extraProjects];
}

function loadPolicyDocuments(source = "default") {
    if (source !== "legacy") {
        return cloneData(POLICY_DOCUMENTS).map(normalizePolicyDocument);
    }
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.policyDocumentsData);
        const saved = raw ? JSON.parse(raw) : POLICY_DOCUMENTS;
        return Array.isArray(saved) ? saved.map(normalizePolicyDocument) : POLICY_DOCUMENTS.map(normalizePolicyDocument);
    } catch (error) {
        return POLICY_DOCUMENTS.map(normalizePolicyDocument);
    }
}

function normalizeProject(project) {
    const normalizedOwner = String(project.owner || "").trim().toUpperCase();
    const normalizedOwnerName = String(project.ownerName || resolveMemberName(normalizedOwner, "Unassigned")).trim();
    const normalizedId = String(project.id || "").trim();
    const systemDefaults = SYSTEM_PROJECT_DEFAULTS[normalizedId] || {};
    return {
        ...project,
        id: normalizedId,
        name: String(project.name || systemDefaults.name || "").trim() || "Untitled Project",
        status: String(project.status || systemDefaults.status || "").trim() || "Planning",
        filter: String(project.filter || systemDefaults.filter || getDefaultProjectFilter(project.status)).trim() || "in-progress",
        description: String(project.description || systemDefaults.description || "").trim(),
        progress: clampProgress(project.progress, 0),
        owner: normalizedOwner,
        ownerName: normalizedOwnerName,
        overseenBy: String(project.overseenBy || normalizedOwnerName || "Admin").trim(),
        assignedBy: String(project.assignedBy || "Admin").trim(),
        team: Array.isArray(project.team) ? project.team.map((item) => String(item).trim().toUpperCase()).filter(Boolean) : [],
        systemUrl: String(project.systemUrl || systemDefaults.systemUrl || "").trim(),
        restricted: typeof project.restricted === "boolean" ? project.restricted : (typeof systemDefaults.restricted === "boolean" ? systemDefaults.restricted : false)
    };
}

function normalizeLinkedInUrl(url) {
    const raw = String(url || "").trim();
    if (!raw) return "";
    if (/^https?:\/\//i.test(raw)) return raw;
    if (/^www\./i.test(raw)) return `https://${raw}`;
    return raw;
}

function normalizeTeamMember(member) {
    const email = String(member.email || member.message || "").trim();
    return {
        ...member,
        email,
        message: email,
        number: String(member.number || "").trim(),
        school: String(member.school || "").trim(),
        linkedin: normalizeLinkedInUrl(String(member.linkedin || "").trim()),
        image: String(member.image || "").trim() || getDefaultTeamImage(member.level || "intern")
    };
}

function parseIndexList(value) {
    return String(value || "")
        .split(",")
        .map((item) => Number(item.trim()))
        .filter((item, index, array) => Number.isInteger(item) && item >= 0 && array.indexOf(item) === index);
}

function normalizePolicyDocument(document) {
    return {
        id: String(document?.id || createPolicyDocumentId(String(document?.title || "policy-document"))).trim(),
        label: String(document?.label || "PDF").trim() || "PDF",
        typeLabel: String(document?.typeLabel || "Policy PDF").trim() || "Policy PDF",
        iconLabel: String(document?.iconLabel || "PDF").trim() || "PDF",
        title: String(document?.title || "Policy document").trim() || "Policy document",
        description: String(document?.description || "Open the policy document PDF.").trim() || "Open the policy document PDF.",
        actionLabel: String(document?.actionLabel || "Open PDF").trim() || "Open PDF",
        url: String(document?.url || "").trim(),
        sectionIndexes: Array.isArray(document?.sectionIndexes) ? parseIndexList(document.sectionIndexes.join(",")) : parseIndexList(document?.sectionIndexes)
    };
}

function createPolicyDocumentId(title = "") {
    const slug = String(title || "")
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
    return slug ? `policy-${slug}` : `policy-document-${Date.now()}`;
}

function findTeamMemberMatch(query) {
    const raw = String(query || "").trim();
    if (!raw) return null;
    const normalized = raw.toUpperCase();

    return APP_STATE.team.find((member) => {
        const fullName = String(member.name || "").toUpperCase();
        const email = String(member.email || member.message || "").toUpperCase();
        const initials = getInitials(member.name);
        const tokens = fullName.split(/\s+/).filter(Boolean);
        const firstLast = tokens.length >= 2 ? `${tokens[0]} ${tokens[tokens.length - 1]}` : fullName;

        return normalized === initials
            || fullName.includes(normalized)
            || email.includes(normalized)
            || firstLast.includes(normalized)
            || tokens.some((token) => token.startsWith(normalized));
    }) || null;
}

function autofillProjectOwnerFields(form, member) {
    const ownerField = form.querySelector('input[name="owner"]');
    const ownerNameField = form.querySelector('input[name="ownerName"]');
    const overseenByField = form.querySelector('input[name="overseenBy"]');
    if (ownerField) ownerField.value = getInitials(member.name);
    if (ownerNameField) ownerNameField.value = member.name;
    if (overseenByField && !String(overseenByField.value || "").trim()) {
        overseenByField.value = member.name;
    }
}

function autofillCardPersonFields(form, member) {
    const personField = form.querySelector('input[name="person"]');
    const valueField = form.querySelector('input[name="value"]');
    const actionField = form.querySelector('input[name="action"]');
    const actionTypeField = form.querySelector('select[name="actionType"]');

    if (personField) personField.value = member.name;
    if (actionTypeField && actionTypeField.value === "message" && valueField) {
        valueField.value = member.email || member.message || "";
    }
    if (actionField && !String(actionField.value || "").trim()) {
        const firstName = String(member.name || "").trim().split(/\s+/)[0] || "Contact";
        actionField.value = `Message ${firstName}`;
    }
}

function autofillGuideOwnerFields(form, member) {
    const ownerField = form.querySelector('input[name="owner"]');
    const initialsField = form.querySelector('input[name="initials"]');
    if (ownerField) ownerField.value = member.name;
    if (initialsField) initialsField.value = getInitials(member.name);
}

function normalizeContactGuideRow(row) {
    const owner = String(row.owner || "").trim() || "IT Team";
    const initials = String(row.initials || getInitials(owner)).trim().toUpperCase().slice(0, 3) || "IT";
    return {
        label: String(row.label || "").trim() || "Who To Contact",
        issue: String(row.issue || "").trim() || "Update this guidance row",
        owner,
        initials
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
        reader.onload = async () => {
            try {
                const rawDataUrl = String(reader.result || "");
                const optimized = await optimizeImageDataUrl(rawDataUrl, file);
                resolve(optimized);
            } catch (error) {
                reject(error || new Error("Unable to prepare this image."));
            }
        };
        reader.onerror = () => reject(reader.error || new Error("Unable to read file."));
        reader.readAsDataURL(file);
    });
}

function optimizeImageDataUrl(dataUrl, file) {
    const mimeType = String(file?.type || "").toLowerCase();
    if (!dataUrl) return Promise.resolve("");
    if (mimeType.includes("svg") || mimeType.includes("gif")) {
        return Promise.resolve(dataUrl);
    }

    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            const maxWidth = 900;
            const maxHeight = 1100;
            const widthRatio = maxWidth / image.width;
            const heightRatio = maxHeight / image.height;
            const scale = Math.min(1, widthRatio, heightRatio);
            const targetWidth = Math.max(1, Math.round(image.width * scale));
            const targetHeight = Math.max(1, Math.round(image.height * scale));

            const canvas = document.createElement("canvas");
            canvas.width = targetWidth;
            canvas.height = targetHeight;

            const context = canvas.getContext("2d");
            if (!context) {
                resolve(dataUrl);
                return;
            }

            context.drawImage(image, 0, 0, targetWidth, targetHeight);

            let optimized = canvas.toDataURL("image/jpeg", 0.82);
            if (optimized.length >= dataUrl.length * 0.95) {
                optimized = canvas.toDataURL("image/jpeg", 0.72);
            }

            resolve(optimized || dataUrl);
        };
        image.onerror = () => reject(new Error("Unable to prepare this image."));
        image.src = dataUrl;
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
        .map((item) => normalizeDeveloperIdentifier(item))
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

function normalizeDeveloperIdentifier(value) {
    const raw = String(value || "").trim();
    if (!raw) return "";

    const member = getMemberByIdentifier(raw);
    if (member) return getInitials(member.name);

    const parts = raw
        .split(/\s+/)
        .map((item) => item.trim())
        .filter(Boolean);

    if (parts.length >= 2) {
        return parts.slice(0, 2).map((part) => part[0]).join("").toUpperCase();
    }

    return raw.toUpperCase();
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
    const isAdminMember = member.level === "executive" || /admin/i.test(member.role);
    if (isAdminMember) return [];

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
