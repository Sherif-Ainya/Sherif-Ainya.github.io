// Other Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Certificate modal functionality
    const viewButtons = document.querySelectorAll('.view-btn');
    const modal = document.querySelector('.certificate-modal');
    const modalImage = document.querySelector('.modal-image');
    const closeModal = document.querySelector('.close-modal');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const certificateCard = this.closest('.certificate-card');
            const imageSrc = certificateCard.querySelector('img').src;
            
            modalImage.src = imageSrc;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Animate certificate cards on scroll
    const animateOnScroll = () => {
        const cards = document.querySelectorAll('.certificate-card');
        
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = 1;
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.certificate-card').forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
    
    // Trigger on page load
    animateOnScroll();
});