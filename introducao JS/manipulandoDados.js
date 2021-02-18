//contar caracteres de uma palavra/digitos de numero
let word = "paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)
//numero com 2 casas decimais e trocar ponto por virgula
let num  = 244.547657
console.log(num.toFixed(2).replace(".", ","))

//transformar tudo em maiusculo e minusculo
let sla = "Você entrou no modo de navegação anônima"
console.log(sla.toUpperCase()) // M
console.log(sla.toLowerCase()) // m

//verificar se o texto contem a palavra desejada
let phrase = "Encontre palavras em frases"
console.log(phrase.includes("nao"))

//separe um texto com espaços, em um novo array, transforme o array em um texto e onde eram eapaços coloque _
let frase = "Encontre palavras em frases"
let myArray = frase.split(" ")
let fraseWithUnderscore = myArray.join("_")
console.log(fraseWithUnderscore)

//transforma uma cadeia de caracteres em elementos de um array
let cadeia = "manipulação"
console.log(Array.from(cadeia))

// MANIPULANDO ARRAY
let techs = ["html", "node.js", "css"]
techs.push("java") // adicionar um item no final 
techs.unshift("sql") // no começo
techs.pop() //remover do fim
techs.shift() // remover do começo
console.log(techs.slice(1,3)) //pegar somente alguns elementos do array
techs.slice(1,2) //remover 1 ou mais items em qualquer posiçao do array
let index = techs.indexOf("css") //encontrar a posição de um elemento no array
techs.splice(index,1)
console.log(index)