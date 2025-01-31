import "./style.css";

function generateCard() {
  let numero = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let palos = ["♠", "♣", "♥", "♦"];

  let randomIndex = array => Math.floor(Math.random() * array.length);

  let numeroAleatorio = numero[randomIndex(numero)];
  let paloAleatorio = palos[randomIndex(palos)];

  document.getElementById("card-values").innerHTML = numeroAleatorio;
  document.getElementById("card-iconos1").innerHTML = paloAleatorio;
  document.getElementById("card-iconos2").innerHTML = paloAleatorio;

  if (paloAleatorio === "♥" || paloAleatorio === "♦") {
    document.getElementById("card-iconos1").classList.add("red");
    document.getElementById("card-iconos2").classList.add("red");
  } else {
    document.getElementById("card-iconos1").classList.remove("red");
    document.getElementById("card-iconos2").classList.remove("red");
  }
}
function cambioCarta() {
  let width = parseInt(document.getElementById("ancho").value);
  let height = parseInt(document.getElementById("largo").value);
  document.getElementById("card").style.width = width > 0 ? `${width}px` : " ";
  document.getElementById("card").style.height =
    height > 0 ? `${height}px` : " ";
}

document.getElementById("ancho").addEventListener("input", cambioCarta);
document.getElementById("largo").addEventListener("input", cambioCarta);
window.onload = function() {
  generateCard();
  setInterval(generateCard, 10000);
  Temporizador(5);
};

const temporizador = document.getElementById("temporizador");

function Temporizador(seconds) {
  if (seconds > 0) {
    temporizador.textContent = `${seconds} seconds`;
    setTimeout(() => {
      Temporizador(seconds - 1);
    }, 1000);
  } else {
    Temporizador(5);
  }
}
