import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const productMediaSwiper = document.querySelector(".product-media-swiper");

if (productMediaSwiper) {
  const swiper = new Swiper(productMediaSwiper, {
    modules: [Navigation, Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2500,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
  });

  const mobileLightbox = new PhotoSwipeLightbox({
    gallery: ".media.mobile",
    children: "a.product-media-swiper__item",
    pswpModule: () => import("photoswipe"),
  });
  mobileLightbox.init();

  const desktopLightbox = new PhotoSwipeLightbox({
    gallery: ".media.desktop",
    children: "a.product-media-swiper__item",
    pswpModule: () => import("photoswipe"),
  });
  desktopLightbox.init();
}
