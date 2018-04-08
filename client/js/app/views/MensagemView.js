class MensagemView {

    constructor(elemento) {

        this._elemento = elemento;

    }

    _template(modelo) {

        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`

    }

}