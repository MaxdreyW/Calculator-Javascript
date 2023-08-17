import DarkMode from "./dark-mode.js";
import Hamburger from "./hamburger.js";
const result = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
const special = ["%", "/", "*", "-", "+", "="];

console.log(buttons);

let output = "";

const calculate = (btnValue) => {
  if (btnValue === "=" && btnValue !== "") {
    output = eval(
      output.replace("%", "/100").replace("x", "*").replace("÷", "/")
    );
  } else if (btnValue === "ac") {
    output = "";
  } else if (btnValue === "del") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && special.includes(btnValue)) return;
    if (btnValue === "*") {
      output += "x";
    } else if (btnValue === "/") {
      output += "÷";
    } else {
      output += btnValue;
    }
  }
  result.value = output;
};
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
