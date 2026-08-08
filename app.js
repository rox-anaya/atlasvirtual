/* ==========================================================================
   ATLAS VIRTUAL - APP.JS (MENU & ANIMATIONS)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. MENU HTML INJECTION
    const menuHTML = `
    <!-- MENU OVERLAY & SIDE NAVIGATION -->
    <div class="menu-overlay" id="menuOverlay" onclick="toggleMenu()"></div>
    <nav class="side-menu" id="sideMenu">
        
        <!-- HEADER WITH LOGO AND TEXT -->
        <div class="menu-header">
            <div style="display: flex; align-items: center; gap: 0.6rem;">
                <img src="https://res.cloudinary.com/dsfwafyc2/image/upload/v1783704335/Picsart_26-07-09_09-13-49-532_cerqdw.png" alt="Atlas Virtual Logo" style="height: 30px; object-fit: contain;">
                <span style="font-weight: 800; font-size: 1.1rem; color: #14213D; letter-spacing: 0.5px;">Atlas Virtual</span>
            </div>
            <button class="close-menu" onclick="toggleMenu()"><i class="fa-solid fa-xmark"></i></button>
        </div>
        
        <div class="menu-links">
            <a href="index.html" class="menu-item">Home</a>
            
            <div class="menu-item" onclick="toggleDropdown('aboutDropdown', this)">
                About Us <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="menu-dropdown-content" id="aboutDropdown">
                <a href="about.html" class="menu-subitem">About Us</a>
                <a href="staff.html" class="menu-subitem">Staff</a>
            </div>

            <div class="menu-item" onclick="toggleDropdown('opsDropdown', this)">
                Operations <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="menu-dropdown-content" id="opsDropdown">
                <a href="fleet.html" class="menu-subitem">Fleet</a>
                <a href="event.html" class="menu-subitem">Events</a>
                <a href="routes.html" class="menu-subitem">Routes</a>
                <a href="rank.html" class="menu-subitem">Ranks</a>
            </div>

            <a href="training.html" class="menu-item">Training</a>
            <a href="changelog.html" class="menu-item">Change Log</a>
            <a href="apply.html" class="menu-item">Apply</a>
        </div>

        <!-- NEW DESIGN: DEVELOPED BY ROX (Now with Glassmorphism) -->
        <div class="menu-footer-card" style="display: flex; flex-direction: column; gap: 0.4rem; text-align: center; margin: 1rem; padding: 0.8rem; border: 1px solid rgba(255, 255, 255, 0.5); border-radius: 12px; background: rgba(255, 255, 255, 0.4); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); box-shadow: 0 4px 10px rgba(0,0,0,0.03);">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.1rem;">
                <span style="font-family: 'Inter', sans-serif; font-size: 0.5rem; color: #718096; text-transform: uppercase; letter-spacing: 1px;">Powered by METUPOLO ®</span>
                <div style="display: flex; align-items: baseline; gap: 0.3rem;">
                    <span style="font-family: 'Inter', sans-serif; font-size: 0.55rem; color: #4A5568; text-transform: uppercase; letter-spacing: 1px;">Developed By</span>
                    <span style="font-family: 'Great Vibes', cursive; font-size: 1.1rem; color: #111827; line-height: 1;">Rox</span>
                </div>
            </div>
            <a href="https://community.infiniteflight.com/u/ravikumar" style="background: #7C3AED; color: #FFFFFF; padding: 0.4rem 0.8rem; border-radius: 50px; text-decoration: none; font-size: 0.75rem; font-style: italic; font-weight: 600; display: inline-block; margin-top: 0.2rem;" target="_blank">IFC Profile</a>
        </div>
    </nav>
    `;

    // Inject menu into the body
    document.body.insertAdjacentHTML('afterbegin', menuHTML);

    // 2. SCROLL REVEAL ANIMATION LOGIC
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));
});

/* --- SIDE MENU LOGIC --- */
function toggleMenu() {
    document.getElementById('sideMenu').classList.toggle('open');
    document.getElementById('menuOverlay').classList.toggle('active');
}

function toggleDropdown(id, element) {
    const content = document.getElementById(id);
    const icon = element.querySelector('.fa-chevron-down');
    
    if (content.classList.contains('open')) {
        content.classList.remove('open');
        element.classList.remove('active-toggle');
        icon.style.transform = 'rotate(0deg)';
    } else {
        content.classList.add('open');
        element.classList.add('active-toggle');
        icon.style.transform = 'rotate(180deg)';
    }
}

/* --- SERVICE WORKER REGISTRATION --- */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}
