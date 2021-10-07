const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  close = document.querySelector(".menu__close"),
  overlay = document.querySelector(".menu__overlay"),
  counters = document.querySelectorAll(".skills__showcase-counter"),
  counterLines = document.querySelectorAll(".skills__showcase-item-percentage"),
  menuLinks = document.querySelectorAll(".menu__link");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("active");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => menu.classList.remove("active"));
});

// Percentages for skills section
counters.forEach((counter, i) => {
  counterLines[i].style.width = counter.innerHTML;
});

// Aside bar color change animation
const sidePanel = document.querySelector(".side-panel");
const firstSection = document.querySelector(".hero");
const secondSection = document.querySelector(".about");
const thirdSection = document.querySelector(".skills");
const lastSection = document.querySelector(".contacts");

window.addEventListener("scroll", () => {
  if (
    window.scrollY >= firstSection.clientHeight - 340 &&
    window.scrollY <=
      firstSection.clientHeight + secondSection.clientHeight - 340
  ) {
    sidePanel.classList.add("scroll");
  } else if (
    window.scrollY >=
      firstSection.clientHeight +
        secondSection.clientHeight +
        thirdSection.clientHeight -
        340 &&
    window.scrollY <=
      firstSection.clientHeight +
        secondSection.clientHeight +
        thirdSection.clientHeight +
        lastSection.clientHeight -
        340
  ) {
    sidePanel.classList.add("scroll");
  } else {
    sidePanel.classList.remove("scroll");
  }
});

// Smooth scroll to anchors
document.querySelectorAll("a.menu__link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
document.querySelectorAll("a.hero__link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// AOS Init
AOS.init({
  delay: 200,
  duration: 1200,
  once: false,
});
function toggleNavbar(collapseID) {
  document.getElementById(collapseID).classList.toggle("hidden");
  document.getElementById(collapseID).classList.toggle("block");
}
