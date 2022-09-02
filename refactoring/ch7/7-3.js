// export class Order {
//   constructor(data) {
//     this.priority = data.priority;
//   }
// }

// const orders = [
//   new Order({ priority: 'normal' }),
//   new Order({ priority: 'high' }),
//   new Order({ priority: 'rush' }),
// ];

// const highPriorityCount = orders.filter(
//   (o) => 'high' === o.priority || 'rush' === o.priority
// ).length;

/* Replace Primitive with Object */

export class Order {
  #priority;

  constructor(data) {
    this.#priority = data.priority;
  }

  isHighPriority() {
    return this.#priority.higherThan('noraml');
  }
}

class Priority {
  #value;

  constructor(value) {
    if (Priority.legalValues().includes(value)) {
      this.#value = value;
    } else {
      throw new Error(`${value} is invalid for Priority`); // 보안에 취약함(생성자 안에서 에러를 던지는 것)
    }
  }

  get Index() {
    return Priority.legalValues().indexOf(this.#value);
  }

  equals(other) {
    return this.#index === other.index;
  }

  higherThan(other) {
    return this.#index > other.index;
  }

  static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }
}

const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
];

const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;
