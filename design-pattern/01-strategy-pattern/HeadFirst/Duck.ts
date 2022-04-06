import { FlyBehavior, QuackBehavior } from './Behaviors';
import { FlyWithWings } from './FlyBehaviors/FlyWithWings';
import { Quack } from './QuackBehaviors/Quack';

export abstract class Duck {
  protected flyBehavior: FlyBehavior = new FlyWithWings();
  protected quackBehavior: QuackBehavior = new Quack();

  public abstract display(): void;

  public setFlyBehavior(flyBehavior: FlyBehavior): void {
    this.flyBehavior = flyBehavior;
  }

  public setQuackBehavior(quackBehavior: QuackBehavior): void {
    this.quackBehavior = quackBehavior;
  }

  public performFly(): void {
    this.flyBehavior.fly();
  }

  public performQuack(): void {
    this.quackBehavior.quack();
  }

  public swim(): void {
    console.log('All ducks can swim, even model duck');
  }
}
