import { QuackBehavior } from '../Behaviors';

export class Quack implements QuackBehavior {
  quack(): void {
    console.log('Quack');
  }
}
