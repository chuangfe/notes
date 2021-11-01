// String.prototype.substr(起始位置, 擷取長度);
// 用途，擷取字串，按照長度擷取字串
// 不影響原本的字串
// 返回被截取的字串
// 有可能被移除, 不推薦使用

let str = "abcde";
let strNew = str.substr(1, 2);

console.log(str, strNew); // abcde bc
