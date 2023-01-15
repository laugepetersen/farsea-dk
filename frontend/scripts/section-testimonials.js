import Swiper, { Navigation, Autoplay } from 'swiper';

const testimonialsSections = document.querySelectorAll('.section-testimonials');

if ( testimonialsSections.length ) {
  testimonialsScript();
}

function testimonialsScript() {
  const swiper = new Swiper('.swiper', {
    // Install modules
    modules: [Navigation, Autoplay],
    slidesPerView: 1,
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
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
    }
  });
}