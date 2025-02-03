const navbar = document.querySelector("#navbar");
const overLayer = document.createElement("div");
let isOpen = false;

overLayer.addEventListener("click", handlerMenu);

function handlerMenu() {
  isOpen = !isOpen;
  overLayer.className = "fixed inset-0 bg-black/70 z-0";
  overLayer.id = "overLayer";


  if(isOpen){
    document.body.appendChild(overLayer);
    document.body.classList.add("overflow-hidden");
    navbar.classList.remove("translate-x-[100%]");
  }else{
    document.getElementById("overLayer").remove();
    document.body.classList.remove("overflow-hidden");
    navbar.classList.add("translate-x-[100%]");
  }
}

export default handlerMenu;