const t_on = document.getElementById("t1");
const t_off = document.getElementById("t2");
const body = document.getElementById("body");
const burger = document.querySelector(".burger");
const head = document.querySelector("#head");
const ul = document.querySelector("#ul");
const theme = document.querySelector("#theme");
let light = localStorage.getItem("theme");

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

  //   body.classList.remove("dark");
});

t_off.addEventListener("click", () => {
  localStorage.setItem("theme", "dark");
  t_off.classList.add("hidden");
  t_on.classList.remove("hidden");
  body.classList = localStorage.getItem("theme");

  //   body.classList.add("dark");
});

function toggleNav() {
  head.classList.toggle("resp-head");
  ul.classList.toggle("resp-ul");
  theme.classList.toggle("resp-theme");
}
