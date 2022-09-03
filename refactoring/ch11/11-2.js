// // 예제 1
// function tenPercentRaise(person) {
//   person.salary = person.salary.multiply(1.1);
// }

// function fivePercentRaise(person) {
//   person.salary = person.salary.multiply(1.05);
// }

// // 예제 2
// export function baseCharge(usage) {
//   if (usage < 0) return usd(0);
//   const amount =
//     bottomBand(usage) * 0.03 + middleBand(usage) * 0.05 + topBand(usage) * 0.07;
//   return usd(amount);
// }

// function bottomBand(usage) {
//   return Math.min(usage, 100);
// }

// function middleBand(usage) {
//   return usage > 100 ? Math.min(usage, 200) - 100 : 0;
// }

// function topBand(usage) {
//   return usage > 200 ? usage - 200 : 0;
// }

// function usd(value) {
//   return {
//     currency: '$',
//     currencyName: 'USD',
//     value: value,
//   };
// }

/* Parameterize Function */

// 예제 1
function raise(person, factor) {
  person.salary = person.salary.multiply(1 + factor);
}

// 예제 2
export function baseCharge(usage) {
  if (usage < 0) return usd(0);
  const amount =
    withinBand(usage, 0, 100) * 0.03 +
    withinBand(usage, 100, 200) * 0.05 +
    withinBand(usage, 200, Infinity) * 0.07;
  return usd(amount);
}

function withinBand(usage, bottom, top) {
  return usage > bottom ? Math.min(usage, top) - bottom : 0;
}

function usd(value) {
  return {
    currency: '$',
    currencyName: 'USD',
    value: value,
  };
}
