let menu = document.querySelector(".hamburger");
// let navigation_for_mobile = document.querySelector(".navigation_for_mobile");
menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  //   navigation_for_mobile.classList.toggle("active");
});
let scrollElements = document.querySelectorAll(".scrollreveal");
scrollElements.forEach((element) => {
  ScrollReveal({ reset: false, delay: 400 }).reveal(element);
});
