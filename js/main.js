const t_on = document.getElementById("t1");
const t_off = document.getElementById("t2");
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
  t_off.classList.add("hidden");
  t_on.classList.remove("hidden");
}

t_on.addEventListener("click", () => {
  localStorage.setItem("theme", "");
  t_on.classList.add("hidden");
  t_off.classList.remove("hidden");
  body.classList = localStorage.getItem("theme");
  toggleNavBar();
});

t_off.addEventListener("click", () => {
  localStorage.setItem("theme", "dark");
  t_off.classList.add("hidden");
  t_on.classList.remove("hidden");
  body.classList = localStorage.getItem("theme");
  toggleNavBar();
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
