// Mark that JS is running: only now do reveal elements start hidden.
// If this script fails to load, .reveal content stays fully visible (fail-safe).
document.body.classList.add('js-anim');

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') links.classList.remove('open');
  });
}

// Reveal on scroll — with a fail-safe so nothing stays hidden.
const revealables = Array.from(document.querySelectorAll('.reveal'));
function revealAll() { revealables.forEach((el) => el.classList.add('in')); }
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
    }
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  revealables.forEach((el) => io.observe(el));
  // Safety net: if anything is still hidden a moment after full load, show it.
  window.addEventListener('load', () => {
    setTimeout(() => {
      revealables.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight + 200) el.classList.add('in');
      });
    }, 400);
  });
} else {
  revealAll();
}

// Project filtering
const filterBar = document.getElementById('proj-filters');
if (filterBar) {
  const groups = Array.from(document.querySelectorAll('.proj-group'));
  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    const f = btn.dataset.filter;
    filterBar.querySelectorAll('.filter-btn').forEach((b) => b.classList.toggle('active', b === btn));
    groups.forEach((g) => {
      const show = f === 'all' || g.dataset.cat === f;
      g.hidden = !show;
      if (show) g.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
    });
  });
}

// Lightbox for screenshots
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lbImg = lightbox.querySelector('img');
  const shots = document.querySelectorAll('.gallery .frame img, .find-proof .frame img');
  shots.forEach((img) => {
    img.classList.add('zoomable');
    img.addEventListener('click', () => {
      lbImg.src = img.currentSrc || img.src;
      lbImg.alt = img.alt || '';
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });
  const close = () => { lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden', 'true'); lbImg.src = ''; };
  lightbox.addEventListener('click', close);
  document.getElementById('lightbox-close').addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}
