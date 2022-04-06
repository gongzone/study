import { Duck } from '../Duck';
import { FlyNoWay } from '../FlyBehaviors/FlyNoWay';
import { MuteQuack } from '../QuackBehaviors/MuteQuack';

export class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new MuteQuack();
  }

  public display(): void {
    console.log('I`m ModelDuck');
  }
}
