// Mechatronics page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // PDF viewer functionality
    const pdfViewer = document.createElement('iframe');
    pdfViewer.style.display = 'none';
    pdfViewer.style.width = '100%';
    pdfViewer.style.height = '80vh';
    pdfViewer.style.border = 'none';
    pdfViewer.style.marginTop = '20px';
    
    const pdfContainer = document.createElement('div');
    pdfContainer.style.display = 'none';
    pdfContainer.style.position = 'fixed';
    pdfContainer.style.top = '0';
    pdfContainer.style.left = '0';
    pdfContainer.style.width = '100%';
    pdfContainer.style.height = '100%';
    pdfContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    pdfContainer.style.zIndex = '2000';
    pdfContainer.style.padding = '20px';
    pdfContainer.style.boxSizing = 'border-box';
    pdfContainer.style.overflow = 'auto';
    
    const closePdf = document.createElement('button');
    closePdf.textContent = 'Close';
    closePdf.style.position = 'fixed';
    closePdf.style.top = '20px';
    closePdf.style.right = '20px';
    closePdf.style.padding = '10px 20px';
    closePdf.style.backgroundColor = 'var(--primary-color)';
    closePdf.style.color = 'white';
    closePdf.style.border = 'none';
    closePdf.style.borderRadius = '4px';
    closePdf.style.cursor = 'pointer';
    
    pdfContainer.appendChild(pdfViewer);
    pdfContainer.appendChild(closePdf);
    document.body.appendChild(pdfContainer);
    
    // Download PDF button
    const downloadPdf = document.querySelector('.project-links a[download]');
    if (downloadPdf) {
        downloadPdf.addEventListener('click', function(e) {
            if (window.innerWidth > 768) {
                e.preventDefault();
                const pdfUrl = this.getAttribute('href');
                pdfViewer.setAttribute('src', pdfUrl);
                pdfContainer.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    }
    
    closePdf.addEventListener('click', function() {
        pdfContainer.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Project gallery lightbox
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.createElement('div');
    lightbox.style.display = 'none';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    lightbox.style.zIndex = '2000';
    lightbox.style.alignItems = 'center';
    lightbox.style.justifyContent = 'center';
    lightbox.style.flexDirection = 'column';
    
    const lightboxImg = document.createElement('img');
    lightboxImg.style.maxWidth = '90%';
    lightboxImg.style.maxHeight = '80%';
    lightboxImg.style.objectFit = 'contain';
    
    const lightboxCaption = document.createElement('p');
    lightboxCaption.style.color = 'white';
    lightboxCaption.style.marginTop = '20px';
    
    const closeLightbox = document.createElement('span');
    closeLightbox.style.position = 'absolute';
    closeLightbox.style.top = '20px';
    closeLightbox.style.right = '30px';
    closeLightbox.style.color = 'white';
    closeLightbox.style.fontSize = '40px';
    closeLightbox.style.cursor = 'pointer';
    closeLightbox.innerHTML = '&times;';
    
    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(lightboxCaption);
    lightbox.appendChild(closeLightbox);
    document.body.appendChild(lightbox);
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').getAttribute('src');
            const imgAlt = this.querySelector('img').getAttribute('alt');
            
            lightboxImg.setAttribute('src', imgSrc);
            lightboxCaption.textContent = imgAlt;
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeLightbox.addEventListener('click', function() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Accordion functionality
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            const accordionItem = this.parentElement;
            const accordionContent = this.nextElementSibling;
            
            if (this.classList.contains('active')) {
                accordionItem.classList.add('active');
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionItem.classList.remove('active');
                accordionContent.style.maxHeight = '0';
            }
        });
    });
    
    // Open first accordion by default
    if (accordionBtns.length > 0) {
        accordionBtns[0].click();
    }
    
    // Video modal functionality
    const videoModal = document.createElement('div');
    videoModal.style.display = 'none';
    videoModal.style.position = 'fixed';
    videoModal.style.top = '0';
    videoModal.style.left = '0';
    videoModal.style.width = '100%';
    videoModal.style.height = '100%';
    videoModal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    videoModal.style.zIndex = '2000';
    videoModal.style.alignItems = 'center';
    videoModal.style.justifyContent = 'center';
    
    const videoIframe = document.createElement('iframe');
    videoIframe.style.width = '80%';
    videoIframe.style.height = '80%';
    videoIframe.style.border = 'none';
    
    const closeVideo = document.createElement('span');
    closeVideo.style.position = 'absolute';
    closeVideo.style.top = '20px';
    closeVideo.style.right = '30px';
    closeVideo.style.color = 'white';
    closeVideo.style.fontSize = '40px';
    closeVideo.style.cursor = 'pointer';
    closeVideo.innerHTML = '&times;';
    
    videoModal.appendChild(videoIframe);
    videoModal.appendChild(closeVideo);
    document.body.appendChild(videoModal);
    
    const viewVideoBtn = document.querySelector('.project-links a:not([download])');
    if (viewVideoBtn) {
        viewVideoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            videoIframe.setAttribute('src', 'https://www.youtube.com/embed/YOUR_VIDEO_ID');
            videoModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    }
    
    closeVideo.addEventListener('click', function() {
        videoIframe.setAttribute('src', '');
        videoModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});