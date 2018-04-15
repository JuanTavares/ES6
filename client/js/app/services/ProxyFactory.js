class ProxyFactory {

    static create(objeto, props, acao) {

        return new Proxy(objeto, {
            get(target, prop, receiver) {
                
            }
        })
    }
}