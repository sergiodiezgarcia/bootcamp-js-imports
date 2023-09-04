interface Partida {
  puntuacion: number;
}

export let partida: Partida = {
  puntuacion: 0,
};

export const inicializaPartida = () => {
  partida = { puntuacion: 0 };
};

export const MAXIMO_PUNTUACION: number = 7;
