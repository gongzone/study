class App {
  private static instance: App;

  private constructor() {}

  public static getInstance(): App {
    if (!App.instance) App.instance = new App();

    return App.instance;
  }

  public start() {
    console.log('start!');
  }
}

(() => {
  const app = App.getInstance();
  app.start();
})();
