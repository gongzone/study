import Beverage from './Beverage';

export class Espresso extends Beverage {
  constructor() {
    super();
    this.description = 'Espresso';
  }

  public cost(): number {
    return 1.99;
  }
}

export class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = 'House Blend Coffee';
  }

  public cost(): number {
    return 0.89;
  }
}

export class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = 'DarkRoast';
  }

  public cost(): number {
    return 2.59;
  }
}
