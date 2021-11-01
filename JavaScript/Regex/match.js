// String.prototype.match(字串);
// 返回所有符合的字串，並組成陣列

let str = "abcabcabc";

// /a/ 正規目標是 a 字串
// g 搜尋多次並全部返回
let arr = str.match(/a/g);

// len a 出線的字數
let len = arr.length;

console.log(arr, len); // [ 'a', 'a', 'a' ] 3

// -----------------------------------------------------------------------------

let test = "tesT.i.ng";

console.log(test.match(/[a-z]+\./gi)); // [ 'tesT.', 'i.' ]
