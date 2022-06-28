import modalStlye from '/modal/modal-style.js';

import productModalForm from '/modal/product-modal-form.js';

const modalHTML = /* html */ `
  <div class="modal-layout">
    <header class="modal-header">
      <button class="modal-header-close">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <h3 id="title-root" class="modal-title"></h3>
    </header>
      <div>
        <custom-product-modal-form></custom-product-modal-form>
      </div>
    <footer></footer>
  </div>
`;

const modalTemplate = document.createElement('template');
modalTemplate.innerHTML = `
  ${modalStlye}
  ${modalHTML}
`;

export default class Modal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(modalTemplate.content.cloneNode(true));

    // Exported variables
    this.type = {
      addProductModal: 'ADD-PRODUCT-MODAL',
      editProductModal: 'EDIT-PRODUCT-MODAL',
    };

    this.categories = null;

    // Roots
    this.modalForm = this.shadowRoot.getElementById('modal-form-root');
    this.modalTitle = this.shadowRoot.getElementById('title-root');

    // Elements
    this.modalLayout = this.shadowRoot.querySelector('.modal-layout');
    this.closeButton = this.shadowRoot.querySelector('.modal-header-close');

    // States
    this.modalType = null;
    this.isOpen = false;

    // Components
    customElements.define('custom-product-modal-form', productModalForm);
  }

  static get observedAttributes() {
    return ['type', 'is-open'];
  }

  connectedCallback() {
    this.closeButton.addEventListener('click', this.closeButtonHandler.bind(this));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;

    switch (true) {
      case name === 'type':
        this.modalType = newValue;
        break;
      case name === 'is-open':
        this.isOpen = newValue;
    }
    this.render();
  }

  disconnectedCallback() {}

  // Event Handlers
  closeButtonHandler() {
    this.setAttribute('is-open', 'false');
  }

  // getter
  static getType() {
    const type = {
      addProductModal: 'ADD-PRODUCT-MODAL',
      editProductModal: 'EDIT-PRODUCT-MODAL',
    };
    return type;
  }

  // Render UI Method
  render() {
    if (!this.modalType) {
      return;
    }

    this.isOpen === 'true'
      ? this.modalLayout.classList.add('show-modal')
      : this.modalLayout.classList.remove('show-modal');

    if (this.modalType === Modal.getType().addProductModal) {
      this.shadowRoot
        .querySelector('custom-product-modal-form')
        .setAttribute('type', Modal.getType().addProductModal);
      this.modalTitle.innerHTML = `상품 등록`;
    }

    if (this.modalType === Modal.getType().editProductModal) {
      this.shadowRoot
        .querySelector('custom-product-modal-form')
        .setAttribute('type', Modal.getType().editProductModal);
      this.modalTitle.innerHTML = `상품 수정`;
    }
  }
}
