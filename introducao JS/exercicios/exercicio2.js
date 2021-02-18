/*
    Sistemas de gastos Familiar
    crie um obj que possuira 2 propriedades do tipo array
    *receitas: []
    *despesas: []
    crie uma função que ira calcular o total de receitas e despesas e mostrar uma menssagem
    se a familia esta com saldo positivo ou negativo
*/

let familia = {
   receita: [2500, 3200, 250.43, 360.45],
   despesas: [320.34, 128.45, 176.87, 1450.00]
}

function sum(array){
    let total = 0;
    for(let value of array){
        total += value
    }
    return total
}

function calculateBalance(){
    const calculateIncomes = sum(familia.receita)
    const caculateExpenses = sum(familia.despesas)
    const total = calculateIncomes - caculateExpenses
    const itsOk =total >= 0

    let balanceText = "seu saldo foi "
    if(itsOk){
        balanceText = "positivo"
    }
    console.log(`seu saldo é ${balanceText}: ${total}`)
}
calculateBalance()