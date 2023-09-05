import { partida } from "./modelo";
import {
  hasSuperadoLaPuntuacion,
  dameCarta,
  calculaPuntosDeUnaCarta,
} from "./motor";
import { muestraNumeroPuntuacion,habilitaPedirCarta, inicializaJuego,muestraCarta,
botonNuevaPartida,
botonDameCarta,
 } from "./ui";



document.addEventListener("DOMContentLoaded", inicializaJuego);



if (botonNuevaPartida instanceof HTMLButtonElement) {
  botonNuevaPartida.addEventListener("click", () => {
    inicializaJuego();
    habilitarBotonMePlanto(true);
  });
}

if (botonDameCarta instanceof HTMLButtonElement) {
  botonDameCarta.addEventListener("click", () => {
    const nuevoNumero = dameCarta();
    muestraCarta(nuevoNumero);
    partida.puntuacion =
      partida.puntuacion + calculaPuntosDeUnaCarta(nuevoNumero);
    muestraNumeroPuntuacion();
    if (hasSuperadoLaPuntuacion()) {
      alert("has superado el numero de intentos");

      habilitaPedirCarta(false);
      habilitarBotonMePlanto(false);
    }
  });
}

const habilitarBotonMePlanto = (habilitar: boolean) => {
  const botonMePlanto = document.getElementById("mePlanto");
  if (botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.disabled = !habilitar;
  }
};

const mensajeMePlanto = (puntacion: number): string => {
  habilitaPedirCarta(false);
  habilitarBotonMePlanto(false);
  if (partida.puntuacion >= 0 && puntacion < 2) {
    return "Parece que no has entendido el juego";
  }

  if (partida.puntuacion >= 2 && puntacion < 4) {
    return "Parece que no has entendido el juego";
  }
  if (partida.puntuacion >= 4 && puntacion < 6) {
    return "bien, parece que lo estas entendiendo";
  }
  if (partida.puntuacion >= 6) {
    return "bien hecho!!";
  }

  return "error";
};

const botonMePlanto = document.getElementById("mePlanto");

if (botonMePlanto instanceof HTMLButtonElement) {
  botonMePlanto.addEventListener("click", () => {
    const mensaje = mensajeMePlanto(partida.puntuacion);
    alert(mensaje);
  });
}
