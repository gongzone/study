// function calculateCharge(date, quantity, plan) {
//   let charge = 0;
//   if (!date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd))
//     charge = quantity * plan.summerRate;
//   else charge = quantity * plan.regularRate + plan.regularServiceCharge;
//   return charge;
// }

/* Decompose Conditional */

function calculateCharge(date, quantity, plan) {
  return isSummer() ? summerCharge() : regularCharge();

  function isSummer() {
    return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
  }

  function summerCharge() {
    return quantity * plan.summerRate;
  }

  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }

  return charge;
}
