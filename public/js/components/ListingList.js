const listingApi = require("../api/ListingApi");
import ("./ListingComponent")


class ListingList extends HTMLElement {

    _listings = null;

    constructor() {
        super();
        console.log('construct');
        listingApi.getAll()
            .then((listings) => {
                this._listings = listings;
                this.render();
            });
    }


    render() {
        this.innerHTML = `
            <div>
                ${this._listings.map(listing => {
            html`
                <listing listing="listing"></listing>
                `
        })}
            </div>
        `;
    }
}


customElements.define('listing-list', ListingList);