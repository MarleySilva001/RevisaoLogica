/*  function contarVogais(str){
     var totalVogal = 0
     var vogais = ['a','e','i','o','u']

     for(let i = 0; i < str.length; i++){
        if(vogais.indexOf(str[i]) != -1){
             totalVogal++
         }
    }
    return totalVogal
 }

 console.log(contarVogais('uva')) */

function contadorVogais(palavra){
    const vogais = 'aeiouãõáéíóúàèìòù';
    let contador = 0;
    for (let i = 0; i < palavra.length; i++){
        if(vogais.includes(palavra[i])){
            contador++
        }
    }
    return contador
}

const Palavra ='maçÃ';
var palavra = Palavra.toLowerCase()
const quantidadedeVogais = contadorVogais(palavra);
console.log(`a palavra ${palavra} tem ${quantidadedeVogais} vogais`)