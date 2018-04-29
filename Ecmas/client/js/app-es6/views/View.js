export class View {

    constructor(elemento) {

        this._elemento = elemento;
    }

    template() {

        throw new Error(`O método "template()" precisa ser sobrescrito`);
    }

    update(model) {

        this._elemento.innerHTML = this.template(model);
    }
}