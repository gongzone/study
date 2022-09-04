// function createBird(bird) {
//   switch (bird.type) {
//     case '유럽 제비':
//       return new EuropeanSwallow(bird);
//     case '아프리카 제비':
//       return new AfricanSwallow(bird);
//     case '노르웨이 파랑 앵무':
//       return new NorwegianBlueParrot(bird);
//     default:
//       return new Bird(bird);
//   }
// }

// class Bird {
//   constructor(data) {
//     this._name = data.name;
//     this._plumage = data.plumage;
//   }

//   get name() {
//     return this._name;
//   }

//   get plumage() {
//     return this._plumage || '보통이다';
//   }

//   get airSpeedVelocity() {
//     return null;
//   }
// }

// class EuropeanSwallow extends Bird {
//   get airSpeedVelocity() {
//     return 35;
//   }
// }

// class AfricanSwallow extends Bird {
//   constructor(data) {
//     super(data);

//     this._numberOfCoconuts = data.numberOfCoconuts;
//   }

//   get airSpeedVelocity() {
//     return 40 - 2 * this._numberOfCoconuts;
//   }
// }

// class NorwegianBlueParrot extends Bird {
//   constructor(data) {
//     super(data);

//     this._voltage = data.voltage;
//     this._isNailed = data.isNailed;
//   }

//   get plumage() {
//     if (this._voltage > 100) {
//       return '그을렸다';
//     } else {
//       return this._plumage || '예쁘다';
//     }
//   }

//   get airSpeedVelocity() {
//     return this._isNailed ? 0 : 10 + this._voltage / 10;
//   }
// }

/* Replace subclass with Delegate */

function createBird(data) {
  return new Bird(data);
}

class Bird {
  constructor(data) {
    this._name = data.name;
    this._plumage = data.plumage;
    this._specialPlumage = this.selectSpecialDelegate(data); // 외부로부터 주입받는 형태로 받는 것이 맞다. 이 코드는 틀렸다.
  }

  get name() {
    return this._name;
  }

  get plumage() {
    return this._specialDelegate.plumage;
  }

  get airSpeedVelocity() {
    return this._speciesDelegate.airSpeedVelocity;
  }

  selectSpecialDelegate(data) {
    switch (data.type) {
      case '유럽 제비':
        return new EuropeanSwallowDelegate(data, this);
      case '아프리카 제비':
        return new AfricanSwallowDelegate(data, this);
      case '노르웨이 파랑 앵무':
        return new NorwegianBlueParrotDelegate(data, this);
      default:
        return new SpeciesDelegate(data, this);
    }
  }
}
class SpeciesDelegate {
  constructor(data, bird) {
    this._bird = bird;
  }

  get plumage() {
    return this._bird._plumage || '보통이다';
  }

  get airSpeedVelocity() {
    return null;
  }
}

class EuropeanSwallowDelegate extends SpeciesDelegate {
  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallowDelegate extends SpeciesDelegate {
  constructor(data) {
    super(data, bird);

    this._numberOfCoconuts = data.numberOfCoconuts;
  }

  get airSpeedVelocity() {
    return 40 - 2 * this._numberOfCoconuts;
  }

  get plumage() {
    return this._bird._plumage || '보통이다';
  }
}

class NorwegianBlueParrotDelegate extends SpeciesDelegate {
  constructor(data, bird) {
    super(data, bird);

    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }

  get airSpeedVelocity() {
    return this._isNailed ? 0 : 10 + this._voltage / 10;
  }

  get plumage() {
    if (this._voltage > 100) {
      return '그을렸다';
    } else {
      return this._bird_plumage || '예쁘다';
    }
  }
}
