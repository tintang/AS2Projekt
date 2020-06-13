const Core = require("./CoreApi.js");
const RequestError = require("./errors/RequestError");

class ListingApi extends Core {

    async get(id, target) {

        target |= document;

        const response = await fetch(
            this.urlForEndpoint('listing/' + id),
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
            this.urlForEndpoint('listings/'),
            this.buildOptions({})
        );

        const content = await response.json();

        if (response.ok) {
            return content;
        }

        throw new RequestError("Response failed ");
    }

}

module.exports = listingApi = new ListingApi();