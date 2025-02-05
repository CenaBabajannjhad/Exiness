import Swiper from "swiper/bundle";
import "swiper/css/bundle";

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".logos-swiper", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    speed: 2500,
    breakpoints: {
      768: {
        slidesPerView: 6,
      },
      1280: {
        slidesPerView: 8,
      },
    },
  });
});
