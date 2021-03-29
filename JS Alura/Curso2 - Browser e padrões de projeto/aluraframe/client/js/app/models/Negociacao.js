class Negociacao{
    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);//qualquer alteração nas suas propriedades será ignorada
     
    };

    //get propriedade de acesso a leitura 
    get volume(){
        return this._quantidade*this._valor;
    };

    get data() {
        return new Date(this._data.getTime());
    }
    
    get quantidade() {
        return this._quantidade;
    }
    
    get valor() {
        return this._valor;
    }
};