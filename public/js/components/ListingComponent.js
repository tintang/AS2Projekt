const html = require('https://unpkg.com/lit-html?module');

class ListingComponent extends HTMLElement {

    _listings;

    constructor() {
        super();

    }

    static get observedAttributes() {
        return ['listing'];
    }

    connectedCallback() {
        this.render();
    }

    get listings() {
        return this._listings;
    }

    set listings(value) {
        this._listings = value;
    }

    render() {
        return html`
            <div class="container">
                <h1>{listing.title}</h1>
                <p>{listing.creator.username}</p>
            </div>
        `
    }
}

customElements.define('listing', ListingComponent);