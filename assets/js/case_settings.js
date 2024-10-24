/*--------------------
set magnifier
--------------------*/
const mapContainer = document.querySelector(".map_image");
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

    if (close.classList.contains("close")) {
      menu.style.top = "75%";
    } else {
      menu.style.top = "53%";
    }
  });
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
});
