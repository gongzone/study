// class Department {
//   get totalAnnualCost() {}
//   get name() {}
//   get headCount() {}
// }

// class Employee {
//   get annualCost() {}
//   get name() {}
//   get id() {}
// }

/* Extract Superclass */

class Party {
  get name() {}
  get annualCost() {}
}

class Department extends Party {
  get headCount() {}
}

class Employee extends Party {
  get id() {}
}
