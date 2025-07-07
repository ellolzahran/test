document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll for Navbar Links
    document.querySelectorAll('.navbar ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Optional: Close mobile nav if applicable (add functionality if you add a hamburger menu)
        });
    });

    // Sticky Navbar on Scroll
    const navbar = document.getElementById('navbar');
    const heroSection = document.getElementById('hero');

    const observerOptions = {
        rootMargin: '0px',
        threshold: 0.2 // Navbar changes when 20% of the hero section is visible
    };

    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navbar.classList.remove('scrolled');
            } else {
                navbar.classList.add('scrolled');
            }
        });
    }, observerOptions);

    heroObserver.observe(heroSection);


    // Scroll Animation for Sections (Fade In)
    const fadeInSections = document.querySelectorAll('.fade-in');

    const sectionObserverOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // When 10% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target); // Stop observing once it's appeared
            }
        });
    }, sectionObserverOptions);

    fadeInSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Basic Form Submission (Example - In a real project, this would send data to a server)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset(); // Clear the form
            // In a real application, you would send this data to a backend server.
            // Example: fetch('/api/contact', { method: 'POST', body: new FormData(this) });
        });
    }
});