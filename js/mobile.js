// Mobile-specific functionality

document.addEventListener('DOMContentLoaded', function() {
    // Touch device detection
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;
    
    if (isTouchDevice) {
        document.body.classList.add('touch-device');
        
        // Add touch-specific event listeners
        const elements = document.querySelectorAll('.certificate-card, .language-card, .gallery-item');
        elements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.classList.add('touched');
            });
            
            element.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.classList.remove('touched');
                }, 300);
            });
        });
    }
    
    // Adjust viewport for mobile devices
    const setViewport = function() {
        const viewport = document.querySelector('meta[name="viewport"]');
        if (window.innerWidth <= 768) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        } else {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    };
    
    setViewport();
    window.addEventListener('resize', setViewport);
    
    // Prevent zoom on double-tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Add swipe detection for testimonials
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        let touchStartX = 0;
        let touchEndX = 0;
        
        testimonialSlider.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        testimonialSlider.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            if (touchEndX < touchStartX - 50) {
                // Swipe left
                nextTestimonial();
            }
            
            if (touchEndX > touchStartX + 50) {
                // Swipe right
                prevTestimonial();
            }
        }
    }
    
    // Mobile-specific animations
    if (window.innerWidth <= 768) {
        // Simplify animations for mobile
        const complexAnimations = document.querySelectorAll('.particle, .floating-element');
        complexAnimations.forEach(el => el.remove());
        
        // Adjust scroll reveal for mobile
        ScrollReveal().destroy();
    }
});

// Testimonial slider functionality
function nextTestimonial() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    
    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            currentIndex = index;
            slide.classList.remove('active');
            dots[index].classList.remove('active');
        }
    });
    
    const nextIndex = (currentIndex + 1) % slides.length;
    slides[nextIndex].classList.add('active');
    dots[nextIndex].classList.add('active');
}

function prevTestimonial() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    
    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            currentIndex = index;
            slide.classList.remove('active');
            dots[index].classList.remove('active');
        }
    });
    
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[prevIndex].classList.add('active');
    dots[prevIndex].classList.add('active');
}

// Initialize testimonial slider controls
document.addEventListener('DOMContentLoaded', function() {
    const nextBtn = document.querySelector('.slider-next');
    const prevBtn = document.querySelector('.slider-prev');
    const dots = document.querySelectorAll('.dot');
    
    if (nextBtn) nextBtn.addEventListener('click', nextTestimonial);
    if (prevBtn) prevBtn.addEventListener('click', prevTestimonial);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            const slides = document.querySelectorAll('.testimonial-slide');
            
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            
            slides[index].classList.add('active');
            this.classList.add('active');
        });
    });
});