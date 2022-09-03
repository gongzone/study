// export class Account {
//   constructor(accountType, daysOverdrawn) {
//     this.type = accountType;
//     this._daysOverdrawn = daysOverdrawn;
//   }

//   get bankCharge() {
//     let result = 4.5;
//     if (this._daysOverdrawn > 0) result += this.overdraftCharge;
//     return result;
//   }

//   get overdraftCharge() {
//     if (this.type.isPremium) {
//       const baseCharge = 10;
//       if (this._daysOverdrawn <= 7) return baseCharge;
//       else return baseCharge + (this._daysOverdrawn - 7) * 0.85;
//     } else return this._daysOverdrawn * 1.75;
//   }

//   get daysOverdrawn() {
//     return this._daysOverdrawn;
//   }
// }

// export class AccountType {
//   constructor(type) {
//     this._type = type;
//   }
//   get isPremium() {
//     return this._type === 'Premium';
//   }
// }

/* Move Function */

export class Account {
  constructor(accountType, daysOverdrawn) {
    this.type = accountType;
    this._daysOverdrawn = daysOverdrawn;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get daysOverdrawn() {
    return this._daysOverdrawn;
  }
}

export class AccountType {
  constructor(type) {
    this._type = type;
  }
  get isPremium() {
    return this._type === 'Premium';
  }

  // 강사는 Account 클래스 안에 있는 것이 맞다고 봄.

  overdraftCharge(daysOverdrawn) {
    if (!this.isPremium) {
      return daysOverdrawn * 1.75;
    }

    const baseCharge = 10;
    return daysOverdrawn <= 7 ? baseCharge : baseCharge + (daysOverdrawn - 7) * 0.85;
  }
}
