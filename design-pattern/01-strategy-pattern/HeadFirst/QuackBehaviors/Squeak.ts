import { QuackBehavior } from '../Behaviors';

export class Squeak implements QuackBehavior {
  quack(): void {
    console.log('Squeak');
  }
}
