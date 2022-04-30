import Beverage from './Beverage';
import { DarkRoast, Espresso, HouseBlend } from './Beverages';
import { Mocha, Soy, Whip } from './Condiments';

class StarbuzzCoffee {
  static beverage: Beverage = new Espresso();
  static beverage2: Beverage = new HouseBlend();
  static beverage3: Beverage = new DarkRoast();

  public static run(): void {
    this.printOrder(this.beverage);

    this.beverage2 = new Mocha(this.beverage2);
    this.beverage2 = new Mocha(this.beverage2);
    this.beverage2 = new Whip(this.beverage2);
    this.printOrder(this.beverage2);

    this.beverage3 = new Soy(this.beverage3);
    this.beverage3 = new Mocha(this.beverage3);
    this.beverage3 = new Whip(this.beverage3);
    this.printOrder(this.beverage3);
  }

  public static printOrder(beverage: Beverage): void {
    const statement = `${beverage.getDescription()} $${beverage.cost()} `;
    console.log(statement);
  }
}

StarbuzzCoffee.run();
