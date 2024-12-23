import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/keyboard'

const nextSlideBtnAMe = document.querySelector('.swiper-button-next-aboutme');
const swiperContainer = document.querySelector('.swiper-aboutme')

const swiperAboutme = new Swiper(swiperContainer, {
    wrapperClass: 'swiper-wrapper-aboutme',
    slideClass: 'swiper-slide-aboutme',
    slideActiveClass: 'swiper-slide-active-aboutme',

    direction: 'horizontal',
    loop: true,
    modules: [Navigation, Keyboard],

    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
        320: {
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 3,
        },

        1440: {
            slidesPerView: 6,
        }
    },

    navigation: {
        nextEl: '.swiper-button-next-aboutme',
    },

    nested: true,
    
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    }
})

nextSlideBtnAMe.addEventListener('click', e => {
    swiperAboutme.slideNext();
})