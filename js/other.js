// Other Skills page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Language card info toggle
    const infoButtons = document.querySelectorAll('.info-btn');
    infoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const info = this.nextElementSibling;
            this.classList.toggle('active');
            info.classList.toggle('active');
        });
    });
    
    // Testimonial slider
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }
    
    // Auto-rotate testimonials
    let testimonialInterval = setInterval(() => {
        const nextIndex = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(nextIndex);
    }, 5000);
    
    // Pause auto-rotation on hover
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        testimonialSlider.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
        });
        
        testimonialSlider.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(() => {
                const nextIndex = (currentTestimonial + 1) % testimonials.length;
                showTestimonial(nextIndex);
            }, 5000);
        });
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(testimonialInterval);
            showTestimonial(index);
            
            // Restart auto-rotation after manual selection
            testimonialInterval = setInterval(() => {
                const nextIndex = (currentTestimonial + 1) % testimonials.length;
                showTestimonial(nextIndex);
            }, 5000);
        });
    });
    
    // Next/prev buttons
    const nextBtn = document.querySelector('.slider-next');
    const prevBtn = document.querySelector('.slider-prev');
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            clearInterval(testimonialInterval);
            const nextIndex = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(nextIndex);
            
            testimonialInterval = setInterval(() => {
                const nextIndex = (currentTestimonial + 1) % testimonials.length;
                showTestimonial(nextIndex);
            }, 5000);
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            clearInterval(testimonialInterval);
            const prevIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            showTestimonial(prevIndex);
            
            testimonialInterval = setInterval(() => {
                const nextIndex = (currentTestimonial + 1) % testimonials.length;
                showTestimonial(nextIndex);
            }, 5000);
        });
    }
    
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.bar-fill');
    const skillBarObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.parentElement.previousElementSibling.textContent;
                entry.target.style.width = width;
                skillBarObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        bar.style.width = '0';
        skillBarObserver.observe(bar);
    });
    
    // Typing animation for statistics
    const statValues = document.querySelectorAll('.stat-value');
    statValues.forEach(value => {
        const target = parseInt(value.textContent);
        value.textContent = '0';
        
        let current = 0;
        const increment = target / 20;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                value.textContent = target.toString();
            } else {
                value.textContent = Math.floor(current).toString();
            }
        }, 50);
    });
});