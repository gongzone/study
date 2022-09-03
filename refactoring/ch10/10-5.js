// export class Site {
//   constructor(customer) {
//     this._customer = customer;
//   }

//   get customer() {
//     return this._customer;
//   }
// }

// export class Customer {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   get billingPlan() {
//     //
//   }

//   set billingPlan(arg) {
//     //
//   }

//   get paymentHistory() {
//     //
//   }
// }

// // 사용하는 부분
// export function customerName(site) {
//   const aCustomer = site.customer;
//   // 더 많은 코드가 여기에 있음
//   let customerName;
//   if (aCustomer === 'unknown') customerName = 'occupant';
//   else customerName = aCustomer.name;

//   return customerName;
// }

/* Introduce Special Case */

class Hotel {
  constructor() {
    this.rooms = [];
  }

  addRoom(roomNumber) {
    this.rooms[roomNumber] = new Room(roomNumber);
  }

  emptyRoom(roomNumber) {
    this.rooms[roomNumber] = new EmptyRoom(roomNumber);
  }

  cleanRooms(roomNumber) {
    this.rooms.forEach((room) => room.clean());
  }
}

class Room {
  constructor(roomNumber) {
    this.roomNumber = roomNumber;
  }

  clean() {
    console.log(`${this.roomNumber} 깨끗하게 청소합니다.`);
  }
}

class EmptyRoom extends Room {
  clean() {
    console.log(`방이 비워있습니다.`);
  }
}

const hotel = new Hotel();
hotel.addRoom(0);
hotel.addRoom(1);
hotel.cleanRooms();

/* -------------------------------------------------------------------------------------------------------------------- */

export class Site {
  constructor(customer) {
    this._customer = customer;
  }

  get customer() {
    return this._customer === 'unknown' ? new UnknownCustomer() : new Customer(this._customer);
  }
}

export class Customer {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get billingPlan() {
    //
  }

  set billingPlan(arg) {
    //
  }

  get paymentHistory() {
    //
  }
}

class UnknownCustomer extends Customer {
  get name() {
    return 'occupant';
  }
}

// 사용하는 부분
export function customerName(site) {
  const aCustomer = site.customer;
  // 더 많은 코드가 여기에 있음
  customerName = aCustomer.name;

  return customerName;
}
