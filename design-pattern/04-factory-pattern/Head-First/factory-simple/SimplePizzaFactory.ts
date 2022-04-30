import Pizza from './Pizza';
import { CheesePizza, PepperoniPizza, ClamPizza, VeggiePizza } from './Pizzas';

class SimplePizzaFactory {
  public createPizza(type: string): Pizza {
    let pizza!: Pizza;

    switch (type) {
      case 'cheese':
        pizza = new CheesePizza();
        break;
      case 'pepperoni':
        pizza = new PepperoniPizza();
        break;
      case 'clam':
        pizza = new ClamPizza();
        break;
      case 'veggie':
        pizza = new VeggiePizza();
        break;
    }

    return pizza;
  }
}

export default SimplePizzaFactory;
