// targetTemperature(aPlan);

// // 다른모듈에 있는 함수라고 가정
// function targetTemperature(aPlan) {
//   currentTemperature = thermostat.currentTemperature;
//   // ...
// }

/* Replace Query with parameter */

// 외부 의존성이 있는 경우는 함수 매개변수로 받는 것이 더 이상적이다.

targetTemperature(aPlan, thermostat.currentTemperature);

// 다른모듈에 있는 함수라고 가정
function targetTemperature(plan, currentTemperature) {
  currentTemperature = currentTemperature;
  // ...
}
