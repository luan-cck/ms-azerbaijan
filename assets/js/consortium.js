/*--------------------
  consortium_swiper
--------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const consortiumSwiperElement = document.querySelector(".consortium_swiper");

  if (consortiumSwiperElement) {
    const windowWidth = window.innerWidth;
    const space = Math.max((windowWidth - 1250) / 2, 0);

    window.consortiumSwiper = new Swiper(".consortium_swiper", {
      centeredSlides: false,
      slidesPerView: 1,
      spaceBetween: space,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        init: function (swiper) {
          const swiperWrapper = document.querySelector(
            ".consortium_swiper .swiper-wrapper"
          );
          if (swiperWrapper) {
            swiperWrapper.style.transform = "translate3d(0, 0, 0)";
          }

          if (swiper && swiper.activeIndex !== undefined) {
            updateActiveTitle(swiper.activeIndex);
          }
        },
        slideChange: function (swiper) {
          if (swiper && swiper.activeIndex !== undefined) {
            updateActiveTitle(swiper.activeIndex);
          }
        },
      },
    });

    window.consortiumSwiper.on("slideChange", function () {
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
});

/*--------------------
  click title to switch slide
--------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".section_title");

  titles.forEach((title) => {
    title.addEventListener("click", () => {
      if (window.consortiumSwiper) {
        const slideIndex = title.dataset.slide;

        if (slideIndex !== undefined) {
          window.consortiumSwiper.slideTo(Number(slideIndex));
        }
      }
    });
  });
});

/*--------------------
  switch active title
--------------------*/
function updateActiveTitle(activeIndex) {
  const titles = document.querySelectorAll(".section_title");
  titles.forEach((title, index) => {
    if (index === activeIndex) {
      title.classList.add("active");
    } else {
      title.classList.remove("active");
    }
  });
}
