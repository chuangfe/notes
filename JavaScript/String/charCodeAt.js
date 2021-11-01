// String.prototype.charCodeAt(位置);
// 查詢字串的 UTF 編碼
// 返回編碼
// 不影響原本的字串

let str = "abcz";

let s = str.charCodeAt(0);

console.log(str, s, typeof s, str.charCodeAt(3)); // abcz 97 number 122
