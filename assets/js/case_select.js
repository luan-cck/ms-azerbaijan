/*--------------------
  set scheme link
--------------------*/

document.addEventListener("DOMContentLoaded", () => {
  const finance1Link = document.getElementById("scheme_link1");
  const finance2Link = document.getElementById("scheme_link2");
  const modal = document.querySelector(".modal");

  finance1Link.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "./case_1.html?openModal=1";
  });

  finance2Link.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "./case_1.html?openModal=2";
  });
});
