// export function inNewEngland(aCustomer) {
//   return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
// }

// 필요한 정보만을 인자로 받아옴. => 재사용성 상승

/* Change Function Declaration */

export function inNewEngland(state) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}
