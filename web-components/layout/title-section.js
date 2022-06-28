const style = document.createElement('link');
style.setAttribute('rel', 'stylesheet');
style.setAttribute('href', '/layout/title-section.css');

const template = document.createElement('template');
template.innerHTML =
  /* html */
  `
  <div>
    <h2 class="title is-2">
      <slot></slot>
    </h2>
  </div>
  <hr>
`;

export default class TitleSection extends HTMLElement {
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
