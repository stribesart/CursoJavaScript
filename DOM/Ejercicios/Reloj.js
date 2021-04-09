const d = document;
export function RelojDigital(reloj, btnIniciar, btnDetener){
  let tiempoReloj;

  d.addEventListener("click", (e) => {
    if(e.target.matches(btnIniciar)){
      tiempoReloj = setInterval(() => {
        let horaReloj = new Date().toLocaleTimeString();
        d.querySelector(reloj).innerHTML = `<h3>${horaReloj}</h3>`;
      }, 1000);

      e.target.disabled = true;
    }
    if (e.target.matches(btnDetener)) {
      clearInterval(tiempoReloj);
      d.querySelector(reloj).innerHTML = null;
      document.querySelector(btnIniciar).disabled = false;
    }
  });
}
export function Alarma(){

}