import { MAXIMO_PUNTUACION, partida } from "./modelo";

export const hasSuperadoLaPuntuacion = () => {
    return partida.puntuacion > MAXIMO_PUNTUACION;
  };

export const dameCarta = (): number => {
  let nuevaCarta = 0;
  // Loq que sea con random
  nuevaCarta = Math.floor(Math.random() * 10) + 1;

  // nuevaCarta = nuevaCarta + 2;
  if (nuevaCarta > 7) {
    nuevaCarta = nuevaCarta + 2;
  }

  return nuevaCarta;
};


export const dameImagenDeCarta = (numeroCarta: number) => {
    let urlImagen = "./content/back.jpg";
    switch (numeroCarta) {
      case 1:
        urlImagen = "./content/1-copas.jpg";
        break;
      case 2:
        urlImagen = "./content/2-copas.jpg";
        break;
      case 3:
        urlImagen = "./content/3-copas.jpg";
        break;
      case 4:
        urlImagen = "./content/4-copas.jpg";
        break;
      case 5:
        urlImagen = "./content/5-copas.jpg";
        break;
      case 6:
        urlImagen = "./content/6-copas.jpg";
        break;
      case 7:
        urlImagen = "./content/7-copas.jpg";
        break;
      case 10:
        urlImagen = "./content/10-sota-copas.jpg";
        break;
      case 11:
        urlImagen = "./content/11-caballo-copas.jpg";
        break;
      case 12:
        urlImagen = "./content/12-rey-copas.jpg";
        break;
    }
  
    return urlImagen;
  };
 
export const dameMensajePorPuntuacion = (puntuacion: number) :string => {
  if (partida.puntuacion >= 0 && puntuacion < 2) {
    return "Parece que no has entendido el juego";
  }

  if (partida.puntuacion >= 2 && puntuacion < 4) {
    return "Parece que no has entendido el juego";
  }
  if (partida.puntuacion >= 4 && puntuacion < 6) {
    return "bien, parece que lo estas entendiendo";
  }
  if (partida.puntuacion >= 6) {
    return "bien hecho!!";
  }

  return "error";
}  

export const calculaPuntosDeUnaCarta = (numero: number): number =>
  numero <= 7 ? numero : 0.5;

