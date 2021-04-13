class Conta{
    constuctor(saldo){
        this._saldo = saldo;
    }
    get saldo(){
        return this._saldo;
    }
    
    //método
    atualizar(taxa){
        //exceção para garantir que ninguém chame o método sem ter uma filha em mãos
        throw new Error('Você deve sobrescrever o método ');
    }

}