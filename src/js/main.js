/* ══════════════════════════════════════════
   RICHARD SANTOSO LIMAN, CPA — LANDING PAGE JS
   Animations, interactions, scroll effects
   ══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    'use strict';

    // ─── CONSTANTS ───
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const reveals = document.querySelectorAll('.reveal');
    const statNumbers = document.querySelectorAll('.stat-number');
    const contactForm = document.getElementById('contactForm');
    const backToTop = document.querySelector('.back-to-top');


    // ─── 1. NAVBAR SCROLL EFFECT ───
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    }, { passive: true });


    // ─── 2. MOBILE MENU ───
    navToggle.addEventListener('click', () => {
        const isOpen = navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') &&
            !navMenu.contains(e.target) &&
            !navToggle.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });


    // ─── 3. ACTIVE NAV LINK ON SCROLL ───
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }, { passive: true });


    // ─── 4. INTERSECTION OBSERVER — REVEAL ON SCROLL ───
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger delay based on --order or random offset
                const delay = entry.target.style.getPropertyValue('--order')
                    ? parseFloat(entry.target.style.getPropertyValue('--order')) * 0.1
                    : 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay * 1000);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => revealObserver.observe(el));


    // ─── 5. COUNTER ANIMATION (STATS) ───
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'));
                if (isNaN(target)) return;

                const duration = 2000; // ms
                const startTime = performance.now();

                function updateCounter(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                    const current = Math.floor(eased * target);
                    el.textContent = current;

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        el.textContent = target;
                    }
                }
                requestAnimationFrame(updateCounter);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => counterObserver.observe(el));


    // ─── 6. CONTACT FORM ───
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const btn = contactForm.querySelector('button[type="submit"]');
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
            btn.disabled = true;
            // Let the form submit natively to FormSubmit
            // (action & method already set in HTML)
            return true;
        });
    }


    // ─── 7. SMOOTH SCROLL FOR ANCHOR LINKS ───
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    // ─── 8. PARALLAX HERO BACKGROUND (subtle) ───
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const rate = scrolled * 0.3;
            heroBg.style.transform = `translateY(${rate}px)`;
        }, { passive: true });
    }


    // ─── 9. BACK TO TOP VISIBILITY ───
    if (backToTop) {
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }


    // ─── 10. KEYBOARD ACCESSIBILITY ───
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            navToggle.focus();
        }
    });


    // ─── 11. INITIAL LOAD ANIMATIONS ───
    // Hero elements appear with stagger on load
    const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-actions, .hero-visual');
    heroElements.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 300 + (i * 200));
    });

    console.log('%c Richard Santoso Liman, CPA ',
        'background: #081F3F; color: #F7A91B; font-size: 16px; font-weight: bold; padding: 8px 16px; border-radius: 4px;');

});
