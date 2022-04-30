abstract class Pizza {
  protected name: string = '';

  public prepare(): void {
    console.log(`Preparing ${this.name}`);
  }
  public bake(): void {
    console.log(`Baking ${this.name}`);
  }
  public cut(): void {
    console.log(`Cutting ${this.name}`);
  }
  public box(): void {
    console.log(`Boxing ${this.name}`);
  }
}

export default Pizza;
