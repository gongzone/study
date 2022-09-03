// class Customer {
//   constructor() {
//     this.discountRate = 0;
//   }
//   applyDiscount(number) {
//     return this.discountRate ? number - this.discountRate * number : number;
//   }
// }

/* Introduce Assertion */

import { strict as assert } from 'node:assert';

class Customer {
  constructor() {
    this.discountRate = 0;
  }

  applyDiscount(number) {
    assert(number >= 0);
    return this.discountRate ? number - this.discountRate * number : number;
  }
}

new Customer().applyDiscount(-1);
