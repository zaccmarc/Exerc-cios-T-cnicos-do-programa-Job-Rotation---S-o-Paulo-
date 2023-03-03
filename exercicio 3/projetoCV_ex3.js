const fs = require('fs');

// Lê o arquivo JSON correto desta vez rs
let readdata = fs.readFileSync('dados.json');
let json = JSON.parse(readdata); // converte a string em um objeto, desta forma é possível ler os arquivos corretamente 
let valores = json.valores;

// Encontra o menor e maior valor, e dessa vez garantindo que não será encontrado a droga do infinity
let menorValor = Infinity;
let maiorValor = -Infinity;
let somaValores = 0;
let diasComFaturamentoAcimaDaMedia = 0;

for (let valor of valores) {
  let valorAtual = valor.valor;

// não deixa valores iguais a zero imprimirem
 
  if (valorAtual !== 0) {
    somaValores += valorAtual;

    if (valorAtual > maiorValor) {
      maiorValor = valorAtual;
    }

    if (valorAtual < menorValor) {
      menorValor = valorAtual;
    }
  }
}

// Calcula a média
let media = somaValores / valores.filter(valor => valor.valor !== 0).length;

// Encontra o número de dias com faturamento acima da média
for (let valor of valores) {
  let valorAtual = valor.valor;

  if (valorAtual > media) {
    diasComFaturamentoAcimaDaMedia++;
  }
}

// Imprime os resultados
console.log("Menor valor de faturamento:", menorValor);
console.log("Maior valor de faturamento:", maiorValor);
console.log("Número de dias com faturamento acima da média mensal:", diasComFaturamentoAcimaDaMedia);








