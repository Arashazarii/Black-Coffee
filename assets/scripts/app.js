const rowElem = document.querySelector(".row");
const mobileMenu = document.querySelector("#mobile__menu");
const backdropElem = document.querySelector(".backdrop");
const closeMobileMenu = document.querySelector(".close-mobile-menu");
const dropdownElem = document.querySelector(".mobile__menu__drop");
const menuDropdownElem = document.querySelector(".mobile__menu__dropdown");
const introductionContent = document.querySelector(".introduction__content");

rowElem.addEventListener("click", () => {
  mobileMenu.style.right = "0";
  backdropElem.style.filter = "blur(3px)";
  introductionContent.style.filter = "blur(2px)";
  backdropElem.style.zIndex = "3";
});

closeMobileMenu.addEventListener("click", () => {
  mobileMenu.style.right = "-70%";
  backdropElem.style.filter = "none";
  introductionContent.style.filter = "none";
  backdropElem.style.zIndex = "-3";
});

backdropElem.addEventListener("click", () => {
  mobileMenu.style.right = "-70%";
  backdropElem.style.filter = "none";
  introductionContent.style.filter = "none";
  backdropElem.style.zIndex = "-3";
});
