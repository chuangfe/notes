// String.fromCharCode.js(參數));
// 參術解說，數字類型，十進位與十六進位都可以
// 將 UTF 編碼轉為字串
// 返回 UTF 編碼應對的字串

let str = "a";

let s = str.charCodeAt(0);

console.log(s, typeof s); // 97 'number'

console.log(String.fromCharCode(97)); // a
