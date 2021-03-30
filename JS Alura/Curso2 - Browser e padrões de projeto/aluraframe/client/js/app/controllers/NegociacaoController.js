class NegociacaoController {
    constructor(){  // limita a busca no DOM.
        let $ = document.querySelector.bind(document); //faz uma referência para o document

        this._inputData = $('#data');
        this._inputQuantidade =  $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event) {

        event.preventDefault();
    
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();
        console.log(this._listaNegociacoes.negociacoes);
    
    }
    _criaNegociacao(){
        return new Negociacao(
            DateHelpers.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }
    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0

        this._inputData.focus();

    }
}
    
    

