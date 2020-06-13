const tokenStorage = req("../storage/Token.js");
const memberStorage = req("../storage/Member.js");
const memberApi = req("../api/ListingComponent.js");

class Member {

    getMemberId(){
        let member = memberStorage.member;
        console.log('MemberManager - storage: ', member);
        if (!member) {
            let token = tokenStorage.token;
            console.log('MemberManager - token: ', token);
            if (token) {
                const tokenContent = this.parse(token);
                return tokenContent.id
            }
        } else {
            return member.id;
        }

        return undefined;
    }

    async getMember() {
        let member = memberStorage.member;
        console.log('MemberManager - storage: ', member);
        if (!member) {
            let token = tokenStorage.token;
            console.log('MemberManager - token: ', token);
            if (token) {
                const tokenContent = this.parse(token);
                console.log('MemberManager - tokenContent: ', tokenContent)
                member = await memberApi.get(tokenContent.id);
                memberStorage.member = member;
                console.log('MemberManager - member: ', member)
            }
        }

        return member;
    }

}

// todo remove after refactore
export let memberManager = new Member();