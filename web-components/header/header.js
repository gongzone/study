import HeaderNav from '/header/header-nav.js';

const style = document.createElement('link');
style.setAttribute('rel', 'stylesheet');
style.setAttribute('href', '/header/header.css');

const template = document.createElement('template');
template.innerHTML =
  /* html */
  `
  <header class="flex-style">
    <div class="hamburger-menu is-size-5 ml-6 link">
      <i class="fa-solid fa-bars"></i><span> Category</span>
    </div>

    <h1 class="header-logo flex-style is-size-2">
      <a class="link" href="/">
        <span class="">Vivid Clothes</span>
      </a>
    </h1>

    <div class="is-size-6 mr-6"><custom-header-nav></custom-header-nav></div>
  </header>
`;

export default class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    customElements.define('custom-header-nav', HeaderNav);
  }

  static get observedAttributes() {
    return [];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {}

  disconnectedCallback() {}

  render() {}
}
