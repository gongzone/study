interface FlyBehavior {
  fly(): void;
}

class FlyWithWings implements FlyBehavior {
  fly() {
    console.log('I`m flying!!');
  }
}

class FlyNoWay implements FlyBehavior {
  fly() {
    console.log('I can`t fly');
  }
}

class FlyRocketPowered implements FlyBehavior {
  fly() {
    console.log('I`m flying with a rocket!');
  }
}

interface QuackBehavior {
  quack(): void;
}

class Quack implements QuackBehavior {
  quack() {
    console.log('Quack');
  }
}

class Squeak implements QuackBehavior {
  quack() {
    console.log('Squeak');
  }
}

class MuteQuack implements QuackBehavior {
  quack() {
    console.log('<< Silence >>');
  }
}

abstract class Duck {
  public flyBehavior: FlyBehavior = new FlyWithWings();
  public quackBehavior: QuackBehavior = new Quack();

  constructor() {}

  abstract display(): void;

  public performFly(): void {
    this.flyBehavior.fly();
  }

  public performQuack(): void {
    this.quackBehavior.quack();
  }

  public swim(): void {
    console.log('All ducks float, even decoys!');
  }

  public setFlyBehavior(fb: FlyBehavior) {
    this.flyBehavior = fb;
  }

  public setQuackBehavior(qb: QuackBehavior) {
    this.quackBehavior = qb;
  }
}

class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }

  public display(): void {
    console.log('I`m real mallad duck');
  }
}

class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Quack();
  }

  public display(): void {
    console.log('I`m a model duck');
  }
}

class DuckSimulator {
  private static mallard: Duck;
  private static model: Duck;

  public static run() {
    this.mallard = new MallardDuck();
    this.model = new ModelDuck();

    this.mallard.performFly(); // "I`m flying!!"
    this.mallard.performQuack(); // "Quack"

    this.model.performFly(); // "I can`t fly"
    this.model.setFlyBehavior(new FlyRocketPowered());
    this.model.performFly(); // "I`m flying with a rocket!"
  }
}

DuckSimulator.run();
