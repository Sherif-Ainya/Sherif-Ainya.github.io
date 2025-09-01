// scrollEffects.js - Handles scroll-based animations

/**
 * Initializes scroll animations for elements
 * @param {string} selector - CSS selector for elements to animate
 * @param {string} animationClass - Class to add when element is in view
 * @param {number} threshold - Visibility threshold (0-1)
 */
export function initScrollAnimations(selector, animationClass = 'animate', threshold = 0.2) {
    const elements = document.querySelectorAll(selector);
    
    // Return if no elements found
    if (elements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
                // Unobserve after animation if needed
                // observer.unobserve(entry.target);
            }
        });
    }, { threshold });
    
    // Observe each element
    elements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Parallax scrolling effect
 * @param {string} selector - CSS selector for parallax elements
 * @param {number} factor - Parallax speed factor (0-1)
 */
export function initParallax(selector, factor = 0.2) {
    const elements = document.querySelectorAll(selector);
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        
        elements.forEach(element => {
            const offset = scrollPosition * factor;
            element.style.transform = `translateY(${offset}px)`;
        });
    });
}

/**
 * Sticky navigation with scroll
 */
export function initStickyNav() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}