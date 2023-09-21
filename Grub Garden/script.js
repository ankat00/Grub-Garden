// Nav Overlay
const menuOpenEl = document.querySelector(".menu-open");
const menuCloseEl = document.querySelector(".menu-close");
const mainNavOverlayEl = document.querySelector(".main-nav-overlay");
const headerEl = document.querySelector(".header");

menuOpenEl.addEventListener("click", function () {
  mainNavOverlayEl.classList.add("nav-open");
  menuCloseEl.classList.toggle("btn-switch");
  menuOpenEl.classList.toggle("btn-switch");
});

menuCloseEl.addEventListener("click", function () {
  mainNavOverlayEl.classList.remove("nav-open");
  menuCloseEl.classList.toggle("btn-switch");
  menuOpenEl.classList.toggle("btn-switch");
});

// //////////////////////////////////////// //
// Year Count
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// //////////////////////////////////////// //
// Sticky Newsletter CTA
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-40px",
  }
);
obs.observe(headerEl);
