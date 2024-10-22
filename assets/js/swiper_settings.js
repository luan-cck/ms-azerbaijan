/*--------------------
consortium_swiper
--------------------*/

document.addEventListener("DOMContentLoaded", () => {
  const consortiumSwiperElement = document.querySelector(".consortium_swiper");
  if (consortiumSwiperElement) {
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

    consortiumSwiper.on("slideChange", function () {
      const firstSlide = document.querySelector(
        ".consortium_swiper .swiper-slide:first-child"
      );
      if (firstSlide) {
        firstSlide.style.marginLeft = "0px";
      }
    });

    // 初期スライドのスタイル設定
    const firstSlide = document.querySelector(
      ".consortium_swiper .swiper-slide:first-child"
    );
    if (firstSlide) {
      firstSlide.style.marginLeft = "0px";
    }
  }

  /*--------------------
case_select_swiper
--------------------*/

  const caseSelectSwiperElement = document.querySelector(".case_select_swiper");
  if (caseSelectSwiperElement) {
    const caseSelectSwiper = new Swiper(".case_select_swiper", {
      centeredSlides: false,
      slidesPerView: 3,
      breakpoints: {
        0: {
          slidesPerView: 1.5,
          spaceBetween: 30,
        },
      },
    });
  }
});
