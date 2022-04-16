import { Subject, Observer } from './interfaces';

export class WeatherData implements Subject {
  private observers: Observer[];
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.observers = [];
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
  }

  registerObserver(o: Observer) {
    this.observers.push(o);
  }

  removeObserver(o: Observer) {
    const index = this.observers.indexOf(o);

    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers() {
    for (let observer of this.observers) {
      observer.update();
    }
  }

  measurementsChanged() {
    this.notifyObservers();
  }

  getTemperature() {
    return this.temperature;
  }

  getHumidity() {
    return this.humidity;
  }

  getPressure() {
    return this.pressure;
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = parseFloat(temperature.toFixed(1));
    this.humidity = parseFloat(humidity.toFixed(1));
    this.pressure = parseFloat(pressure.toFixed(1));
    this.measurementsChanged();
  }

  // other WeatherData methods here
}
