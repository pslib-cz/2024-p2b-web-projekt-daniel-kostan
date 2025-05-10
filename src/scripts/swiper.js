import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Scrollbar],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },  
});