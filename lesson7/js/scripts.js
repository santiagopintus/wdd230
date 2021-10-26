const images = document.querySelectorAll('[data-src]');

function loadImage(img) {
    const src = img.getAttribute('data-src');

    if (!src) {
        return;
    }
    img.src = src;
    img.removeAttribute('data-src');
}


const imgOptions = {
    threshold: 0,
    rootMargin: '0px 0px -300px 0px'
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadImage(entry.target);
            imgObserver.unobserve(entry.target);
        } else {
            return;
        }
    });
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});
