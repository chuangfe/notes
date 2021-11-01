// Array.prototype.reduce((total, value, index) => { return number }, start);
// total = 每次 return number 的值
// value = 陣列的每次循環的值
// index = 當前循環的索引
// start = total 的起始值，若無設定 start 則 total = 陣列的第一個值，並且 value index 會從陣列的第二的值開始
// 返回陣列元素運算結果的總和

let arr = [2, 3, 6, 7, 8, 9];

let s = arr.reduce((sum, item, index) => {
  // 2 3 1
  // 5 6 2
  // 11 7 3
  // 18 8 4
  // 26 9 5
  // 因為沒有 sum 的初始值參數，所以 sum 的初始值為 arr[0] === 2
  // 因為沒有 sum 的初始值參數，所以 index 初始值為 1
  console.log(sum, item, index);

  // 加減乘除任何運算都可，甚至獲取最大或最小值
  return (sum = sum + item);
});

console.log(arr, s); // [ 1, 2, 6, 7, 8, 9 ] 35

// -----------------------------------------------------------------------------

let u = arr.reduce((sum, item, index) => {
  // -5 2 0
  // -3 3 1
  // 0 6 2
  // 6 7 3
  // 13 8 4
  // 21 9 5
  // sum 的初始值為 -5
  // index 從 0 開始
  console.log(sum, item, index);

  // 加減乘除任何運算都可，甚至獲取最大或最小值
  return (sum = sum + item);
}, -5);

console.log(arr, u); // [ 2, 3, 6, 7, 8, 9 ] 30

// -----------------------------------------------------------------------------

// 獲取最大值
let max = arr.reduce((start, item, index) => {
  return start > item ? start : item;
});

console.log(max); // 9
