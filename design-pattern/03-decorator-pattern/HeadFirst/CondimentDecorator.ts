import Beverage from './Beverage';
import { Espresso } from './Beverages';

abstract class CondimentDecorator extends Beverage {
  beverage: Beverage = new Espresso();
  public abstract getDescription(): string;
}

export default CondimentDecorator;
