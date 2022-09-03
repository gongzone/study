// // 예제 1
// function setDimension(name, value) {
//   if (name === 'height') {
//     this._height = value;
//     return;
//   }
//   if (name === 'width') {
//     this._width = value;
//     return;
//   }
// }

// // 예제 2
// class Concert {
//   book(customer, isPremium) {}
// }

// // 예제 3
// function setSwitch(on);

/* Remove Flag Argument */

// boolean type(flag)를 이용해서 함수를 제어하는 것은 정말정말 나쁜 것이다.

// 예제 1
function setWidth(value) {
  this._width = value;
}

function setHeight(value) {
  this._height = value;
}

// 예제 2
class Concert {
  regularBook(customer) {}
  premiumBook(customer) {}

  // 외부에서 사용하는 함수는 플래그 제거, 내부에서 사용하는 함수는 플래그 사용 인정(어쩔수 없는 경우)
  #book(customer, isPremium) {}
}

// 예제 3

// 명령형으로 개별적인 함수 구성 (매개변수도 제거 -> 매개변수가 없는 함수가 좋은 함수다.)

function swtichOn();
function switchOff();

