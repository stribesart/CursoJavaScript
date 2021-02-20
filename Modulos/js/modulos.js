/** Esta es la funcion main del Proyecto Modulos */
import saludar, { PI } from "./constantes.js";
import { aritmetica } from "./aritmetica.js";

console.log("Archivo modulos.js")
/**modulo donde se muestra la consola */
console.log(PI);

console.log(aritmetica.sumar(3,4));
/** funcion invocada */
saludar();