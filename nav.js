/* nav.js — shared navigation logic v2 (dropdown nav) */
(function () {

  /* ── Hamburger toggle ── */
  var toggle = document.getElementById('navToggle');
  var mobileNav = document.getElementById('mobileNav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
      toggle.classList.toggle('open');
    });
  }

  /* ── Desktop dropdowns ── */
  document.querySelectorAll('.nav-dropdown').forEach(function (dd) {
    var btn = dd.querySelector('.nav-dd-btn');
    var menu = dd.querySelector('.nav-dd-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = dd.classList.contains('open');
      // close all others
      document.querySelectorAll('.nav-dropdown.open').forEach(function (o) {
        o.classList.remove('open');
      });
      if (!open) dd.classList.add('open');
    });
  });

  /* ── Close desktop dropdowns on outside click ── */
  document.addEventListener('click', function () {
    document.querySelectorAll('.nav-dropdown.open').forEach(function (o) {
      o.classList.remove('open');
    });
  });

  /* ── Mobile accordion dropdowns ── */
  document.querySelectorAll('.mob-dd-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var parent = btn.closest('.mob-dd');
      if (parent) parent.classList.toggle('open');
    });
  });

  /* ── Highlight active nav link ── */
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(function (link) {
    if (link.getAttribute('href') === current) link.classList.add('active');
  });

})();
