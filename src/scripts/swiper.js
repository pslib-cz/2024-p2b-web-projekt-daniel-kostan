import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

const thumbSwiper = new Swiper('.swiper-thumbs', {
modules: [Thumbs],
spaceBetween: 10,
slidesPerView: 4,
freeMode: true,
watchSlidesProgress: true,
});

const mainSwiper = new Swiper('.main-swiper', {
modules: [Navigation, Pagination, Thumbs],
loop: true,
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
pagination: {
el: '.swiper-pagination',
clickable: true,
},
thumbs: {
swiper: thumbSwiper,
},
});