class ListaNegociacoes {
    constructor(triggerUpdate) {

        this._negociacoes = [];
        this._triggerUpdate = triggerUpdate;
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
        this._triggerUpdate(this);
    }

    get negociacoes() {

        return [].concat(this._negociacoes);
    }

    esvazia() {
        
        this._negociacoes = [];
        this._triggerUpdate(this);
    }

}