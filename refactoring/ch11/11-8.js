// export class Employee {
//   constructor(name, typeCode) {
//     this._name = name;
//     this._typeCode = typeCode;
//   }
//   get name() {
//     return this._name;
//   }

//   get type() {
//     return Employee.legalTypeCodes[this._typeCode];
//   }

//   static get legalTypeCodes() {
//     return { E: 'Engineer', M: 'Manager', S: 'Salesman' };
//   }
// }

/* Replace Constructor with Factory Function */

export class Employee {
  constructor(name, typeCode) {
    // private constructor
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: 'Engineer', M: 'Manager', S: 'Salesman' };
  }

  static createEngineer(name) {
    return new Employee(name, 'E');
  }

  static createSeniorEngineer(name) {
    return new Employee(name, 'S');
  }

  static createMarketer(name) {
    return new Employee(name, 'M');
  }
}
