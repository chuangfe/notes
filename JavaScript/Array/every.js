// Array.prototype.every((item, index, array) => return});
// 判斷陣列內所有元素，只要其中有一項 false 則，該方法就返回 false

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let b = arr.every((item, index, array) => {
  return item > 5;
});

console.log(b); // false

let c = arr.every((item, index, array) => {
  return item > 0;
});

console.log(c); // true
