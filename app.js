const last_name = document.querySelector(".last-name");
const first_name = document.querySelector(".first-name");
const links = document.querySelectorAll("a");
const cursorFollower = document.querySelector(".cursor-follower");
const loaders = document.querySelectorAll(".loader div");
document.addEventListener("mousemove", (e) => {
  cursorFollower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

document.addEventListener("touchstart", (e) => {
  cursorFollower.style.transition = "500ms ease";

  cursorFollower.style.transform = "scale(1)";

  cursorFollower.style.transform = `translate(${e.touches[0].clientX}px, ${e.touches[0].clientY}px)`;
});
document.addEventListener("touchend", () => {
  setTimeout(() => {
    cursorFollower.style.transition = "500ms ease";

    cursorFollower.style.transform = "scale(0)";
  }, 500);
});
links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursorFollower.style.width = "30px";
    cursorFollower.style.height = "30px";
  });

  link.addEventListener("mouseleave", () => {
    cursorFollower.style.width = "20px";
    cursorFollower.style.height = "20px";
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
        "I build websites",
        "I build android and ios apps",
        "I convert websites into apps",
        "I create digital educational content ",
      ],
      typeSpeed: 70,
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
  // scroll reveal implementation
  let scrollElements = document.querySelectorAll(".scrollreveal");
  scrollElements.forEach((element) => {
    ScrollReveal({ reset: false, delay: 400 }).reveal(element);
  });
  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transform = "translateY(0px)translateX(0)";
          entry.target.style.opacity = 1;
          if (entry.target.classList.contains("")) {
            console.log(entry.target);
          }
        } else {
          entry.target.style.transform = "translateY(-50px)translateX(-100px)";
          entry.target.style.opacity = 0;
        }
      });
    },
    {
      root: null,
      rootMargin: "80px 0px",
      threshold: 0.4,
    }
  );
  // observing my name element.
  const observerTargets = [
    "first_image",
    "second_image",
    "third_image",
    "fourth_image",
    "fifth_image",
  ];
  for (let index = 0; index < observerTargets.length; index++) {
    let element = observerTargets[index];
    // observer.observe(document.querySelector(`.${element}`))
    observer.observe(document.querySelector("." + element));
  }
});
