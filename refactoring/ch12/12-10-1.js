// class Booking {
//   constructor(show, date) {
//     this._show = show;
//     this._date = date;
//   }

//   get hasTalkback() {
//     return this._show.hasOwnProperty('talkback') && !this.isPeakDay;
//   }

//   get basePrice() {
//     let result = this._show.price;

//     if (this.isPeakDay) {
//       result += Math.round(result * 0.15);
//     }

//     return result;
//   }
// }

// class PremiumBooking extends Booking {
//   constructor(show, date, extras) {
//     super(show, date);
//     this._extras = extras;
//   }

//   get hasTalkback() {
//     return this._show.hasOwnProperty('talkback');
//   }

//   get basePrice() {
//     return Math.round(super.basePrice + this._extras.PremiumFee);
//   }

//   get hasDinner() {
//     return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
//   }
// }

// const booking = new Booking(show, date);
// const premiumBooking = new PremiumBooking(show, date, extras);

/* Replace subclass with Delegate */

class Booking {
  #show;
  #date;
  constructor(show, date) {
    this.#show = show;
    this.#date = date;
  }

  get hasTalkback() {
    return this.#premiumDelegate
      ? this.#premiumDelegate.hasTalkback
      : this.#show.hasOwnProperty('talkback') && !this.isPeakDay;
  }

  get #privateBasePrice() {
    let result = this.#show.price;

    if (this.isPeakDay) {
      result += Math.round(result * 0.15);

      return result;
    }
  }

  get basePrice() {
    let result = this.#show.price;

    if (this.isPeakDay) {
      result += Math.round(result * 0.15);
    }

    return this.#premiumDelegate
      ? this.#premiumDelegate.extendBasePrice(result)
      : this.#privateBasePrice;
  }

  get hasDinner() {
    return this.#premiumDelegate ? this.#premiumDelegate.hasDinner : undefined;
  }

  #bePremium(extras) {
    this.#premiumDelegate = new PremiumBookingDelegate(this, extras);
  }

  static createBooking(show, date) {
    return new Booking(show, date);
  }

  static createPremiumBooking(show, date, extras) {
    const result = new Booking(show, date, extras);
    result.#bePremium(extras);
    return result;
  }
}

class PremiumBookingDelegate {
  #host;
  #extras;
  constructor(hostBooking, extras) {
    this.#host = hostBooking;
    this.#extras = extras;
  }

  get hasTalkback() {
    return this.#host.#show.hasOwnProperty('talkback');
  }

  get basePrice() {
    return Math.random(this.#host._privateBasePrice + this.#extras.PremiumFee);
  }

  get hasDinner() {
    return this.#extras.hasOwnProperty('dinner') && !this.#host.isPeakDay;
  }

  extendBasePrice(base) {
    return Math.round(base + this.#extras.premiumFee);
  }
}

const booking = Booking.createBooking(show, date);
const premiumBooking = Booking.createPremiumBooking(show, date, extras);
