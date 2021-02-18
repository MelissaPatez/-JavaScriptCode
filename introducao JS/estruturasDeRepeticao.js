/*         FOR
break - para a execução do loop
continue - pula a execução do momento */
for(let i=100; i>0; i--){
    if(i === 50){
        break 
    }
    console.log(i)
}

for(let i=10; i>0; i--){
    if(i === 5){
        continue
    }
    console.log(i)
}

//while
let i = 234
while(i>10){
    console.log(i)
    i /= 10; 
}

//for...of
let nome  = 'mel'
let names = ['joao', 'paulo', 'pedro']

for (let char of nome){
    console.log(char)
}
for (let namee of nomes){
    console.log(namee)
}

//for...in
let person = {
    name: 'john',
    age: 30,
    weight: 88.6
}
for(let property in person){
    console.log(property)
    console.log(person[property])
}