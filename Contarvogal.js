function contarVogais(str){
    var totalVogal = 0
    var vogais = ['a','e','i','o','u']

    for(let i = 0; i < str.length; i++){
        if(vogais.indexOf(str[i]) != -1){
            totalVogal++
        }
    }
    return totalVogal
}

console.log(contarVogais('uva'))