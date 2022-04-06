import { FlyBehavior } from '../Behaviors';

export class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log('I can`t fly!');
  }
}
