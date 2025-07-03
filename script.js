// تغيير لون الشريط عند التمرير
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(44, 62, 80, 0.9)';
    } else {
        nav.style.background = '#2c3e50';
    }
});

// تأثير fade-in للأقسام
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', checkSections);

function checkSections() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}