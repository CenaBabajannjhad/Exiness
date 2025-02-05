// navbar handler
import handlerMenu from "./script/util/hamburger-menu/hamburgerMenu.js";

document.addEventListener("DOMContentLoaded", () => {
  // navbar config
  const menuButton = document.querySelector("#menu__button");
  const closeMenuButton = document.querySelector("#close__button");
  menuButton.addEventListener("click", handlerMenu);
  closeMenuButton.addEventListener("click", handlerMenu);

});
