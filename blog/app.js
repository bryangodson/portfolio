let hamburger = document.querySelector(".hamburger");
// let navigation_for_mobile = document.querySelector(".navigation_for_mobile");

const menu_list = document.querySelector(".content_menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu_list.classList.toggle("toggle_menu_list_content");
  window.scrollBy(0, -scrollY);
});
document.addEventListener("scroll", () => {
  if (scrollY > 550 && hamburger.classList.contains("active")) {
    hamburger.classList.toggle("active");
    menu_list.classList.toggle("toggle_menu_list_content");
  }
});
// let scrollElements = document.querySelectorAll(".scrollreveal");
// scrollElements.forEach((element) => {
//   ScrollReveal({ reset: false, delay: 400 }).reveal(element);
// });
