//8- Faça um algoritmo que receba um número e retorne se o número é primo ou não.

const a = 50;

if(a >= 2 && a % 2 !== 0 && a % 3 !== 0 && a % 5 !== 0 && a % 7 !== 0 || a === 2 || a === 3 || a === 5 || a === 7) {
    console.log(`${a} é um número primo!`);
} else {
    console.log(`${a} não é um número primo!`);
}