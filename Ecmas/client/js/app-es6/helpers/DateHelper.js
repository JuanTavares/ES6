export class DateHelper {

    constructor() {
        throw new Error(`Esta classe não pode ser instanciada!`);
    }

    static textoParaData(texto) {
        if (/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
            return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
        } else {
            throw new Error(`Deve estar no formato aaaa-MM-dd`);
        }

    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
    }

}