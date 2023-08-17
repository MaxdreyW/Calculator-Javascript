let Main = document.querySelector(".main");
let Result = document.querySelector(".result");
let Button = document.querySelectorAll(".button");
let DarkMode = document.querySelector("#dark-mode-icon");
let burger = document.querySelector(".hamburger");
let bar = document.querySelector(".bar");
let body = document.body;
let Option = document.querySelector(".option");
let link = document.querySelectorAll(".link");
DarkMode.addEventListener("click", () => {
  Main.classList.toggle("main-dark");
  Result.classList.toggle("result-dark");
  body.classList.toggle("dark-mode");
  burger.classList.toggle("dark-mode");
  bar.classList.toggle("dark-mode");
  Option.classList.toggle("dark-mode");
  link.forEach((a) => a.classList.toggle("darkmode"));
  Button.forEach((b) => b.classList.toggle("Button-dark"));
});

export default DarkMode;
