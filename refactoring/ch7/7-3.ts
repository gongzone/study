class Priority {
  static LOW = new Priority('low', 0);
  static NORMAL = new Priority('normal', 1);
  static HIGH = new Priority('high', 2);
  static RUSH = new Priority('rush', 3);

  private constructor(private name: string, private index: number) {}

  toString(): string {
    return this.name;
  }

  equals(other: Priority) {
    return this.index === other.index;
  }

  higherThan(other: Priority) {
    return this.index > other.index;
  }
}

class Order {
  constructor(public priority: Priority) {}

  isHighPriority() {
    return this.priority.higherThan(Priority.NORMAL);
  }
}

const orders = [new Order(Priority.NORMAL), new Order(Priority.HIGH), new Order(Priority.RUSH)];

const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;

console.log(highPriorityCount);
