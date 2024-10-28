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
      loop: false,
      centeredSlides: false,
      slidesPerView: 3,
      breakpoints: {
        0: {
          slidesPerView: 1.5,
          spaceBetween: 30,
        },
      },
      on: {
        slideChange: function () {
          const totalSlides = caseSelectSwiper.slides.length;
          const lastSlideIndex = totalSlides - 1;

          // Adjust the stopping position of the last slide based on the current slidesPerView.
          let stopIndex;

          if (window.innerWidth < 1025) {
            stopIndex = lastSlideIndex;
          } else if (window.innerWidth < 1400) {
            stopIndex = lastSlideIndex - 1;
          } else {
            stopIndex = lastSlideIndex - 2;
          }

          if (caseSelectSwiper.activeIndex >= stopIndex) {
            caseSelectSwiper.allowSlideNext = false;
          } else {
            caseSelectSwiper.allowSlideNext = true;
          }
        },
      },
    });
  }
});

/*--------------------
  case_1_swiper
  --------------------*/

document.addEventListener("DOMContentLoaded", () => {
  const modalSwiperElement = document.querySelector(".modal_swiper");
  if (modalSwiperElement) {
    const windowWidth = window.innerWidth;
    const space = Math.max((windowWidth - 1250) / 2, 0);

    // Globalize for calling in case_settings.js
    window.modalSwiper = new Swiper(".modal_swiper", {
      centeredSlides: false,
      slidesPerView: 1,
      spaceBetween: space,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        slideChange: updateFirstSlideMargin,
        init: updateFirstSlideMargin,
      },
    });

    function updateFirstSlideMargin() {
      const firstSlide = document.querySelector(
        ".modal_swiper .swiper-slide:first-child"
      );
      if (firstSlide) {
        firstSlide.style.marginLeft = "0px";
      }
    }
  }

  // URL setting for case_select.js
  const urlParams = new URLSearchParams(window.location.search);
  const openModal = urlParams.get("openModal");

  if (openModal) {
    const modal = document.querySelector(".modal");
    if (modal) {
      modal.classList.add("active");

      if (window.modalSwiper) {
        window.modalSwiper.slideTo(Number(openModal));
      }
    }
  }
});
