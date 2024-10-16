document.addEventListener("DOMContentLoaded", () => {
  const windowWidth = window.innerWidth;
  const space = Math.max((windowWidth - 1250) / 2, 0);

  const consortiumSwiper = new Swiper(".consortium_swiper", {
    centeredSlides: false,
    slidesPerView: 1,
    spaceBetween: space,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        const swiperWrapper = document.querySelector(
          ".consortium_swiper .swiper-wrapper"
        );
        if (swiperWrapper) {
          swiperWrapper.style.transform = "translate3d(0, 0, 0)";
        }
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const firstSlide = document.querySelector(
    ".consortium_swiper .swiper-slide:first-child"
  );

  if (firstSlide) {
    firstSlide.style.marginLeft = "0px";
  }
});

consortiumSwiper.on("slideChange", function () {
  const firstSlide = document.querySelector(
    ".consortium_swiper .swiper-slide:first-child"
  );

  if (firstSlide) {
    firstSlide.style.marginLeft = "0px";
  }
});

const swiper = new Swiper(".swiper", {
  centeredSlides: false,
  slidesPerView: 2.7,
  spaceBetween: 44,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 30,
      centeredSlides: true,
    },
  },
});
