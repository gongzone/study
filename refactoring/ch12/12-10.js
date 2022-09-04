// 상속 (수직적인 관계)
// 다중 상속 불가, 수정 및 확장이 어려움
// Composition 사용!

class Printer {
  print() {
    console.log('기본적인 출력!');
  }
}

class RedPrinter extends Printer {
  print() {
    console.log('빨간색 출력!');
  }
}

const printers = [new Printer(), new RedPrinter()];
printers.forEach((printer) => printer.print());
