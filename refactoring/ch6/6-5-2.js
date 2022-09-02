// export default class Book {
//   #reservations;
//   constructor() {
//     this.#reservations = [];
//   }

//   addReservation(customer) {
//     this.#reservations.push(customer);
//   }

//   hasReservation(customer) {
//     return this.#reservations.some(
//       (reservedCustomer) => reservedCustomer.id === customer.id
//     );
//   }
// }

/* Change Function Declaration */

export default class Book {
  #reservations;

  constructor() {
    this.#reservations = [];
  }

  // 함수 매개변수로 flag(boolean)를 쓰는 것은 자제, 필요하다면 default 값 설정
  addReservation(customer, isPriority = false) {
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some((reservedCustomer) => reservedCustomer.id === customer.id);
  }
}
