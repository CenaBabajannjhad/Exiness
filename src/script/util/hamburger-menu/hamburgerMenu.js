const navbar = document.querySelector("#navbar");
const overLayer = document.createElement("div");
let isOpen = false;

overLayer.addEventListener("click", handlerMenu);

function handlerMenu() {
  isOpen = !isOpen;
  overLayer.className =
    "fixed inset-0 w-screen h-screen backdrop-blur-[5px] z-40";
  overLayer.id = "overLayer";

  if (isOpen) {
    document.body.appendChild(overLayer);
    document.body.classList.add("overflow-hidden");
    navbar.classList.remove("translate-x-[120%]");
  } else {
    document.getElementById("overLayer").remove();
    document.body.classList.remove("overflow-hidden");
    navbar.classList.add("translate-x-[120%]");
  }
}

export default handlerMenu;
