// 1. تعريف الصفحات
const routes = {
    '/': 'home-page',
    '/projects': 'projects-page',
    '/contact': 'contact-page'
};

// 2. تغيير الصفحة عند النقر على الرابط
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = routes[link.getAttribute('href')];
        showPage(pageId);
    });
});

// 3. إظهار الصفحة المطلوبة
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
    
    // تأثيرات GSAP
    gsap.from(`#${pageId}`, { opacity: 0, y: 50, duration: 1 });
}

// 4. تحميل الصفحة الأولى
showPage('home-page');