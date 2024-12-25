import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const swiper = new Swiper('.project-swiper-container', {
    modules: [Navigation, Keyboard, Mousewheel],
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
    keyboard: {
        benabled: true,
        onlyInViewport: true,
    },

    mousewheel: true,
});