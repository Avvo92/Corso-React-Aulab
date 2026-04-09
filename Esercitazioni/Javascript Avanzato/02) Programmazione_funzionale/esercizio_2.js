const convertitoreValuta = (tasso) => {
    return (importo) => {
        return importo * tasso
    }
}

// utilizzo rapido
console.log(convertitoreValuta(1.06)(100));

// utilizzo per step
firstStep = convertitoreValuta(1.06);
result = firstStep(100)
console.log(result)