import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.project-swiper-container', {

    slidesPerView: 1,
    spaceBetween: 16,
    watchOverflow: false,
    loop: false,
    direction: 'horizontal',
    speed: 600,
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});