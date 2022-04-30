import Beverage from './Beverage';
import CondimentDecorator from './CondimentDecorator';

export class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Mocha';
  }

  public cost(): number {
    return this.beverage.cost() + 0.2;
  }
}

export class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Whip';
  }

  public cost(): number {
    return this.beverage.cost() + 0.15;
  }
}

export class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Soy';
  }

  public cost(): number {
    return this.beverage.cost() + 0.1;
  }
}
