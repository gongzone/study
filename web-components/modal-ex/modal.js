import modalStlye from '/modal/modal-style.js';

const modal = (props) => {
  const { modalForm, type, categories } = props;
  let modalClassName = '';
  let modalTitle = '';
  let btnText = '';

  if (type === 'ADD') {
    modalClassName = 'add-product-form';
    modalTitle = 'μν λ±λ‘ π';
    btnText = 'λ±λ‘νκΈ°';
  }

  if (type === 'EDIT') {
    modalClassName = 'edit-product-form';
    modalTitle = 'μν μμ  π';
    btnText = 'μμ νκΈ°';
  }

  return /* html */ `
    ${modalStlye}
    <div class="modal-layout ${modalClassName}">
      <header class="modal-header">
        <button class="modal-header-close">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <h3 class="modal-title">
          ${modalTitle}
        </h3>
      </header>
        ${modalForm({ btnText, categories })}
      <footer></footer>
    </div>
  `;
};

export default modal;
