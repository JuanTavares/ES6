var ConnectionFactory = (function() {


    class ConnectionFactory {

        constructor() {

            throw new Error(`Não é possível instanciar ConnectionFactory`);
        }

        static getConnection() {

            return new Promise((resolve, reject) => {

                let openRequest = window.indexedDB.open(`NegociacoesDB`, 1);

                /*Tríade de chamadas*/

                openRequest.onupgradeneeded = e => {

                }

                openRequest.onsuccess = e => {

                }

                openRequest.onerror = e => {

                }
                /*Fim Tríade */

            })

        }

        static _createStores(connection) {



        }

    }
})();