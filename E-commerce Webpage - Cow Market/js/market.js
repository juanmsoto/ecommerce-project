const posts = document.querySelectorAll('.posts__item');

const detail = document.querySelector('.posts__detail');
const closeButton = detail.querySelector('.posts__detail-close');

const imgDetail = detail.querySelector('.posts__cattle-image');
const userElement = detail.querySelector('.posts__user');
const titleElement = detail.querySelector('.posts__title');
const quantityElement = detail.querySelector('.posts__quantity');

closeButton.addEventListener('click', () => {
    detail.style.display = 'none';
});

posts.forEach((post) => {
    const button = post.querySelector(".posts__button");

    button.addEventListener('click', () => {
        const img = post.querySelector(".posts__cattle-image").getAttribute('src');
        const user = post.querySelector(".posts__user").innerText;
        const title = post.querySelector(".posts__title").innerText;
        const quantity = post.querySelector(".posts__description span").innerText;

        imgDetail.setAttribute('src', img);
        userElement.innerText = user;
        titleElement.innerText = title;
        quantityElement.innerText = quantity;

        detail.style.display = 'flex';
    });
});