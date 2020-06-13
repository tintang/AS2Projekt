class Container {

    _parameters = {};
    _services = {};

    set(name, service) {
        this._services[name] = service;
    }

    setParameters(list) {
        this._parameters = list;
    }

    setParameter(name, value) {
        this._parameters[name] = value;
    }

    addParameters(list) {
        this._parameters = {...this._parameters, ...list};
    }

    get(name) {
        if (name in this._services) {
            return this._services[name];
        }

        throw new Error('no service for ' + name);
    }

    getParameter(name) {
        if (name in this._parameters) {
            return this._parameters[name];
        }

        throw new Error('no parameter for ' + name);
    }
}

export let container = new Container();