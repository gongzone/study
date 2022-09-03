// class Person {
//   get name() {}
//   set name(value) {}
// }

/* Remove Setting Method */

// 데이터가 읽기만 가능하는지 쓰기도 가능한지 파악 후 쓰기가 필요없다면 세터를 삭제한다.

class Person {
  get name() {}
}
