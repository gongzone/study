import Pizza from './Pizza';
import {
  ChicagoStyleCheesePizza,
  ChicagoStyleClamPizza,
  ChicagoStylePepperoniPizza,
  ChicagoStyleVeggiePizza,
  NYStyleCheesePizza,
  NYStyleClamPizza,
  NYStylePepperoniPizza,
  NYStyleVeggiePizza,
} from './Pizzas';

abstract class PizzaStore {
  public orderPizza(type: string) {
    let pizza: Pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  protected abstract createPizza(type: string): Pizza;
}

class NYPizzaStore extends PizzaStore {
  public createPizza(type: string): Pizza {
    let pizza!: Pizza;

    switch (type) {
      case 'cheese':
        pizza = new NYStyleCheesePizza();
        break;
      case 'pepperoni':
        pizza = new NYStylePepperoniPizza();
        break;
      case 'clam':
        pizza = new NYStyleClamPizza();
        break;
      case 'veggie':
        pizza = new NYStyleVeggiePizza();
        break;
    }

    return pizza;
  }
}

class ChicagoPizzaStore extends PizzaStore {
  public createPizza(type: string): Pizza {
    let pizza!: Pizza;

    switch (type) {
      case 'cheese':
        pizza = new ChicagoStyleCheesePizza();
        break;
      case 'pepperoni':
        pizza = new ChicagoStylePepperoniPizza();
        break;
      case 'clam':
        pizza = new ChicagoStyleClamPizza();
        break;
      case 'veggie':
        pizza = new ChicagoStyleVeggiePizza();
        break;
    }

    return pizza;
  }
}

const nyStore: PizzaStore = new NYPizzaStore();
const chicagoStore: PizzaStore = new ChicagoPizzaStore();

nyStore.orderPizza('cheese');
chicagoStore.orderPizza('clam');
