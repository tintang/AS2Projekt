const tokenStorage = req("./Token.js");


class Member {

    constructor() {
        document.addEventListener('token-cleared', this.clear);
    }


    get member() {
        const data = localStorage.getItem('member');
        if(data){
            return JSON.parse(data);
        }
    }

    set member(member) {
        console.log('token-storage', 'set', member);
        localStorage.setItem('member', JSON.stringify(member));
    }

    clear() {
        console.log('token-storage', 'cleared');
        localStorage.removeItem('member');
    }
}

export let memberStorage = new Member();