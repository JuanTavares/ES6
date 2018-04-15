class ProxyFactory {

    static create(objeto, props, acao) {

        return new Proxy(objeto, {
            get(target, prop, receiver) {
                
            }
        })
    }

    static _isFunction(func) {
        return typeof(func) == typeof(Function);
    }

}