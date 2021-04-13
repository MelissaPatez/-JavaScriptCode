class Conta {

    constructor(saldo) {
        this._saldo = saldo;
    }

    get saldo() {
        return this._saldo;
    }

    atualiza(taxa) {
        throw new Error('Você deve sobrescrever o método ');
    }
}

conta1 = new ContaCorrente(200); 
conta2 = new ContaPoupanca(300); 
conta1.atualiza(2);
conta2.atualiza(3);
console.log(conta1.saldo); //202
console.log(conta2.saldo); //306