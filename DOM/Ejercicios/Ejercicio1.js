import MenuHamburguesa from "./MenuHamburguesa.js";
import { RelojDigital, Alarma } from "./Reloj.js";
import { Teclado } from "./Teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) =>{
  MenuHamburguesa(".panel-btn", ".panel", ".menu a");
  RelojDigital("#reloj", "#activar-reloj", "#desactivar-reloj");
});

d.addEventListener("keydown", (e) =>{
  Teclado(e);
});