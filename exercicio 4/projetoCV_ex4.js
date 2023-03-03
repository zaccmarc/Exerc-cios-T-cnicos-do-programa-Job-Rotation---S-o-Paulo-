//Definindo as variaveis 

let SP = 67836.43;
let RJ = 36678.66;
let MG = 29229.88;
let ES = 27165.48;
let outros = 19849.53;
const total = SP + RJ + MG + ES + outros;

console.log(total);

//Determinando a função que realizará o cálculo  

const porcentagem = (valor, total) => ((valor / total) * 100).toFixed(2) + "%";

//Realizando o calculo de respresentação do porcentual

console.log(porcentagem(SP, total));
console.log(porcentagem(RJ, total));
console.log(porcentagem(MG, total));
console.log(porcentagem(ES, total));
console.log(porcentagem(outros, total));


