// function disabilityAmount(employee) {
//   if (employee.seniority < 2) return 0;
//   if (employee.monthsDisabled > 12) return 0;
//   if (employee.isPartTime) return 0;
//   return 1;
// }

/* Consolidate Conditional Expression */

function disabilityAmount(employee) {
  if (isNotEligibleForDisability(employee)) {
    return 0;
  }

  return 1;

  function isNotEligibleForDisability(employee) {
    return employee.seniority < 2 || employee.monthsDisabled > 12 || employee.isPartTime;
  }
}
