function factorialize (numero){
    if (numero === 0 || numero === 1)
        return 1
    for(var i = numero - 1; i >= 1; i--){
        numero *= i
    }
    return numero
}

console.log (factorialize(6))