const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('.primary-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quote-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Website Quote Request - ${data.get('company') || data.get('name')}`);
  const body = encodeURIComponent(
`New website quote request\n\nName: ${data.get('name') || ''}\nCompany: ${data.get('company') || ''}\nEmail: ${data.get('email') || ''}\nPhone: ${data.get('phone') || ''}\nProject Location: ${data.get('location') || ''}\nService: ${data.get('service') || ''}\n\nProject Details:\n${data.get('message') || ''}`
  );
  window.location.href = `mailto:info@superiorcablingsolutionsnc.com?subject=${subject}&body=${body}`;
});
