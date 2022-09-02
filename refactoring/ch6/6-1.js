/* Problem: 가독성이 떨어짐(세부 구현 사항을 확인해야 함.) */

// export function printOwing(invoice) {
//   // 배너를 출력
//   console.log('***********************');
//   console.log('**** Customer Owes ****');
//   console.log('***********************');

//   // 총 가격을 계산
//   let outstanding = 0;
//   for (const o of invoice.orders) {
//     outstanding += o.amount;
//   }

//   // 지급 날짜를 계산
//   const today = new Date();

//   // 기존 객체를 수정하지 않는 것이 좋음(불변성)
//   invoice.dueDate = new Date(
//     today.getFullYear(),
//     today.getMonth(),
//     today.getDate() + 30
//   );

//   // 세부사항을 출력
//   console.log(`name: ${invoice.customer}`);
//   console.log(`amount: ${outstanding}`);
//   console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
// }

// const invoice = {
//   orders: [{ amount: 2 }, { amount: 5 }],
//   customer: '엘리',
// };
// printOwing(invoice);

/* Etract Function (함수 추출하기) */

export function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

function printBanner() {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

function calculateOutstanding(invoice) {
  return invoice.orders.reduce((sum, order) => (sum += order.amount), 0);
}

function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice);
