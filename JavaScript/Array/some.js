// Array.prototype.some((item, i) => {});
// 只要函式內返回 true 就會停止迴圈.

let num = 0;
let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19];

// let v = arr.some((item, i) => {
//   num = num + 1;
//   if (item === 15) return true;
// });

// console.log(v, num); // 5 -> 1 ~ 5

let str = arr.some((item) => {
  return item === 12 ? "找到了" : false;
});

console.log(str); // true
