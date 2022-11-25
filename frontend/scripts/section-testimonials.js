import Swiper, { Navigation, Autoplay } from 'swiper';
import 'swiper/css/bundle';

const testimonialsSections = document.querySelectorAll('.section-testimonials');

if ( testimonialsSections.length ) {
  testimonialsScript();
}

function testimonialsScript() {
  const swiper = new Swiper('.swiper', {
    // Install modules
    modules: [Navigation, Autoplay],
    slidesPerView: 3,
    spaceBetween: 0,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    loop: true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });
}