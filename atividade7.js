//7- Dada uma lista de números A[1,2,3,...], faça um algoritmo que retorne uma lista somente com os números pares.

const A = [1,2,3,4,5,6,7,8,9,10]

const soNumerosPares = A.filter((a) => a % 2 === 0);
console.log(soNumerosPares);