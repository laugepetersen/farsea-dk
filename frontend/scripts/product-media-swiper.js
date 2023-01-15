import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
const productMediaSwiper = document.querySelector('.product-media-swiper');

if(productMediaSwiper) {
  const swiper = new Swiper(productMediaSwiper, {
    modules: [Navigation, Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 2500,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });
}