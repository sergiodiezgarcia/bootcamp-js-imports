import { partida } from "./modelo";
import {
  hasSuperadoLaPuntuacion,
  dameCarta,
  calculaPuntosDeUnaCarta,
} from "./motor";
import { muestraNumeroPuntuacion,habilitaPedirCarta, inicializaJuego,muestraCarta,
botonNuevaPartida,
botonDameCarta,
botonMePlanto,
mensajeMePlanto,
habilitarBotonMePlanto,
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




if (botonMePlanto instanceof HTMLButtonElement) {
  botonMePlanto.addEventListener("click", () => {
    const mensaje = mensajeMePlanto(partida.puntuacion);
    alert(mensaje);
  });
}

