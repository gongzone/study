import { Observer, DisplayElement } from './interfaces';
import { WeatherData } from './WeatherData';

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number;
  private humidity: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);

    this.temperature = this.weatherData.getTemperature();
    this.humidity = this.weatherData.getHumidity();
  }

  update() {
    this.temperature = this.weatherData.getTemperature();
    this.humidity = this.weatherData.getHumidity();
    this.display();
  }

  display() {
    console.log(`Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`);
  }
}

// class StatisticsDisplay implements Observer, DisplayElement {}
// class ForecastDisplay implements Observer, DisplayElement {}
