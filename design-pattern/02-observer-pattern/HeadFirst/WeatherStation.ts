import { WeatherData } from './WeatherData';
import { CurrentConditionsDisplay } from './displays';

class WeatherStation {
  private static weatherData: WeatherData;
  private static currentDisplay: CurrentConditionsDisplay;
  // private static statisticsDisplay: StatisticsDisplay;
  // private static forecastDisplay: ForecastDisplay;

  public static operate(): void {
    this.weatherData = new WeatherData();
    this.currentDisplay = new CurrentConditionsDisplay(this.weatherData);
    // this.statisticsDisplay = new StatisticsDisplay(this.weatherData)
    // this.forecastDisplay = new ForecastDisplay(this.weatherData)

    this.weatherData.setMeasurements(80, 60, 30.4);
    this.weatherData.setMeasurements(82, 70, 29.2);
    this.weatherData.setMeasurements(78, 90, 29.2);
  }
}

WeatherStation.operate();
