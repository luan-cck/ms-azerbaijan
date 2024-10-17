/*--------------------
aspect_setting
--------------------*/

function setAspectRatio() {
  const container = document.getElementById("aspectContainer");
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const aspectRatio = 16 / 9;

  if (windowWidth / windowHeight > aspectRatio) {
    container.style.width = `${windowHeight * aspectRatio}px`;
    container.style.height = `${windowHeight}px`;
  } else {
    container.style.width = `${windowWidth}px`;
    container.style.height = `${windowWidth / aspectRatio}px`;
  }
}

window.addEventListener("resize", setAspectRatio);
document.addEventListener("DOMContentLoaded", setAspectRatio);

/*--------------------
top_page_right_adjusting
--------------------*/

document.addEventListener("DOMContentLoaded", () => {
  function setHeight() {
    const empty = document.querySelector(".empty");
    const linkContainer = document.querySelector(".description_link_container");

    const containerHeight = linkContainer.offsetHeight;

    empty.style.height = `${containerHeight}px`;
  }

  setHeight();
});

/*--------------------
Set_organization_container_margintop
--------------------*/
function setMarginTop() {
  const organization = document.querySelector(".organization_container");
  const slide = document.querySelector(".organization_slide");

  // 332 is the sum of the height of the organization_container and the height of the section_title (including margin).
  // Since this height is fixed, a variable is not used.
  const organizationMt = (slide.offsetHeight - 332) / 2;

  organization.style.marginTop = `${organizationMt}px`;
}

document.addEventListener("DOMContentLoaded", setMarginTop);
window.addEventListener("resize", setMarginTop);

/*--------------------
set magnifier
--------------------*/
const mapContainer = document.querySelector(".map_image");
const magnifierIcons = document.querySelectorAll(".magnifier_icon");

function setIconPositions() {
  const contiainerWidth = mapContainer.offsetWidth;
  const containerHeight = mapContainer.offsetHeight;

  magnifierIcons.forEach((icon) => {
    const relativeX = parseFloat(icon.getAttribute("data-x"));
    const relativeY = parseFloat(icon.getAttribute("data-y"));

    icon.style.left = `${relativeX * contiainerWidth}px`;
    icon.style.top = `${relativeY * containerHeight}px`;
  });
}

window.addEventListener("resize", setIconPositions);
document.addEventListener("DOMContentLoaded", setIconPositions);

/*--------------------
switch language
--------------------*/

document
  .getElementById("language-form")
  .addEventListener("change", function (event) {
    if (event.target.value === "japanese") {
      window.location.href = "./index.html";
    } else if (event.target.value === "english") {
      window.location.href = "/path-to-english";
    }
  });
