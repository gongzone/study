// import { acquireReading, baseRate } from './6-10.js';

// const aReading = acquireReading();

// const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
// console.log(baseCharge);

import { acquireReading, enrichReading } from './6-10.js';

const rawReading = acquireReading();
const reading = enrichReading(rawReading);

console.log(reading.baseCharge);
console.log(reading.taxableCharge);
