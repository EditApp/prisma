import DynamicParallax from "./parallax";
import "./styles/main.scss";

const paralaxing = new DynamicParallax(".parallax1");
const paralaxingLogo = new DynamicParallax(".parallax2");

window.addEventListener("scroll", function() {
  paralaxing.parallax(0.8, window.scrollY);
  paralaxingLogo.parallax(0.4, window.scrollY);
});

const menu = document.querySelector(".menu-toggle");
const menuToggle = document.querySelector(".burger");

menuToggle.onclick = function(e) {
  e.preventDefault();
  menu.classList.toggle("open");
};
