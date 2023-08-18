function NumberPar(number){
    let numerosPares = []
    for(let i = 0; numerosPares.length < number; i += 2){
        numerosPares.push(i)
    }
    return numerosPares
}

console.log(NumberPar(5))