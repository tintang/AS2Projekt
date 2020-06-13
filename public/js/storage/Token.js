class Token {

    get token() {
        return localStorage.getItem('token');
    }

    set token(token) {

        // set null
        if(token === null){
            this.clear();
            return;
        }

        // no changes
        if(this.token === token){
            return
        }

        localStorage.setItem('token', token);
        document.dispatchEvent(new CustomEvent('token-changed'));
    }

    clear() {
        localStorage.removeItem('token');
        document.dispatchEvent(new CustomEvent('token-cleared'));
    }
}

export let tokenStorage = new Token();