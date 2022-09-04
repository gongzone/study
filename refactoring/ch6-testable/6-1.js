export function printOwing(invoice, console, clock) {
  printBanner(console);
  recordDueDate(invoice, clock);
  let outstanding = calculateOutstanding(invoice);
  printDetails(console, invoice, outstanding);
}

function printBanner(console) {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

function calculateOutstanding(invoice) {
  return invoice.orders.reduce((sum, order) => (sum += order.amount), 0);
}

function recordDueDate(invoice, clock) {
  const today = clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetails(console, invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};

class Clock {
  constructor() {}

  get today() {
    return new Date();
  }
}

printOwing(invoice, console, new Clock());
