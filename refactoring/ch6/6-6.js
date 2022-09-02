// let defaultOwner = { firstName: '마틴', lastName: '파울러' };

// export function getDefaultOwner() {
//   return defaultOwner;
// }

/* Encapsulate Variable */

class Person {
  #lastName;
  #firstName;

  constructor(data) {
    this.#lastName = data.lastName;
    this.#firstName = data.firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  get firstName() {
    return this.#firstName;
  }
}

let defaultOwner = new Person({ firstName: '마틴', lastName: '파울러' });

// 객체는 mutable함 바로 그대로 반환하면 안됨, 불변성을 지키자. Rest Operate 사용 {...defaultOwner} 했을 때, 안에 중첩된 객체가 있다면 그
// 객체의 불변성을 지킬 수 있다는 보장은 없음. 따라서 데이터를 클래스화 하는 이유가 있음.

export function getDefaultOwner() {
  return defaultOwner;
}
