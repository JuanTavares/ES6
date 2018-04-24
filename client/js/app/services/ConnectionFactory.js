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

                    ConnectionFactory._createStores(e.target.result);

                }

                openRequest.onsuccess = e => {

                    resolve(e.target.result);

                }

                openRequest.onerror = e => {

                    console.log(e.target.error);
                    reject(e.target.error.name);

                }
                /*Fim Tríade */

            })

        }

        static _createStores(connection) {

            stores.forEach(store => {

                if (connection.objectStoreNames.contains(store)) {
                    connection.deleteObjectStore(store);
                }
                connection.createObjectStore(store, {
                    autoIncrement: true
                });
            });

        }

        static closeConnection() {



        }

    }
})();