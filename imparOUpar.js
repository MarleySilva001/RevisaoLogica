function ParImpar (numero)
{
    if (numero % 2 === 0) {
        return 'Par'
    }
    else {
        return 'Ímpar'
    }
}

console.log (ParImpar(9))