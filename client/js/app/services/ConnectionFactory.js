var ConnectionFactory = (function() {

    const stores = [`negociacoes`];
    const version = 1;
    const dbName = `NegociacoesDB`;

    var connection = null;

    var close = null;

    class ConnectionFactory {

        constructor() {

            throw new Error(`Não é possível instanciar ConnectionFactory`);
        }

        static getConnection() {

            return new Promise((resolve, reject) => {

                let openRequest = window.indexedDB.open(dbName, version);

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

        static closeConnection() {

            

        }

    }
})();