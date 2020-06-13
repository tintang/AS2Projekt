const Core = require("./CoreApi.js");
const memberStorage = require("../storage/Member.js");
const RequestError = require("./errors/RequestError");


class Member extends Core {

    async get(id, target) {

        target |= document;

        const response = await fetch(
            this.urlForEndpoint('members/' + id),
            this.buildOptions({})
        );

        const content = await response.json();

        if (response.ok) {
            return content;
        }

        throw new RequestError("Response failed ");
    }

    async getAll(target) {

        target |= document;

        const response = await fetch(
            this.urlForEndpoint('members/'),
            this.buildOptions({})
        );

        const content = await response.json();

        if (response.ok) {
            return content;
        }

        throw new RequestError("Response failed ");
    }

}

export let memberApi = new Member();