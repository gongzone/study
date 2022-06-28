import AddProductModal from '/modal/addProductModal.js';
import EditProductModal from '/modal/editProductModal.js';

const styleText = `
<style>
  .modal-layout {
    position: fixed;
    z-index: 100;
    top: 50%;
    left: 50%;
    min-width: 450px;
    max-height: 450px;
    padding: 40px 50px;
    background-color: #f4f7f6;
    visibility: hidden;
    opacity: 0;
    transform: translate(-50%, -45%);
    transition: all 0.3s;
    overflow-y: scroll;
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
  }
  
  .modal-header-close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px 20px;
    color: #868e96;
    background-color: transparent;
    font-size: 25px;
    cursor: pointer;
  }

  .show {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  #title {
    color: #24292f;
    font-size: 18px;
  }
</style>
`;

const markUpText = `
  <div class="modal-layout">
    <header class="modal-header">
      <button class="modal-header-close">
        close
      </button>
      <h3 id="title"></h3>
    </header>
    <div id="root"></div>
    <footer></footer>
  </div>
`;

const modalTemplate = document.createElement('template');
modalTemplate.innerHTML = `
  ${styleText}
  ${markUpText}
`;

export default class Modal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(modalTemplate.content.cloneNode(true));

    this.modalType = null;
    this.isOpen = false;

    this.root = null;
    this.modalTitle = null;

    customElements.define('custom-add-product-modal', AddProductModal);
    customElements.define('custom-edit-product-modal', EditProductModal);
  }

  static get observedAttributes() {
    return ['type', 'is-open'];
  }

  connectedCallback() {
    this.root = this.shadowRoot.getElementById('root');
    this.modalTitle = this.shadowRoot.getElementById('title');

    const closeButton = this.shadowRoot.querySelector('.modal-header-close');
    closeButton.addEventListener('click', () => {
      this.setAttribute('is-open', false);
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    if (name === 'type') {
      this.modalType = newValue;
    }

    if (name === 'is-open') {
      this.isOpen = newValue;
    }

    this.render();
  }

  disconnectedCallback() {}

  render() {
    if (!this.modalType) {
      return;
    }

    const modalLayout = this.shadowRoot.querySelector('.modal-layout');

    this.isOpen === 'true'
      ? modalLayout.classList.add('show')
      : modalLayout.classList.remove('show');

    if (this.modalType === 'ADD_PRODUCT_MODAL') {
      this.root.innerHTML = `<custom-add-product-modal></uc-add-product-modal>`;
      this.modalTitle.innerHTML = `상품 등록`;
    }

    if (this.modalType === 'EDIT_PRODUCT_MODAL') {
      this.root.innerHTML = `<custom-edit-product-modal></uc-edit-product-modal>`;
      this.modalTitle.innerHTML = `상품 수정`;
    }
  }
}
