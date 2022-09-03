// class Person {
//   #name;
//   #officeAreaCode;
//   #officeNumber;
//   constructor(name, areaCode, number) {
//     this.#name = name;
//     this.#officeAreaCode = areaCode;
//     this.#officeNumber = number;
//   }

//   get name() {
//     return this.#name;
//   }

//   set name(arg) {
//     this.#name = arg;
//   }

//   get telephoneNumber() {
//     return `(${this.officeAreaCode}) ${this.officeNumber}`;
//   }

//   get officeAreaCode() {
//     return this.#officeAreaCode;
//   }

//   set officeAreaCode(arg) {
//     this.#officeAreaCode = arg;
//   }

//   get officeNumber() {
//     return this.#officeNumber;
//   }

//   set officeNumber(arg) {
//     this.#officeNumber = arg;
//   }
// }

// const person = new Person('엘리', '010', '12345678');
// console.log(person.name);
// console.log(person.officeAreaCode);
// console.log(person.officeNumber);
// console.log(person.telephoneNumber);

/* Extract Class */

class Person {
  #name;
  #telephoneNumber;

  constructor(name, telephoneNumber) {
    this.#name = name;
    this.#telephoneNumber = telephoneNumber;
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get telephoneNumber() {
    return this.#telephoneNumber.toString;
  }

  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }

  get officeNumber() {
    return this.#telephoneNumber.number;
  }
}

class TelephoneNumber {
  #areaCode;
  #number;

  constructor(area, number) {
    this.#areaCode = area;
    this.#number = number;
  }

  get areaCode() {
    return this.#areaCode;
  }

  set areaCode(arg) {
    this.#areaCode = arg;
  }

  get number() {
    return this.#number;
  }

  set number(arg) {
    this.#number = arg;
  }

  get toString() {
    return `(${this.#areaCode}) ${this.#number}`;
  }
}

const telephoneNumber = new TelephoneNumber('010', '12345678');
const person = new Person('엘리', telephoneNumber);

console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
