const modalStlye = /* html */ `
<style>
  .modal-layout {
    position: fixed;
    z-index: 100;
    top: 50%;
    left: 50%;
    min-width: 500px;
    max-height: 425px;
    padding: 40px 50px;
    background-color: #f4f7f6;
    visibility: hidden;
    opacity: 0;
    transform: translate(-50%, -45%);
    transition: all 0.3s;
    overflow-y: scroll;
    font-family: 'Roboto', 'Noto Sans KR', sans-serif;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .show-modal {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, -50%);
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
    border: 0;
    color: #868e96;
    background-color: transparent;
    font-size: 30px;
    cursor: pointer;
  }


  .modal-title {
    color: #24292f;
    font-size: 21px;
    font-weight: bold;
  }

</style>
`;

export default modalStlye;
