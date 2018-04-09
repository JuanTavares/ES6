class MensagemView extends View {

    constructor(elemento) {

        this._elemento = elemento;

    }

    _template(model) {

        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`

    }

}