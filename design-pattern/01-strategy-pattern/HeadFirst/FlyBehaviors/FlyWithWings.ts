import { FlyBehavior } from '../Behaviors';

export class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log('I`m flying!');
  }
}
