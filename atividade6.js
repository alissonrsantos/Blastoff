//6- Uma partida de futebol iniciou na hora A e terminou na hora B. Faça um algoritmo que calcule o tempo que durou a partida.

const horaA = 10;
const horaB = 12.03;

let duracaoPartida;

if(horaA < horaB) {
    duracaoPartida = horaB - horaA;
} else {
    duracaoPartida = horaA - horaB;
}

if(duracaoPartida < 1) {
    console.log(`A partida durou ${(duracaoPartida * 100).toFixed(1)} minutos.`);
} else {
    console.log(`A partida durou ${duracaoPartida.toFixed(2)} horas.`);
}

