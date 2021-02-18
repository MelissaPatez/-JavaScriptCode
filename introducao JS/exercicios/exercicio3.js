/*
    crie uma função que receba uma string em celsius ou fahrenheit e
     faça a transformação de uma unidade para outra
     C = (F -32) * 5/9
     F = C * 9/5 + 32 
*/

// transformaDegreen('50F')
function transformaDegreen(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //fluxo de erro
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado')
    }

    //fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSing = 'C'

    //fluxo alternativo C -> F
    if(celsiusExists){
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSing = 'F'
    }

    return formula(updatedDegree) + degreeSing
}

try{
    console.log(transformaDegreen('50F'))
    console.log(transformaDegreen('10C'))
    
}catch(error){
    console.log(error.message)
}