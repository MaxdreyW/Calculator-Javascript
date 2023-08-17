const Hamburger = document.querySelector(".hamburger");
const Option = document.querySelector(".option");

Hamburger.addEventListener("click", () => {
  Hamburger.classList.toggle("active");
  Option.classList.toggle("active");
});

export default Hamburger;
