// export function ascentVelocity(points, totalMinutes) {
//   function calculateAscent() {
//     for (let i = 1; i < points.length; i++) {
//       const verticalChange = points[i].elevation - points[i - 1].elevation;
//       totalAscent += verticalChange > 0 ? verticalChange : 0;
//     }
//   }

//   let totalAscent = 0;
//   calculateAscent([{ elevation: 10 }, { elevation: 20 }]);

//   return totalAscent / totalMinutes;
// }

/* 수정된 값 반환하기 */

// 외부에 있는 값을 변경하는 것은 굉장히 나쁜 코드이다. (side effect)

export function ascentVelocity(points, totalMinutes) {
  function calculateAscent() {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      result += verticalChange > 0 ? verticalChange : 0;
    }
    return result;
  }

  let totalAscent = calculateAscent([{ elevation: 10 }, { elevation: 20 }]);

  return totalAscent / totalMinutes;
}
