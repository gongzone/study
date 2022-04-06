import { Strategy } from './Strategy';

export class ConcreteStrategyA implements Strategy {
  public doAlgorithm(data: any): void {
    console.log('doing A! ' + data);
  }
}

export class ConcreteStrategyB implements Strategy {
  public doAlgorithm(data: any): void {
    console.log('doing B! ' + data);
  }
}
