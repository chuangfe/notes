// Array.prototype.sort(函式);
// 排序陣列，需要注意參數的使用方式，與陣列的內容型別
// 返回重新排序的該陣列，故會改變陣列本身

let arr = [5, 1, 9, 3, 2, 6, 8, 4, 7, 11, 25, 59];
let v = null;

v = arr.sort();
console.log(arr, arr === v); // [ 1, 11, 2, 25, 3, 4, 5, 59, 6, 7, 8, 9 ]

// 由小到大
arr.sort((pre, next) => {
  return pre - next;
});
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 25, 59 ]

// 由大到小
arr.sort((pre, next) => {
  return next - pre;
});
console.log(arr); // [ 59, 25, 11, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

// 練習，隨機數 0 ~ 100 不重複 4 個數字

let arrTest = [];

while (arrTest.length < 4) {
  let num = Math.round(Math.random() * 100);
  if (arrTest.indexOf(num) === -1) arrTest.push(num);
}

arrTest.sort((pre, next) => {
  return pre - next;
});

console.log(arrTest);
