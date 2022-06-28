const style = document.createElement('link');
style.setAttribute('rel', 'stylesheet');
style.setAttribute('href', '/layout/layout.css');

const template = document.createElement('template');
template.innerHTML =
  /* html */
  `
  <div><slot></slot></div>
`;

export default class Layout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return [];
  }

  connectedCallback() {}

  attributeChangedCallback(name, oldValue, newValue) {}

  disconnectedCallback() {}

  render() {}
}
