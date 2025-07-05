// Animation effects for the portfolio

// Animate elements when they come into view
document.addEventListener('DOMContentLoaded', function() {
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Certificate info toggle
    const infoButtons = document.querySelectorAll('.info-btn');
    infoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const info = this.nextElementSibling;
            this.classList.toggle('active');
            info.classList.toggle('active');
        });
    });
    
    // Typing animation for hero text
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 100);
    }
    
    // Floating animation for profile image
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        setInterval(() => {
            profileImg.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                profileImg.style.transform = 'translateY(0)';
            }, 1500);
        }, 3000);
    }
    
    // Particle background for hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random properties
            const size = Math.random() * 10 + 5;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 10 + 10;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            
            heroSection.appendChild(particle);
        }
    }
});

// Add styles for particles
const style = document.createElement('style');
style.textContent = `
    .particle {
        position: absolute;
        background-color: rgba(52, 152, 219, 0.3);
        border-radius: 50%;
        pointer-events: none;
        animation: float linear infinite;
    }
    
    @keyframes float {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
        }
        50% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0.5;
        }
        100% {
            transform: translateY(-200px) translateX(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);