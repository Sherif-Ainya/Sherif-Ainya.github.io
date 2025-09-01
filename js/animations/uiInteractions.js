// uiInteractions.js - Handles UI element animations

/**
 * Initializes hover animations for buttons
 * @param {string} selector - CSS selector for buttons
 */
export function initButtonHoverAnimations(selector) {
    const buttons = document.querySelectorAll(selector);
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-5px)';
            button.style.boxShadow = '0 8px 15px rgba(106, 13, 173, 0.4)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = '0 4px 10px rgba(106, 13, 173, 0.3)';
        });
    });
}

/**
 * Initializes ripple effect for buttons
 * @param {string} selector - CSS selector for buttons
 */
export function initRippleEffect(selector) {
    const buttons = document.querySelectorAll(selector);
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Remove existing ripples
            const ripples = this.querySelectorAll('.ripple');
            ripples.forEach(ripple => ripple.remove());
            
            // Create new ripple
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            // Position ripple
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size/2;
            const y = e.clientY - rect.top - size/2;
            
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

/**
 * Initializes animated hamburger menu
 * @param {string} hamburgerSelector - CSS selector for hamburger
 * @param {string} navSelector - CSS selector for navigation
 */
export function initHamburgerMenu(hamburgerSelector, navSelector) {
    const hamburger = document.querySelector(hamburgerSelector);
    const nav = document.querySelector(navSelector);
    
    if (!hamburger || !nav) return;
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
}