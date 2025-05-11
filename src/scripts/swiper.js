// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next', // Selector for the "next" button
    prevEl: '.swiper-button-prev', // Selector for the "previous" button
  },
  pagination: {
    el: '.swiper-pagination', // Selector for the pagination element
    clickable: true, // Allow clicking on pagination bullets
  },
  loop: true, // Enable looping of slides
});