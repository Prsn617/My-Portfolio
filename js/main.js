const themeToggle = document.querySelector(".theme-toggle");
const themeBall = document.querySelector(".theme-toggle div");
const body = document.getElementById("body");
const burger = document.querySelector(".burger");
const navbar = document.querySelector(".nav-bar");
const navLists = document.querySelectorAll(".nav-list");
const tagger = document.querySelectorAll(".tagger");

let light = localStorage.getItem("theme");
const vw = window.visualViewport.width;

tagger.forEach((tag) => {
  if (vw < 1120) {
    tag.classList.remove("tags");
  }
});

body.classList = light;
if (light === "dark") {
  themeToggle.style.paddingLeft = "30px";
}
themeToggle.addEventListener("click", () => {
  if (localStorage.getItem("theme") === "dark") {
    localStorage.setItem("theme", "");
    themeToggle.style.paddingLeft = "5px";
  } else {
    localStorage.setItem("theme", "dark");
    themeToggle.style.paddingLeft = "30px";
  }
  body.classList = localStorage.getItem("theme");
});

navLists.forEach((lists) => {
  lists.addEventListener("click", () => {
    toggleNavBar();
  });
});

burger.addEventListener("click", () => {
  toggleNavBar();
});

toggleNavBar = () => {
  burger.classList.toggle("active");
  navbar.classList.toggle("active");
};
