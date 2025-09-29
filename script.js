// Animación al hacer scroll: fade-scroll
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-scroll');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Toggle nav para móviles
    const toggleBtn = document.getElementById('menu-toggle');
    const navList = document.querySelector('.nav-list');

    toggleBtn.addEventListener('click', () => {
        navList.classList.toggle('open');
    });
});
