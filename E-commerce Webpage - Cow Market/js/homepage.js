const faqs = document.querySelectorAll('.faq__item');

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('faq__item--active');
        if (faq.classList.contains('faq__item--active')) {
            faq.children[0].children[1].children[0].setAttribute('src', 'images/download.png');
            faq.children[1].style.display = "block";
        } else {
            faq.children[0].children[1].children[0].setAttribute('src', 'images/upload.png');
            faq.children[1].style.display = "none";
        }
})});
