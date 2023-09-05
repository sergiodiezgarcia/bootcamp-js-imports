import { MAXIMO_PUNTUACION, partida } from "./modelo";
import { dameMensajePorPuntuacion, dameCarta, dameImagenDeCarta, } from "./motor";


export const muestraNumeroPuntuacion = () => {
    const elementoPuntuacion = document.getElementById("puntuacion");
    if (elementoPuntuacion) {
      elementoPuntuacion.innerHTML = `${partida.puntuacion} de ${MAXIMO_PUNTUACION}`;
    }
  };
  
export const asignaImagenAElementoImg = (urlImagen: string) => {
  const cartaElemento = document.getElementById("carta");
  if (cartaElemento instanceof HTMLImageElement) {
    cartaElemento.src = urlImagen;
  }
};

export const habilitaPedirCarta = (habilitar: boolean) => {
    const botonDameCarta = document.getElementById("dameCarta");
    if (botonDameCarta instanceof HTMLButtonElement) {
      botonDameCarta.disabled = !habilitar;
    }
  };

export const inicializaJuego = () => {
  partida.puntuacion = 0;
  muestraNumeroPuntuacion();
  dameCarta();
  habilitaPedirCarta(true);
};

export const habilitarBotonMePlanto = (habilitar: boolean) => {
    const botonMePlanto = document.getElementById("mePlanto");
    if (botonMePlanto instanceof HTMLButtonElement) {
      botonMePlanto.disabled = !habilitar;
    }
  };


export const muestraCarta = (numerocarta: number) => {
    const urlImagen = dameImagenDeCarta(numerocarta);
    asignaImagenAElementoImg(urlImagen);
  };

export const botonDameCarta = document.getElementById("dameCarta");
export const botonNuevaPartida = document.getElementById("nuevaPartida");

export const mensajeMePlanto = (puntuacion: number): string => {
    habilitaPedirCarta(false);
    habilitarBotonMePlanto(false);
    return dameMensajePorPuntuacion(puntuacion);
   
  };
  
export const botonMePlanto = document.getElementById("mePlanto");
  