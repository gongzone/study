interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(): void;
}

interface Observer {
  update(): void;
}

interface DisplayElement {
  display(): void;
}

class WeatherData implements Subject {
  private observers: Observer[];
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.observers = [];
  }

  public registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  public removeObserver(o: Observer): void {
    const index = this.observers.indexOf(o);

    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  public notifyObservers(): void {
    for (let observer of this.observers) {
      observer.update();
    }
  }

  public measurementsChanged(): void {
    this.notifyObservers();
  }

  public getTemperature(): number {
    return this.temperature;
  }

  public getHumidity(): number {
    return this.humidity;
  }

  public getPressure(): number {
    return this.pressure;
  }

  public setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = parseFloat(temperature.toFixed(1));
    this.humidity = parseFloat(humidity.toFixed(1));
    this.pressure = parseFloat(pressure.toFixed(1));
    this.measurementsChanged();
  }

  // other WeatherData methods here
}

class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number;
  private humidity: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  public update(): void {
    this.temperature = this.weatherData.getTemperature();
    this.humidity = this.weatherData.getHumidity();
    this.display();
  }

  public display(): void {
    console.log(`Current Conditions: ${this.temperature}F degrees and ${this.humidity} % humidty`);
  }
}

// class StatisticsDisplay implements Observer, DisplayElement {}
// class ForecastDisplay implements Observer, DisplayElement {}

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
