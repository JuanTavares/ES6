class NegociacaoService {

    obterNegociacoesDaSemana(cb) {

        let xhr = new XMLHttpRequest();

        /* configurações */
        xhr.open('GET', 'negociacoes/semana');

        /* executa */
        xhr.onreadystatechange = () => {

            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    console.log('Obtendo as negociações do servidor.')

                    cb(null, JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(
                            new Date(objeto.data),
                            objeto.quantidade,
                            objeto.valor)));

                } else {

                    cb('Não foi possível obter as negociações da semana', null);
                    console.log(xhr.responseText);

                }
            }
        }
        xhr.send();

    }

}