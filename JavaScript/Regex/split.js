// String.prototype.split(字符);
// 用途，根據字符將字串切割為陣列
// 補充，與 Array.prototype.join(字串); 相對，可能會一起使用

let str = "abcabcabc";

console.log(str.split(/b/g)); // [ 'a', 'ca', 'ca', 'c' ] 設定 b 字串為目標切割

console.log(str.split(/bc/g)); // [ 'a', 'a', 'a', '' ] 設定 bc 字串為目標切割

console.log(str.split(/[bc]/g)); // [ 'a', 'ca', 'ca', 'c' ] 設定 b 字串 或是 c 字串為目標切割
