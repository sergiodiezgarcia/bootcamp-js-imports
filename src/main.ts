import {MAXIMO_PUNTUACION, partida} from './modelo';
import { hasSuperadoLaPuntuacion,dameCarta,dameImagenDeCarta,calculaPuntosDeUnaCarta} from './motor';


const muestraNumeroPuntuacion = () => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = `${partida.puntuacion} de ${MAXIMO_PUNTUACION}`;
  }
};


const inicializaJuego = () => {
  partida.puntuacion = 0;
  muestraNumeroPuntuacion();
  dameCarta();
  habilitaPedirCarta(true);
};

document.addEventListener("DOMContentLoaded", inicializaJuego);


const asignaImagenAElementoImg = (urlImagen: string) => {
  const cartaElemento = document.getElementById("carta");
  if (cartaElemento instanceof HTMLImageElement) {
    cartaElemento.src = urlImagen;
  }
};

const muestraCarta = (numerocarta: number) => {
  const urlImagen = dameImagenDeCarta(numerocarta);
  asignaImagenAElementoImg(urlImagen);
};

const habilitaPedirCarta = (habilitar: boolean) => {
  const botonDameCarta = document.getElementById("dameCarta");
  if (botonDameCarta instanceof HTMLButtonElement) {
    botonDameCarta.disabled = !habilitar;
  }
};



const botonDameCarta = document.getElementById("dameCarta");
const botonNuevaPartida = document.getElementById("nuevaPartida");

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
    partida.puntuacion = partida.puntuacion + calculaPuntosDeUnaCarta(nuevoNumero);
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
