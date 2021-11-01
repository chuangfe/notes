// Array.prototype.unshift();
// 在陣列的頭部增加參數的內容
// 返回陣列的新長度

let arr = [1, 2, 3, 4];

// 可使用逗號，增加參數
// let num = arr.push(8, 9);
let num = arr.unshift(9);

console.log(num, arr);

console.log(typeof num, typeof arr);
