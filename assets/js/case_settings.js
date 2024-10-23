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
close button
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
menu button
--------------------*/
