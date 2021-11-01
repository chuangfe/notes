// JSON.parse(str);
// 將參數中的字串，以物件的形式返回
// 參數中的字串，鍵值都必須使用雙引號
// 不影響參數中的字串

let str = '{"id":1,"name":"Ian","gender":"man"}';

let obj = JSON.parse(str); // { id: 1, name: 'Ian', gender: 'man' }

console.log(typeof str, str);
console.log(typeof obj, obj);
