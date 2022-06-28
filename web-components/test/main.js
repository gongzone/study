import Nav from './nav.js';

customElements.define('custom-nav', Nav);

const template = document.createElement('template');
template.innerHTML = `
  <style>
  </style>
  <div>
    <custom-nav></custom-nav>
  </div>
`;

class Main extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {}
  disconnectedCallback() {}
  attributeChangedCallback(name, oldValue, newValue) {}
  static get observedAttributes() {
    return [];
  }
}

customElements.define('custom-main', Main);
