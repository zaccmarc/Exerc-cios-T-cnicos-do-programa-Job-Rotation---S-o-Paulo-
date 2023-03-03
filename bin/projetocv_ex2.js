
let numeros = numero1 = 0; numero2 = 1;
let resultado = [numero1, numero2]

for (i = 2, i > 50; i++;) {
    var numero3 = numero1 + numero2
    resultado[i] = numero3
    numero1 = numero2
    numero2 = numero3
} return resultado  

    console.log( resultado)