/* --- Global Configuration & Data --- */
const PersonalStats = { aus: 126, usa: 920 };

document.addEventListener('DOMContentLoaded', () => {
    // 1. Site Loader
    const loader = document.getElementById('loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('fade-out'); startCounting();
                setTimeout(() => { loader.style.display = 'none'; }, 1000);
            }, 2200);
        });
    }

    // 2. Cursor & Spotlight
    const cursorDot = document.querySelector('.cursor-dot'), cursorOutline = document.querySelector('.cursor-outline');
    let mouseX = 0, mouseY = 0, outlineX = 0, outlineY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX; mouseY = e.clientY;
        cursorDot.style.left = `${mouseX}px`; cursorDot.style.top = `${mouseY}px`;
        if (e.target.closest('a, button, .glass, .project-card, .team-card-premium')) document.body.classList.add('cursor-active');
        else document.body.classList.remove('cursor-active');
        document.querySelectorAll('.glass').forEach(card => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
    });

    const animateCursor = () => {
        outlineX += (mouseX - outlineX) * 0.15; outlineY += (mouseY - outlineY) * 0.15;
        cursorOutline.style.left = `${outlineX}px`; cursorOutline.style.top = `${outlineY}px`;
        requestAnimationFrame(animateCursor);
    };
    animateCursor();

    // 3. Detailed Team Data (Phase 7)
    const leadership = [
        { 
            name: 'Paul Avendano', role: 'Project Manager', 
            age: 32, school: 'Ateneo de Manila University', address: 'BGC, Taguig City', course: 'BS Management Engineering',
            img: 'paul_pm_portrait_1774849659547.png', verified: true 
        },
        { 
            name: 'Lester Mendoza', role: 'System Administrator', 
            age: 29, school: 'De La Salle University', address: 'Makati City', course: 'BS Computer Science',
            img: 'lester_sysadmin_portrait_1774849673559.png', verified: true 
        }
    ];

    const interns = [
        { 
            name: 'John Carlo M. Manalo', role: 'IT Intern', 
            age: 21, school: 'CIT University', address: 'Manila', course: 'BS Information Technology',
            img: 'intern_carlo_portrait_1774849747248.png' 
        },
        { 
            name: 'John Sedrick N. Sarol', role: 'IT Intern', 
            age: 22, school: 'TIP Manila', address: 'Quezon City', course: 'BS Computer Engineering',
            img: 'intern_sedrick_portrait_1774849784438.png' 
        },
        { 
            name: 'Stephanie Guce', role: 'IT Intern', 
            age: 20, school: 'Batangas State University', address: 'Batangas City', course: 'BS Architecture (UI Specialist)',
            img: 'intern_stephanie_portrait_1774849903805.png' 
        },
        { 
            name: 'Mhark Anthony O. Pentinio', role: 'IT Intern', 
            age: 21, school: 'Cavite State University', address: 'Cavite', course: 'BS Cybersecurity',
            img: 'intern_mhark_portrait_1774849921272.png' 
        }
    ];

    const teamGrid = document.querySelector('.team-grid');
    if (teamGrid) {
        teamGrid.innerHTML = '';
        const lRow = document.createElement('div'); lRow.className = 'leadership-row';
        leadership.forEach(m => lRow.appendChild(createTeamCard(m, 'leader-card')));
        teamGrid.appendChild(lRow);
        const iRow = document.createElement('div'); iRow.className = 'interns-row';
        interns.forEach(m => iRow.appendChild(createTeamCard(m, 'intern-card')));
        teamGrid.appendChild(iRow);
    }

    function createTeamCard(member, extraClass = '') {
        const card = document.createElement('div');
        card.className = `team-card-premium glass ${extraClass} reveal`;
        card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${member.img}" alt="${member.name}" class="member-img">
                <div class="card-blur-overlay"></div>
            </div>
            <div class="card-content">
                <div class="member-header"><h3>${member.name}</h3>${member.verified ? '<span class="verified-badge">✓</span>' : ''}</div>
                <p class="member-role-bio">${member.role} • M88 Specialist</p>
                <div class="card-footer-action">
                    <button class="btn-profile-pill">View Profile</button>
                    <button class="btn-contact-pill">Contact</button>
                </div>
            </div>
        `;
        return card;
    }

    // 4. Projects & Modals
    const projects = [
        { name: 'MadisonLink v2', category: 'Platform', desc: 'Secure enterprise communication.', icon: '🏢' },
        { name: 'OmniDash Manufacturing', category: 'IoT', desc: 'Real-time efficiency monitoring.', icon: '⚙️' },
        { name: 'M88 Security Suite', category: 'Security', desc: 'Threat detection framework.', icon: '🔒' },
        { name: 'InventoryAI', category: 'ML', desc: 'Supply chain optimization.', icon: '🤖' }
    ];

    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projects.forEach(p => {
            const card = document.createElement('div');
            card.className = 'project-card glass reveal';
            card.innerHTML = `<span class="project-tag">${p.category}</span><h3>${p.icon} ${p.name}</h3><p>${p.desc}</p>`;
            projectsGrid.appendChild(card);
        });
    }

    const revealOnScroll = () => {
        document.querySelectorAll('.reveal').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 150) el.classList.add('active');
        });
    };
    window.addEventListener('scroll', revealOnScroll); revealOnScroll();

    function startCounting() {
        const countUp = (element) => {
            const target = parseFloat(element.getAttribute('data-target'));
            const duration = 2000, startTime = performance.now();
            const update = (t) => {
                const progress = Math.min((t - startTime) / duration, 1);
                const current = target * (1 - Math.pow(2, -10 * progress));
                element.textContent = target % 1 === 0 ? Math.floor(current) : current.toFixed(1);
                if (progress < 1) requestAnimationFrame(update); else element.textContent = target;
            };
            requestAnimationFrame(update);
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) { countUp(e.target); observer.unobserve(e.target); } });
        }, { threshold: 0.1 });
        document.querySelectorAll('.stat-number').forEach(s => observer.observe(s));
        window.countUpObserver = observer;
    }

    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf); window.lenisInstance = lenis;
    }

    // Modal Core logic
    const modal = document.getElementById('universal-modal'), modalBody = document.getElementById('modal-body'), modalClose = document.querySelector('.modal-close');
    function openModal(content) {
        if (!modal || !modalBody) return;
        modalBody.innerHTML = content; modal.classList.add('active');
        if (window.lenisInstance) window.lenisInstance.stop();
        document.body.style.overflow = 'hidden';
    }
    function closeModal() {
        if (!modal) return;
        modal.classList.remove('active');
        if (window.lenisInstance) window.lenisInstance.start();
        document.body.style.overflow = '';
    }
    if (modalClose) modalClose.onclick = closeModal;
    window.onclick = (e) => { if (e.target === modal) closeModal(); };

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-submit, .btn-contact, .btn-contact-pill-hero, .btn-contact-pill, .btn-profile-pill');
        if (btn) {
            e.preventDefault();
            const card = btn.closest('.team-card-premium');
            const name = card ? card.querySelector('h3').innerText : null;
            if (btn.classList.contains('btn-profile-pill')) openProfileModal(name);
            else if (btn.classList.contains('btn-contact-pill')) openContactModal(name);
            else openModal(ticketFormHTML);
            return;
        }
        const pc = e.target.closest('.project-card');
        if (pc) openProjectModal(pc.querySelector('h3').innerText);
    });

    const ticketFormHTML = `<div class="ticket-form"><h2>Submit Ticket</h2><p>IT Headquarters Support.</p><button class="btn-save-black" style="width:100%" onclick="handleTicketSubmit()">Submit Report</button></div>`;
    window.handleTicketSubmit = () => { modalBody.innerHTML = `<div style="text-align: center; color:#101828; padding: 40px;"><h2>Ticket Submitted!</h2><button class="btn-save-black" onclick="closeModal()">Close</button></div>`; };

    function openProjectModal(name) {
        openModal(`<div class="ticket-form" style="color:#101828"><h2>${name}</h2><p>Madison88 Project v2.</p><button class="btn-save-black" onclick="closeModal()">Close Details</button></div>`);
    }

    // --- Phase 7 Profile Modal Layout (Untitled UI Match) ---
    function openProfileModal(name) {
        const all = [...leadership, ...interns];
        const m = all.find(x => x.name.includes(name.trim()));
        if (!m) return;
        
        const username = m.name.toLowerCase().replace(/ /g, '.').replace(/\./g, '');
        
        const content = `
            <div class="profile-modal-container">
                <div class="profile-header">
                    <img src="${m.img}" class="profile-avatar-large" alt="avatar">
                    <div class="profile-top-actions">
                        <button class="btn-profile-plain">🔗 Copy link</button>
                        <button class="btn-profile-plain">View profile</button>
                    </div>
                </div>
                <div class="profile-main-content">
                    <div class="profile-name-area">
                        <h2>${m.name} ${m.verified ? '✔️' : ''}</h2>
                        <p>${username}@madison88.com</p>
                    </div>
                    
                    <div class="profile-field-grid">
                        <div class="profile-row">
                            <label>Name</label>
                            <input type="text" class="profile-input-box" value="${m.name}">
                        </div>
                        <div class="profile-row">
                            <label>Age</label>
                            <input type="text" class="profile-input-box" value="${m.age}">
                        </div>
                        <div class="profile-row">
                            <label>School</label>
                            <input type="text" class="profile-input-box" value="${m.school}">
                        </div>
                        <div class="profile-row">
                            <label>Address</label>
                            <input type="text" class="profile-input-box" value="${m.address}">
                        </div>
                        <div class="profile-row">
                            <label>Course</label>
                            <input type="text" class="profile-input-box" value="${m.course}">
                        </div>
                    </div>
                </div>
                <div class="profile-footer-actions">
                    <div style="flex:1"></div>
                    <button class="btn-save-black" onclick="closeModal()">Close Profile</button>
                </div>
            </div>
        `;
        openModal(content);
    }

    function openContactModal(name) {
        const email = (name || "Support").trim().toLowerCase().replace(/ /g, '.') + '@madison88.com';
        openModal(`<div class="profile-modal-container" style="padding:40px; text-align:center;"><h2>Contact ${name.split(' ')[0]}</h2><p>${email}</p><button class="btn-save-black" onclick="closeModal()">Done</button></div>`);
    }

    const statsRow = document.querySelector('.stats-grid');
    if (statsRow && !statsRow.innerHTML.includes('USA')) {
        statsRow.insertAdjacentHTML('beforeend', `<div class="stat-item reveal"><div class="stat-number" data-target="${PersonalStats.usa}">0</div><div class="stat-label">USA Shipments</div></div><div class="stat-item reveal"><div class="stat-number" data-target="${PersonalStats.aus}">0</div><div class="stat-label">Australia Shipments</div></div>`);
        if (window.countUpObserver) statsRow.querySelectorAll('.stat-item:nth-last-child(-n+2) .stat-number').forEach(s => window.countUpObserver.observe(s));
    }
});
