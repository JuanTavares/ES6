class NegociacaoService {

    obterNegociacoesDaSemana() {

        let xhr = new XMLHttpRequest();

        /* configurações */
        xhr.open('GET', 'negociacoes/semana');

        /* executa */
        xhr.onreadystatechange = () => {

            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    console.log('Obtendo as negociações do servidor.')

                    JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(
                            new Date(objeto.data),
                            objeto.quantidade,
                            objeto.valor))
                        .forEach(negociacao =>
                            this._listaNegociacoes.adiciona(negociacao));
                    this._mensagem.texto = 'Negociações importadas com sucesso.';

                } else {

                    console.log(xhr.responseText);
                    this._mensagem.texto = 'Não foi possível obter as negociações.';

                }
            }
        }
        xhr.send();

    }

}