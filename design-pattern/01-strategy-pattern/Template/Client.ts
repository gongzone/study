import { Context } from './Context';
import { ConcreteStrategyA, ConcreteStrategyB } from './ConcreteStrategies';

const context = new Context(new ConcreteStrategyA());
context.doSomeBuisinessLogic('data');

context.setStrategy(new ConcreteStrategyB());
context.doSomeBuisinessLogic('data');
