// const values = [];
// function getValueForPeriod(periodNumber) {
//   const value = values[periodNumber];
//   if (!value) {
//     throw new Error('value is undefined');
//   }
//   return value;
// }

// try {
//   getValueForPeriod(-10);
// } catch (error) {
//   console.log('에러 발생!');
// }

/* 예외를 사전확인으로 바꾸기 */

// 예상할 수 있는 상황에서 에러를 던지는 것은 남용이다.

const values = [];
function getValueForPeriod(periodNumber) {
  return values[periodNumber] ?? 0;
  // if (periodNumber < 0 || periodNumber >= values.length) {
  //   return 0;
  // }

  // return values[periodNumber];
}

getValueForPeriod(-10);
