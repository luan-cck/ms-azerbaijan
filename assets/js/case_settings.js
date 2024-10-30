/*--------------------
store image data(zoomed image when map is clicked)
--------------------*/
//These data are used for the "Map Zooming".
const data = [
  {
    id: "case1_map1",
    src: "./assets/img/no_image.png",
  },
  {
    id: "case1_map2",
    src: "./assets/img/no_image.png",
  },
  {
    id: "case1_map3",
    src: "./assets/img/no_image.png",
  },
];

/*--------------------
set magnifier
--------------------*/
const mapContainer = document.querySelector(".map_container");
const magnifierIcons = document.querySelectorAll(".magnifier_icon");

function setIconPositions() {
  const containerWidth = mapContainer.offsetWidth;
  const containerHeight = mapContainer.offsetHeight;

  magnifierIcons.forEach((icon) => {
    const relativeX = parseFloat(icon.getAttribute("data-x"));
    const relativeY = parseFloat(icon.getAttribute("data-y"));

    icon.style.left = `${relativeX * containerWidth}px`;
    icon.style.top = `${relativeY * containerHeight}px`;
  });
}

function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

window.addEventListener("resize", debounce(setIconPositions, 200));
window.addEventListener("load", setIconPositions);

/*--------------------
case top button
--------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const buttons = {
    offButton: document.getElementById("button3"),
    onButton: document.getElementById("button4"),
  };

  function toggleButton() {
    buttons.offButton.classList.toggle("active");
    buttons.onButton.classList.toggle("active");
  }

  buttons.offButton.addEventListener("click", toggleButton);
  buttons.onButton.addEventListener("click", toggleButton);
});

/*--------------------
menu close button
--------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const close = document.getElementById("menu_close");
  const menuContainer = document.querySelector(".menu_container");

  close.addEventListener("click", () => {
    menuContainer.classList.toggle("active");
    close.classList.toggle("close");

    if (screen.width > 1400) {
      if (close.classList.contains("close")) {
        menu.style.top = "75%";
      } else {
        menu.style.top = "53%";
      }
    } else if (screen.width <= 1400) {
      if (close.classList.contains("close")) {
        menu.style.top = "70%";
      } else {
        menu.style.top = "40%";
      }
    }
  });
});

/*--------------------
zoom modal image
--------------------*/
document.addEventListener("DOMContentLoaded", () => {
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
});

/*--------------------
modal close button
--------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal");
  const closeButtons = document.querySelectorAll(".modal_close");

  closeButtons.forEach((close) => {
    close.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  });
});

/*--------------------
menu button
--------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const button1 = document.getElementById("menu_button1");
  const button2 = document.getElementById("menu_button2");
  const button3 = document.getElementById("menu_button3");
  const modal = document.querySelector(".modal");

  button1.addEventListener("click", () => {
    modal.classList.add("active");
    if (window.modalSwiper) {
      window.modalSwiper.slideTo(0);
    }
  });

  button2.addEventListener("click", () => {
    modal.classList.add("active");
    if (window.modalSwiper) {
      window.modalSwiper.slideTo(1);
    }
  });

  button3.addEventListener("click", () => {
    modal.classList.add("active");
    if (window.modalSwiper) {
      window.modalSwiper.slideTo(2);
    }
  });
});

/*--------------------
Map Zooming
--------------------*/

document.addEventListener("DOMContentLoaded", () => {
  data.forEach((item) => {
    const magnifierButton = document.querySelector(`[data-id="${item.id}"]`);
    if (magnifierButton) {
      magnifierButton.addEventListener("click", () => {
        openModal(item.src);
      });
    }
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
});

/*--------------------
  click title to switch slide
--------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".section_title");

  titles.forEach((title) => {
    title.addEventListener("click", () => {
      if (window.modalSwiper) {
        const slideIndex = title.dataset.slide;

        if (slideIndex != undefined) {
          window.modalSwiper.slideTo(Number(slideIndex));
        }
      }
    });
  });
});
