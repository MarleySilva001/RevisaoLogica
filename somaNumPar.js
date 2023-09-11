/* function somaPares (x){
    var soma = 0
    for(let i = 0; i <= x; i += 2){
        soma += i
        
    }
    return soma
}

console.log(somaPares(10)) */

function CalcularSomaPares(min, max){
    let soma = 0
    for(let i = min; i <= max; i++){
        if(i%2 === 0)
        soma+= i

    }
    return soma
}
const min = 1;
const max = 10;
const somaPares = CalcularSomaPares(min, max);
console.log(`a soma do intervalo entre ${min} e ${max} é = a ${somaPares}`)