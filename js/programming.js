// Programming page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Certificate filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const certificateCards = document.querySelectorAll('.certificate-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter certificates
            certificateCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Certificate modal functionality
    const certificateImages = document.querySelectorAll('.certificate-img img');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    
    const closeModal = document.createElement('span');
    closeModal.classList.add('close-modal');
    closeModal.innerHTML = '&times;';
    
    modal.appendChild(modalContent);
    modal.appendChild(closeModal);
    document.body.appendChild(modal);
    
    certificateImages.forEach(image => {
        image.addEventListener('click', function() {
            modalContent.innerHTML = '';
            const imgClone = this.cloneNode();
            modalContent.appendChild(imgClone);
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Add styles for modal
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            z-index: 2000;
            align-items: center;
            justify-content: center;
        }
        
        .modal-content {
            max-width: 90%;
            max-height: 90%;
        }
        
        .modal-content img {
            max-width: 100%;
            max-height: 90vh;
            object-fit: contain;
        }
        
        .close-modal {
            position: absolute;
            top: 20px;
            right: 30px;
            color: white;
            font-size: 40px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(modalStyles);
    
    // Certificate info toggle
    const infoButtons = document.querySelectorAll('.info-btn');
    infoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const info = this.nextElementSibling;
            this.classList.toggle('active');
            info.classList.toggle('active');
        });
    });
    
    // Animate certificate cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    certificateCards.forEach(card => {
        observer.observe(card);
    });
});