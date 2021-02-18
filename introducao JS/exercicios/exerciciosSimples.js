//1.Declare uma variavel com nome weight
let weight;

//2.Que tipo de dado é a variavel acima?
console.log(typeof weight)

/* 3.Declare uma variavel e atribua valores para cada dos dados:
    *name: String
    *age: Number(integer)
    *stars: Number(float)
    *isSubscribead: Boolean
*/
let name =  "Mel"
let age = 21
let stars = 4.8
let isSubscribead = false

//4. A variavel student abaixo é de que tipo de dados?
let student = {};
console.log(typeof student)
//4.1 atribua a ela as mesmas propriedades e valores  do exercicio 3
    let student = {
        name: "Mel",
        age: 21,
        weight: 48.7,
        isSubscribead: false
    }
/*4.2 Mostre no console a seguinte mensagem:
    <name>de idade<age> pesa <weight> kg.
*/
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

//5. declare uma variavel do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio
let students = []

//6. reatribua valor para a variavel acima, colocando dentro dela o objeto student da questao 4. 
students = [
    student
]
//7. coloque no console o valor da posição zero do array acima
console.log(students[0])
//8. crie um novo student e coloque na posição 1 do array students
const juh = {
    name: "ju",
    age: 21,
    weigth: 46.6,
    isSubscribead: true
}
students[1] = juh
//9. sem rodar o codigo responda qual pe a resposta do codigo abaixo e por que? 
console.log(a)
var a = 1 
undefined