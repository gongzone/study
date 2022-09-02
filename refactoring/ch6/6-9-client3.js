// import { acquireReading, baseRate } from './6-9.js';

// const aReading = acquireReading();

// function calculateBaseCharge(aReading) {
//   return baseRate(aReading.month, aReading.year) * aReading.quantity;
// }

// const basicChargeAmount = calculateBaseCharge(aReading);

import { acquireReading } from './6-9.js';

const reading = acquireReading();
const basicChargeAmount = reading.baseCharge;
