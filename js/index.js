// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Sticky Navbar on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-card, .cert-card, .project-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
document.querySelectorAll('.skill-card, .cert-card, .project-card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Trigger on page load
window.addEventListener('load', animateOnScroll);

import { initStickyNav, initParallax } from './animations/scrollEffects.js';
import { initCardHoverAnimations } from './animations/cardAnimations.js';
import { initButtonHoverAnimations, initRippleEffect, initHamburgerMenu } from './animations/uiInteractions.js';

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Scroll effects
    initStickyNav();
    initParallax('.parallax-element', 0.2);
    
    // Card animations
    initCardHoverAnimations('.skill-card, .cert-card, .project-card');
    
    // UI interactions
    initButtonHoverAnimations('.btn, .telegram-btn');
    initRippleEffect('.btn, .telegram-btn');
    initHamburgerMenu('.hamburger', '.nav-links');
});