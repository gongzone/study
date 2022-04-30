import SimplePizzaFactory from './SimplePizzaFactory';
import Pizza from './Pizza';

class PizzaStore {
  factory: SimplePizzaFactory;

  constructor(factory: SimplePizzaFactory) {
    this.factory = factory;
  }

  public orderPizza(type: string) {
    let pizza: Pizza = this.factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}

const pizzaStoreA = new PizzaStore(new SimplePizzaFactory());
pizzaStoreA.orderPizza('veggie');
