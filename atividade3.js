//Dado três números (a,b,c), faça um algoritmo para mostrar o menor número.

const a = 10;
const b = 8;
const c = 15;

let menorNumero;

if(a < b) {
    menorNumero = a
} else if(b < c) {
    menorNumero = b
} else {
    menorNumero = c
}

console.log(menorNumero);