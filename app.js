const last_name = document.querySelector(".last-name");
const first_name = document.querySelector(".first-name");
const links = document.querySelectorAll("a");
const cursorFollower = document.querySelector(".cursor-follower");
const loaders = document.querySelectorAll(".loader div");
document.addEventListener("mousemove", (e) => {
  cursorFollower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

document.addEventListener("touchmove", (e) => {
  cursorFollower.style.transform = `translate(${e.touches[0].clientX}px, ${e.touches[0].clientY}px)`;
});

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursorFollower.style.width = "50px"; // Change the width to your desired size
    cursorFollower.style.height = "50px"; // Change the height to your desired size
  });

  link.addEventListener("mouseleave", () => {
    cursorFollower.style.width = "20px"; // Return to the initial width
    cursorFollower.style.height = "20px"; // Return to the initial height
  });
});
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loaders.forEach((loader) => {
      loader.classList.add("loaderGone");
    });
  }, 100);
  setTimeout(() => {
    var typed = new Typed("#typed", {
      strings: [
        "I build android and ios apps",
        "I convert websites into apps",
        "I create digital educational content ",
      ],
      typeSpeed: 10,
      loop: true,
      backSpeed: 5,
      backDelay: 2000,
    });
  }, 3000);
  let menu = document.querySelector(".hamburger");
  let navigation_for_mobile = document.querySelector(".navigation_for_mobile");
  menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navigation_for_mobile.classList.toggle("active");
  });

  let toTopButton = document.querySelector(".scroll-to-top-button");
  toTopButton.addEventListener("click", () => {
    window.scrollTo(0, -scrollY);
  });
  let scrollElements = document.querySelectorAll(".scrollreveal");
  scrollElements.forEach((element) => {
    ScrollReveal({ reset: true, delay: 400 }).reveal(element);
  });
});
