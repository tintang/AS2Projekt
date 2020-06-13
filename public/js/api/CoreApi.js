class CoreApi {
    get domain() {
        return 'localhost:3000/';
    }

    urlForEndpoint(endpoint) {
        return this.domain + endpoint;
    }

    buildOptions(customOptions) {
        const defaultOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Lang': container.getParameter('lang')
            },
        };

        if (null !== tokenStorage.token) {
            defaultOptions.headers['Authorization'] = 'Bearer ' + tokenStorage.token;
        }

        return {...defaultOptions, ...customOptions};
    }
}

module.exports = CoreApi;