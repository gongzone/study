// class Employee {
//   #name;
//   #type;
//   constructor(name, type) {
//     this.validateType(type);
//     this.#name = name;
//     this.#type = type;
//   }

//   validateType(arg) {
//     if (!['engineer', 'manager', 'salesperson'].includes(arg)) {
//       throw new Error(`${arg}라는 직원 유형은 없습니다.`);
//     }
//   }

//   get type() {
//     return this.#type;
//   }

//   toString() {
//     return `${this.#name} (${this.type})`;
//   }
// }

// const ellie = new Employee('엘리', 'engineer');
// const bob = new Employee('밥', 'manager');

/* Replace Type Code with Subclasses */

class Employee {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get type() {
    return 'employee';
  }

  toString() {
    return `${this.#name} (${this.type})`;
  }

  static createEmployee(name, type) {
    switch (type) {
      case 'engineer':
        return new Engineer(name);
      case 'salesperson':
        return new SalesPerson(name);
      case 'manager':
        return new Manager(name);
      default:
        throw new Error(`${type}라는 직원 유형은 없습니다.`);
    }
  }
}

class Engineer extends Employee {
  get type() {
    return 'engineer';
  }
}

class SalesPerson extends Employee {
  get type() {
    return 'salesperson';
  }
}

class Manager extends Employee {
  get type() {
    return 'manager';
  }
}

const ellie = new Engineer('엘리', 'engineer');
const bob = new Manager('밥', 'manager');
