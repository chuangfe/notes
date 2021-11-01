// Array.prototype.pop();
// 刪除陣列最後的元素，不需要參數
// 返回被刪除的元素

let arr = [1, 2, 3, 4, 9];

let num = arr.pop();

console.log(num, arr);

console.log(typeof num, typeof arr);

// 陣列倒轉小技巧
// 陣列中不可以有 false 的元素

let arr2 = [];
let e = null;

while ((e = arr.pop())) {
  arr2.push(e);
}

console.log(arr2);
