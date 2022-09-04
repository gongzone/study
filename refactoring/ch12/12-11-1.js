// class List {}

// class Stack extends List {}

/* Replace Superclass with Delegate */

class List {}

class Stack {
  constructor() {
    this.storage = new List();
  }

  // 원하는 동작들만 외부로 노출

  pop() {}

  push() {}
}
