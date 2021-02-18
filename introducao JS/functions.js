//parameters
const soma = function(num1, num2){
   total = num1 + num2
   return total
}
soma(2,3) //arguments 


//function scope
let subject = 'test'

function createThink(subject){
    subject = 'test2'
    return subject
}
console.log(createThink(subject))
console.log(subject)


//arrow function
const sayMyName = () => {
    console.log("mel")
}
sayMyName()


//callback function
function test(name){
    console.log("antes de executar a função callback")
    name()
    console.log("depois de executar a função callback")
}

test( () =>{
    console.log("na função callback")
})


//funcion constructor
function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " esta andando"
    }
}
const mel = new Person("mel")
const ju  = new Person("ju")
console.log(mel.walk())
console.log(ju.walk())