document.addEventListener("DOMContentLoaded", () => {
  /*--------------------
  case_select_swiper
  --------------------*/
  const caseSelectSwiperElement = document.querySelector(".case_select_swiper");
  let caseSelectSwiper;
  if (caseSelectSwiperElement) {
    caseSelectSwiper = new Swiper(".case_select_swiper", {
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

  /*--------------------
  case_select_modal_swiper(reference)
  --------------------*/
  let referenceSwiper;
  const referenceSwiperElement = document.querySelector(".reference_swiper");

  function initializeReferenceSwiper() {
    if (!referenceSwiper && referenceSwiperElement) {
      referenceSwiper = new Swiper(".reference_swiper", {
        slidesPerView: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          slideChange: function () {
            updateCaseNumber(referenceSwiper.activeIndex);
            updateActiveNumberHeading(referenceSwiper.activeIndex);
          },
        },
      });
    }
  }

  function updateCaseNumber(activeIndex) {
    const caseNumberIndex = Math.floor(activeIndex / 3) + 1;
    const caseNumberElements = document.querySelectorAll(".reference_title");
    const numberHeadings = document.querySelectorAll(".number_heading");
    const lastHeading = numberHeadings[numberHeadings.length - 1];

    caseNumberElements.forEach((element) => {
      if (caseNumberIndex === 3) {
        element.textContent = `Reference case ${caseNumberIndex}`;
        if (lastHeading) {
          lastHeading.style.display = "none";
        }
      } else if (caseNumberIndex < 3) {
        element.textContent = `Reference case ${caseNumberIndex}`;
        if (lastHeading) {
          lastHeading.style.display = "";
        }
      } else {
        element.textContent = "Reference case 3";
      }
    });
  }

  function updateActiveNumberHeading(activeIndex) {
    const numberHeadings = document.querySelectorAll(".number_heading");

    numberHeadings.forEach((heading, index) => {
      if (index === activeIndex % 3) {
        heading.classList.add("active");
      } else {
        heading.classList.remove("active");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initializeReferenceSwiper();
  });

  /*--------------------
  set scheme link
--------------------*/

  const finance1Link = document.getElementById("scheme_link1");
  const finance2Link = document.getElementById("scheme_link2");

  if (finance1Link) {
    finance1Link.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "./case_1.html?openModal=1";
    });
  }

  if (finance2Link) {
    finance2Link.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "./case_1.html?openModal=2";
    });
  }

  /*--------------------
  zoom modal image
  --------------------*/

  const images = document.querySelectorAll(".clickable_image");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      openModal(image.src);
    });
  });

  function openModal(imgSrc) {
    const modal = document.getElementById("image_modal");

    let modalImageContainer = modal.querySelector(".image_modal_container");
    if (!modalImageContainer) {
      modalImageContainer = document.createElement("div");
      modalImageContainer.classList.add("image_modal_container");
      modal.appendChild(modalImageContainer);
    }

    modalImageContainer.innerHTML = "";

    let modalCloseButton = modal.querySelector(".image_modal_close");
    if (!modalCloseButton) {
      modalCloseButton = document.createElement("button");
      modalCloseButton.classList.add("image_modal_close", "flex");
      const closeIcon = document.createElement("img");
      closeIcon.src = "./assets/img/close-outline.svg";
      closeIcon.alt = "close";
      modalCloseButton.appendChild(closeIcon);
    }
    modalImageContainer.appendChild(modalCloseButton);

    const modalImage = document.createElement("img");
    modalImage.src = imgSrc;
    modalImage.classList.add("larger_image");
    modalImageContainer.appendChild(modalImage);

    modal.classList.add("active");

    modalCloseButton.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }

  /*--------------------
  open reference modal
  --------------------*/
  const referenceButtons = document.querySelectorAll(".reference_button");
  const referenceModal = document.querySelector(".reference");

  referenceButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      initializeReferenceSwiper();

      if (referenceModal) {
        referenceModal.classList.add("active");

        let slideIndex;
        if (index === 0) {
          slideIndex = 0;
        } else if (index === 1) {
          slideIndex = 3;
        } else if (index === 2) {
          slideIndex = 6;
        }

        if (referenceSwiper && referenceSwiper.slideTo) {
          referenceSwiper.slideTo(slideIndex);
        } else {
          console.error("Swiperが正しく初期化されていません");
        }
      }
    });
  });
  /*--------------------
  modal close button
  --------------------*/
  const closeButtons = document.querySelectorAll(".modal_close");

  closeButtons.forEach((close) => {
    close.addEventListener("click", () => {
      const referenceModal = close.closest(".reference");
      if (referenceModal) {
        referenceModal.classList.remove("active");
      }
    });
  });
});
