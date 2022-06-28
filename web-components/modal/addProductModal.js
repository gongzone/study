const styleText = `
<style>
  .signup-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }

  .signup-ul {
    display: grid;
    row-gap: 15px;
    margin-bottom: 40px;
    padding: 0;
  }

  .signup-li {
    display: flex;
    flex-direction: column;
    }

  .signup-input {
    font-size: 17px;
    height: 45px;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    margin-top: 2px;
    padding: 0 8px;
  }

  .signup-input:focus {
      outline: none;
      background: #e7e7fc;
    }

  .signup-error {
    margin-top: 3.2px;
    color: #e75349;
  }

  .signup-button {
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

  .signup-button:hover {
    background-color: #5eaca0;
  }

</style>
`;

const markUpText = `
    <form class="signup-form">
      <ul class="signup-ul">
        <li class="signup-li">
          <label class="signup-label" htmlFor="email">
            상품 이름
          </label>
          <input class="signup-input" type="text" id="email" />
        </li>
        <li class="signup-li">
          <label class="signup-label" htmlFor="nickname">
            카테고리
          </label>
          <input class="signup-input" type="text" id="nickname" />
        </li>
        <li class="signup-li">
          <label class="signup-label" htmlFor="nickname">
            가격
          </label>
          <input class="signup-input" type="text" id="nickname" />
        </li>
        <li class="signup-li">
          <label class="signup-label" htmlFor="nickname">
            상품 이미지
          </label>
          <input class="signup-input" type="text" id="nickname" />
        </li>
        <li class="signup-li">
          <label class="signup-label" htmlFor="nickname">
            상품 정보
          </label>
          <input class="signup-input" type="text" id="nickname" />
        </li>
        <li class="signup-li">
          <label class="signup-label" htmlFor="nickname">
            사이즈
          </label>
          <input class="signup-input" type="text" id="nickname" />
        </li>
        <li class="signup-li">
          <label class="signup-label" htmlFor="nickname">
            색상
          </label>
          <input class="signup-input" type="text" id="nickname" />
        </li>                                
      </ul>
      <button class="signup-button" type="submit">
        등록하기
      </button>
    </form>
`;

const addProductModal = document.createElement('template');
addProductModal.innerHTML = `
  ${styleText}
  ${markUpText}
`;

export default class AddProductModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(addProductModal.content.cloneNode(true));
  }

  connectedCallback() {}
}
