import { Duck } from './Duck';
import { MallardDuck } from './Ducks/MallardDuck';
import { ModelDuck } from './Ducks/ModelDuck';
import { FlyRocketPowered } from './FlyBehaviors/FlyRocketPowered';

class DuckSimulator {
  private static mallardDuck: Duck;
  private static modelDuck: Duck;

  public static run(): void {
    this.mallardDuck = new MallardDuck();
    this.modelDuck = new ModelDuck();

    this.mallardDuck.performFly();
    this.mallardDuck.performQuack();

    this.modelDuck.performFly();
    this.modelDuck.setFlyBehavior(new FlyRocketPowered());
    this.modelDuck.performFly();
  }
}

DuckSimulator.run();
