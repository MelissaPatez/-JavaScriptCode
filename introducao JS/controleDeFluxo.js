//if ...else
let temperature = 37.4

if(temperature >= 37.5){
    console.log('Febre alta')
}else if(temperature < 37.5 && temperature >= 37){
    console.log('Febre moderada')
}else{
    console.log('Saudável')
}

//switch
let expression ='a'

switch(expression){
    case 'a':
        console.log('a')
        break
    case 'b':
        console.log('b')
        break
    default:
        console.log('default')
        break
}

function calculadora(number1, operator, number2) {
    let result
    switch (operator) {
        case '+': 
            result =  number1 + number2
            break;
        case '-':
            result =  number1 - number2
            break
        case '*':
            result =  number1 * number2
            break
        case '/':
            result =  number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }
    return result
}
console.log(calculadora(3, '+', 8))

//thow
function sayMyName(name = ''){
    if(name == ''){
        throw "nome é obrigatorio"
    }
    console.log("depois do erro")
}

//try ...catch
try{
    sayMyName()
}catch(e){
    console.log(e)
}

console.log("apos a função de erro")