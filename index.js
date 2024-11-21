// Select elements
const head1 = document.getElementById("head1");
const head2 = document.getElementById("head2");
const head3 = document.getElementById("head3");

// Simple eventlistener to all elements
head2.addEventListener("click", function () {
  // remove all inactive head names
  head1.classList.remove("selected");
  head3.classList.remove("selected");
  // add active class the head name
  head2.classList.add("selected");
});

head1.addEventListener("click", function () {
  head2.classList.remove("selected");
  head3.classList.remove("selected");
  head1.classList.add("selected");
});

head3.addEventListener("click", function () {
  head1.classList.remove("selected");
  head2.classList.remove("selected");
  head3.classList.add("selected");
});

const menu = document.getElementById("menu");
const close = document.getElementById("close");
const mobileNav = document.getElementById("mobile-nav");
const header = document.getElementById("header");
const main = document.getElementById("main");
const footer = document.getElementById("footer");
const head4 = document.getElementById("head4");
const head5 = document.getElementById("head5");
const head6 = document.getElementById("head6");

menu.addEventListener("click", function () {
  mobileNav.style.top = "-20px";
  setTimeout(() => {
    header.classList.add("opacity");
    main.classList.add("opacity");
    footer.classList.add("opacity");
  }, 150);
});

close.addEventListener("click", function () {
  mobileNav.style.top = "-600px";
  setTimeout(() => {
    header.classList.remove("opacity");
    main.classList.remove("opacity");
    footer.classList.remove("opacity");
  }, 150);
});

head4.addEventListener("click", function () {
  mobileNav.style.top = "-600px";
  setTimeout(() => {
    header.classList.remove("opacity");
    main.classList.remove("opacity");
    footer.classList.remove("opacity");
  }, 150);
});
head5.addEventListener("click", function () {
  mobileNav.style.top = "-600px";
  setTimeout(() => {
    header.classList.remove("opacity");
    main.classList.remove("opacity");
    footer.classList.remove("opacity");
  }, 150);
});
head6.addEventListener("click", function () {
  mobileNav.style.top = "-600px";
  setTimeout(() => {
    header.classList.remove("opacity");
    main.classList.remove("opacity");
    footer.classList.remove("opacity");
  }, 150);
});

const up = document.getElementById("up");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    up.style.opacity = "1";
  } else {
    up.style.opacity = "0";
  }
});

up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
