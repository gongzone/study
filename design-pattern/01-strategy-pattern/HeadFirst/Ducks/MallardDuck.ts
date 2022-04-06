import { Duck } from '../Duck';
import { FlyWithWings } from '../FlyBehaviors/FlyWithWings';
import { Quack } from '../QuackBehaviors/Quack';

export class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }

  public display(): void {
    console.log('I`m MallardDuck');
  }
}
