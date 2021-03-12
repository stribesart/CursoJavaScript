/* console.log(window)
console.log(document)

let texto = "Hola soy tu amigo y docente digital Set Mircha";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto); */

/* console.log("***************Elementos del Documento*************");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);

document.write("<h2>Hola mundo desde el dom </h2>"); */

/* console.log(document.getElementsByTagName('li'))
console.log(document.getElementsByClassName('card'))
console.log(document.getElementsByName('nombre'))
console.log(document.getElementById('menu'))
console.log(document.querySelector('#menu'))
console.log(document.querySelector('a'))
console.log(document.querySelectorAll('a'))
console.log(document.querySelectorAll('a').length)
document.querySelectorAll('a').forEach((el) => console.log(el))
console.log(document.querySelector(".card"))
console.log(document.querySelectorAll(".card"))
console.log(document.querySelectorAll(".card")[2])
console.log(document.querySelector("#menu li"))
console.log(document.querySelectorAll("#menu li")) */

/* console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang)

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://www.google.com");
console.log($linkDOM.hasAttribute("rel"))
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"))


//Data Attributes
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento")
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribete a GMAIL";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"))
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id"))
 */
/* const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM))
console.log(getComputedStyle($linkDOM).getPropertyValue("color"))


$linkDOM.style.setProperty("text-decoration", "none")
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";
console.log($linkDOM.style);

console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM))

//Variables CSS - Custom Properties CSS
const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor); */

const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia")
$card.classList.remove("opacity-80", "sepia")
$card.classList.toggle("opacity-80", "sepia")

