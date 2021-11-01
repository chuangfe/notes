// Object.setPrototypeOf(obj, { a: 10 });
// 修改 obj 的原型
// 相當於 obj.__proto.__ = { a: 10 };
// 相當於 obj 的建構函式 . prototype = { a: 10 };

let obj = {};

Object.setPrototypeOf(obj, { a: 10 });

console.log(obj.__proto__); // { a: 10 }
