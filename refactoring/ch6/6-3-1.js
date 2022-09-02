// export function price(order) {
//   // 가격(price) = 기본가격 - 수량할인 + 배송비
//   return (
//     order.quantity * order.itemPrice -
//     Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
//     Math.min(order.quantity * order.itemPrice * 0.1, 100)
//   );
// }

/* Extract Variable */

export function price(order) {
  const basePrice = order.quantity * order.itemPrice;
  const discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;

  return basePrice - discount + shipping;
}
