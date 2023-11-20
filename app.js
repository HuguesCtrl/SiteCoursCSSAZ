const logoMenu = document.querySelector(".logo-menu-img");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");

logoMenu.addEventListener("click", () => {
  if (ul.className === "") {
    ul.className += "responsive";
    logoMenu.style.width = "30px";
    logoMenu.style.top = "20px";
    logoMenu.style.right = "30px";
    logoMenu.src = "./ressources/close.png";
  } else {
    ul.className = "";
    logoMenu.style.width = "30px";
    logoMenu.style.top = "20px";
    logoMenu.style.right = "30px";
    logoMenu.src = "./ressources/menu-icon.png";
  }
});

li.forEach((item) => {
  item.addEventListener("click", () => {
    ul.className = "";
    logoMenu.src = "ressources/menu-icon.png";
  });
});
