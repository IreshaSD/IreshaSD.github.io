document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav-toggle'); // Ensure there is an element with the class 'nav-toggle' in your HTML

    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('nav--open');
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 40,
                    behavior: 'smooth'
                });
            }
        });
    });
});

