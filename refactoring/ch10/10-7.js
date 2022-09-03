// for (const p of people) {
//   if (!found) {
//     if (p === 'Don') {
//       sendAlert();
//       found = true;
//     }
//   }
// }

/* 제어 플래그를 탈출문으로 바꾸기 */

for (const p of people) {
  if (p === 'Don') {
    sendAlert();
    break;
  }
}
