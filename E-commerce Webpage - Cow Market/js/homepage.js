const faqs = document.querySelectorAll('.faq__item-icon');

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('faq__item-icon--active');
        if (faq.classList.contains('faq__item-icon--active')) {
            faq.children[0].setAttribute('src', 'images/download.png');
            faq.parentElement.parentElement.children[1].style.display = "block";
        } else {
            faq.children[0].setAttribute('src', 'images/upload.png');
            faq.parentElement.parentElement.children[1].style.display = "none";
        }
})});
