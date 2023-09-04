import { MAXIMO_PUNTUACION, partida } from "./modelo";


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

