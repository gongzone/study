// export function priceOrder(product, quantity, shippingMethod) {
//   const basePrice = product.basePrice * quantity;
//   const discount =
//     Math.max(quantity - product.discountThreshold, 0) *
//     product.basePrice *
//     product.discountRate;
//   const shippingPerCase =
//     basePrice > shippingMethod.discountThreshold
//       ? shippingMethod.discountedFee
//       : shippingMethod.feePerCase;
//   const shippingCost = quantity * shippingPerCase;
//   const price = basePrice - discount + shippingCost;
//   return price;
// }

// // 사용 예:
// const product = {
//   basePrice: 10,
//   discountRate: 0.1,
//   discountThreshold: 10,
// };

// const shippingMethod = {
//   discountThreshold: 20,
//   feePerCase: 5,
//   discountedFee: 3,
// };

// const price = priceOrder(product, 5, shippingMethod);
// console.log(price);

/* Split Phase */

// Order라는 클래스를 만들어서 데이터를 정리해놓은 것이 사실 더 나은 방법이다. 여기서는 단순히
// 함수라는 단계 쪼개기 작업임.

export function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount = calculateDiscountedPrice(product, quantity);
  const shippingCost = calculateShippingCost(basePrice, quantity, shippingMethod);

  return basePrice - discount + shippingCost;
}

function calculateDiscountedPrice(product, quantity) {
  return (
    Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate
  );
}

function calculateShippingCost(basePrice, quantity, shippingMethod) {
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;

  return quantity * shippingPerCase;
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);
