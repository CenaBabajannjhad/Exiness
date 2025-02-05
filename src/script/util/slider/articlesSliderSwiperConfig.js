import Swiper from "swiper/bundle";
import "swiper/css/bundle";

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".cards-swiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2500,
    },
    speed: 1000,

    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1280:{
        slidesPerView: 4,
      }
    },
  });
});
