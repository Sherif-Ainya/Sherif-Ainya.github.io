// Mechatronics Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // PDF viewer height adjustment
    const adjustPdfHeight = () => {
        const pdfContainer = document.querySelector('.pdf-container iframe');
        if (pdfContainer) {
            pdfContainer.style.height = window.innerWidth > 768 ? '600px' : '400px';
        }
    };
    
    // Adjust on load and resize
    window.addEventListener('load', adjustPdfHeight);
    window.addEventListener('resize', adjustPdfHeight);
    
    // Animate steps on scroll
    const animateSteps = () => {
        const steps = document.querySelectorAll('.step');
        
        steps.forEach(step => {
            const stepPosition = step.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (stepPosition < screenPosition) {
                step.style.opacity = 1;
                step.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.step').forEach(step => {
        step.style.opacity = 0;
        step.style.transform = 'translateY(30px)';
        step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Listen for scroll events
    window.addEventListener('scroll', animateSteps);
    
    // Trigger on page load
    animateSteps();
});