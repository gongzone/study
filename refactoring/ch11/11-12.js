// function localShippingRules(data) {
//   if (data) return new ShippingRules(data);
//   else return -23;
// }

/* 오류코드를 예외로 바꾸기 */

function localShippingRules(data) {
  if (data) return new ShippingRules(data);
  else throw new OrderProcessError(-23);
}

class OrderProcessError extends Error {
  constructor(errorCode) {
    super();
    this.errorCode = errorCode;
  }
}

try {
  const result = localShippingRules();
} catch (error) {
  if (error instanceof OrderProcessError) {
    console.log(error);
  }
}
