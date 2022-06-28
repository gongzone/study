const style = document.createElement('link');
style.setAttribute('rel', 'stylesheet');
style.setAttribute('href', '/header/header.css');

const template = document.createElement('template');
template.innerHTML =
  /* html */
  `
<ul class="flex-style">
  <li>
    <a class="link" href="/user-profile">회원정보</a>
    <span class="mx-3">/</span>
  </li>

  <li id="nav-mid">
    <div class="dropdown">
    <span class="dropdown-trigger link"><i class="fa-solid fa-angle-down ml-2"></i></span>
    <div class="dropdown-menu" id="dropdown-menu3" role="menu">
      <div class="dropdown-content">
      </div class="dropdown-content">
    </div>
    <span class="mx-3">/</span>
    </div>
  </li>

  <li>
    <a class="logout link" href="#" role="button">로그아웃</a>
  </li>
</ul>
`;

export default class HeaderNav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.isLogin = localStorage.getItem('token') ? true : false;
    this.isAdmin = localStorage.getItem('role') === 'admin-user' ? true : false;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return [];
  }

  connectedCallback() {
    const navMid = this.shadowRoot.getElementById('nav-mid');

    if (!this.isLogin) {
      navMid.remove();
      return;
    }

    const config = navMid.querySelector('.dropdown-trigger');
    const content = navMid.querySelector('.dropdown-content');

    this.isAdmin ? this.adminRender(config, content) : this.userRenader(config, content);
  }

  attributeChangedCallback(name, oldValue, newValue) {}

  disconnectedCallback() {}

  adminRender(config, content) {
    config.textContent = '관리자 설정';
    content.innerHTML =
      /* html */
      `
        <a href="/admin-product" class="dropdown-item">
          상품 관리
        </a>
        <a href="/admin-category" class="dropdown-item ">
          카테고리 관리
        </a>
        <a href="/admin-order" class="dropdown-item">
          주문 관리
        </a>
      `;
  }

  userRenader(config, content) {
    config.textContent = '마이 페이지';
    content.innerHTML =
      /* html */
      `
      <a href="/user-order" class="dropdown-item">
        주문 조회
      </a>
      <a href="/cart" class="dropdown-item ">
        장바구니
      </a>
    `;
  }
}
