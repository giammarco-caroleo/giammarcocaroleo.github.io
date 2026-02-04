// small helpers: year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll (IntersectionObserver)
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, {threshold: 0.12});
reveals.forEach(r=>io.observe(r));

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e) => {
    // keep normal behavior for top-of-page link if needed
    const href = a.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        history.pushState(null,'',href);
      }
    }
  });
});
