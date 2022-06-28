import Logo from './logo.js';

customElements.define('custom-logo', Logo);

const template = document.createElement('template');
template.innerHTML = `
  <style>
    div {
      height: 90px;
      background-color: #f8b195;
    }
  </style>
  <div>
    <custom-logo></custom-logo>
  </div>
`;

class Nav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {}
}

export default Nav;
