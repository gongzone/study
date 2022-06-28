const logoTemplate = document.createElement('template');
logoTemplate.innerHTML = `
  <style>
    .logo-wrapper {
      display: flex;
      justify-content: center;
      max-width: 200px;
      align-items: center;
      font-size: 16px;
    }

    h1 {
      margin: 0;
    }
  </style>
  <div class="logo-wrapper">
    <h1>Dev shopping</h1>
  </div>
`;

export default class Logo extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(logoTemplate.content.cloneNode(true));
  }

  connectedCallback() {}
}
