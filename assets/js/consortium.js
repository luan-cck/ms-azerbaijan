/*--------------------
  click title to switch slide
--------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".section_title");

  titles.forEach((title) => {
    title.addEventListener("click", () => {
      if (window.consortiumSwiper) {
        const slideIndex = title.dataset.slide;

        if (slideIndex != undefined) {
          window.consortiumSwiper.slideTo(Number(slideIndex));
        }
      }
    });
  });
});
