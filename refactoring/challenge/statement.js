// export function statement(invoice, plays) {
//   let totalAmount = 0;
//   let volumeCredits = 0;
//   let result = `청구 내역 (고객명: ${invoice.customer})\n`;
//   const format = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     minimumFractionDigits: 2,
//   }).format;

//   for (let perf of invoice.performances) {
//     const play = plays[perf.playID];
//     let thisAmount = 0;

//     switch (play.type) {
//       case 'tragedy': // 비극
//         thisAmount = 40000;
//         if (perf.audience > 30) {
//           thisAmount += 1000 * (perf.audience - 30);
//         }
//         break;
//       case 'comedy': // 희극
//         thisAmount = 30000;
//         if (perf.audience > 20) {
//           thisAmount += 10000 + 500 * (perf.audience - 20);
//         }
//         thisAmount += 300 * perf.audience;
//         break;
//       default:
//         throw new Error(`알 수 없는 장르: ${play.type}`);
//     }

//     // 포인트를 적립한다.
//     volumeCredits += Math.max(perf.audience - 30, 0);
//     // 희극 관객 5명마다 추가 포인트를 제공한다.
//     if ('comedy' === play.type) volumeCredits += Math.floor(perf.audience / 5);

//     // 청구 내역을 출력한다.
//     result += `  ${play.name}: ${format(thisAmount / 100)} (${
//       perf.audience
//     }석)\n`;
//     totalAmount += thisAmount;
//   }
//   result += `총액: ${format(totalAmount / 100)}\n`;
//   result += `적립 포인트: ${volumeCredits}점\n`;
//   return result;
// }

// // 사용예:
// const playsJSON = {
//   hamlet: { name: 'Hamlet', type: 'tragedy' },
//   'as-like': { name: 'As You Like It', type: 'comedy' },
//   othello: { name: 'Othello', type: 'tragedy' },
// };

// const invoicesJSON = [
//   {
//     customer: 'BigCo',
//     performances: [
//       {
//         playID: 'hamlet',
//         audience: 55,
//       },
//       {
//         playID: 'as-like',
//         audience: 35,
//       },
//       {
//         playID: 'othello',
//         audience: 40,
//       },
//     ],
//   },
// ];

// const result = statement(invoicesJSON[0], playsJSON);
// const expected =
//   '청구 내역 (고객명: BigCo)\n' +
//   '  Hamlet: $650.00 (55석)\n' +
//   '  As You Like It: $580.00 (35석)\n' +
//   '  Othello: $500.00 (40석)\n' +
//   '총액: $1,730.00\n' +
//   '적립 포인트: 47점\n';
// console.log(result);
// console.log(result === expected);

import { createStatement } from './create-statement';

export function statement(invoice, plays) {
  return renderPlainText(createStatement(invoice, plays));
}

export function htmlStatement(invoice, plays) {
  return renderHTML(createStatement(invoice, plays));
}

function renderHTML(statement) {
  let result = `<h1>청구 내역 (고객명: ${statement.customer})</h1>\n`;
  result += '<table>\n';
  result += '<tr><th>play</th><th>석</th><th>cost</th></tr>';

  for (let perf of statement.performances) {
    result += `<tr><td>${perf.play.name}</td><td>${perf.audience}</td>`;
    result += `<td>${usd(perf.amount / 100)}</td></tr>\n`;
  }

  result += '</table>\n';
  result += `<p>총액: <em>${usd(statement.totalAmount / 100)}</em></p>\n`;
  result += `<p>적립 포인트: <em>${statement.totalCredits}</em>점</p>\n`;
  return result;
}

function renderPlainText(statement) {
  let result = `청구 내역 (고객명: ${statement.customer})\n`;

  for (let perf of statement.performances) {
    result += `  ${perf.play.name}: ${usd(perf.amount / 100)} (${perf.audience}석)\n`;
  }

  result += `총액: ${usd(statement.totalAmount / 100)}\n`;
  result += `적립 포인트: ${statement.totalCredits}점\n`;
  return result;
}

function usd(number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(number);
}

// 사용예:
const playsJSON = {
  hamlet: { name: 'Hamlet', type: 'tragedy' },
  'as-like': { name: 'As You Like It', type: 'comedy' },
  othello: { name: 'Othello', type: 'tragedy' },
};

const invoicesJSON = [
  {
    customer: 'BigCo',
    performances: [
      {
        playID: 'hamlet',
        audience: 55,
      },
      {
        playID: 'as-like',
        audience: 35,
      },
      {
        playID: 'othello',
        audience: 40,
      },
    ],
  },
];

const result = statement(invoicesJSON[0], playsJSON);
const expected =
  '청구 내역 (고객명: BigCo)\n' +
  '  Hamlet: $650.00 (55석)\n' +
  '  As You Like It: $580.00 (35석)\n' +
  '  Othello: $500.00 (40석)\n' +
  '총액: $1,730.00\n' +
  '적립 포인트: 47점\n';
console.log(result);
console.log(result === expected);
