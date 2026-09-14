const rowElem = document.querySelector(".row");
const mobileMenu = document.querySelector("#mobile__menu");
const introductionElem = document.querySelector("#introduction");
const closeMobileMenu = document.querySelector(".close-mobile-menu");
const dropdownElem = document.querySelector(".mobile__menu__drop");
const menuDropdownElem = document.querySelector(".mobile__menu__dropdown");

rowElem.addEventListener("click", () => {
  mobileMenu.style.right = "0";
  introductionElem.style.filter = "blur(3px)";
});

closeMobileMenu.addEventListener("click", () => {
  mobileMenu.style.right = "-70%";
  introductionElem.style.filter = "none";
});

// dropdownElem.addEventListener("click", () => {
//   menuDropdownElem.style.opacity = "1";
//   menuDropdownElem.style.visibility = "visible";
// });
