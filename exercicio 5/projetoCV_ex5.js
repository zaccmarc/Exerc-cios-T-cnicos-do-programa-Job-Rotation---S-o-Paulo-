
 


  

// Criando a função que recebe uma string 
function inverteString (str) { 
    let novaString = '';


// percorre a string da direita para a esquerda e é invertida, sem trocar o "th" do length de lugar rs
for (let i = str.length - 1; i >= 0; i--) { 
    novaString += str[i];
} 
    return novaString; 
} 

//Aplicando a função acima 
 let str = 'Funciona!';
 let strInvertida = inverteString(str);
 console.log(str);
 console.log(strInvertida);
