import MenuHamburguesa from "./MenuHamburguesa.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) =>{
  MenuHamburguesa(".panel-btn", ".panel", ".menu a");
});
