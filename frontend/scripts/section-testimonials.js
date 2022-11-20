import Swiper, { Navigation } from 'swiper';
import 'swiper/css/bundle';

const testimonialsSections = document.querySelectorAll('.section-testimonials');

if ( testimonialsSections.length ) {
  testimonialsScript();
}

function testimonialsScript() {
  const swiper = new Swiper('.swiper', {
    // Install modules
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 0,
    autoplay: false,
    speed: 300,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });
}