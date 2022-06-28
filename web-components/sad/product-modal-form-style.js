const productModalFormStyle = /* html */ `
<style>
  .modal-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }

  .modal-ul {
    display: grid;
    row-gap: 15px;
    margin-bottom: 40px;
    padding: 0;
  }

  .modal-li {
    display: flex;
    flex-direction: column;
    }

  .modal-input {
    font-size: 17px;
    height: 45px;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    margin-top: 2px;
    padding: 0 8px;
  }

  .modal-input:focus {
      outline: none;
      background: #e7e7fc;
    }

  .modal-button {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    color: white;
    font-size: 17.5px;
    font-weight: bold;
    background-color: #474747;
    padding: 15px 12.5px;
    border: 0;
    transition: background-color 0.3s;
  }

  .modal-button:hover {
    background-color: black;
  }

  .select-category-container {
    width: 100%;
    font-size: 17px;
    height: 45px;
    margin-top: 2px;
  }

  select.select-category {
    width: 100%;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    border-color: rgb(118, 118, 118);
  }

  .file-label {
    width: 100%;
  }

  .file-name {
    width: 100%;
    background-color: white;
  }

  .size-radio {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    height: 40px;
    background-color: #ccc;
    margin-top: 3px;
    border-radius: 7px;
  }

  .color-container {
    position: relative;
  }

  .color-container .modal-input {
    width: 100%;
  }

  .color-button {
    position: absolute;
    display: flex;
    align-items: center;
    top: 50%;
    right: 1%;
    transform: translateY(-50%);
    border: 0;
    font-size: 25px;
    padding: 10px;
    color: #474747;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .color-button:hover {
    color: black;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
`;

export default productModalFormStyle;
