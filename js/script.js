const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

const headerEl = document.querySelector(".header");
const hamburgerEl = document.querySelector(".btn-mobile-nav");
hamburgerEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// Sticky Navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// Fixing flex gap in Safari
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
