let Main = document.querySelector(".main");
let Result = document.querySelector(".result");
let Button = document.querySelectorAll(".button");
let DarkMode = document.querySelector("#dark-mode-icon");
let body = document.body;
DarkMode.addEventListener("click", () => {
  Main.classList.toggle("main-dark");
  Result.classList.toggle("result-dark");
  body.classList.toggle("dark-mode");
  Button.forEach((b) => b.classList.toggle("Button-dark"));
});

export default DarkMode;
