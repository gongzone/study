import Pizza from './Pizza';

export class CheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'CheesPizza';
  }
}

export class PepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = 'PepperoniPizza';
  }
}

export class ClamPizza extends Pizza {
  constructor() {
    super();
    this.name = 'ClamPizza';
  }
}

export class VeggiePizza extends Pizza {
  constructor() {
    super();
    this.name = 'VeggiePizza';
  }
}
