// JSON.stringify(obj);
// 將參數中的物件，以字串的形式返回
// 不影響參數中的物件

let obj = {
  id: 1,
  name: "Ian",
  gender: "man",
};

let str = JSON.stringify(obj); // '{"id":1,"name":"Ian","gender":"man"}'

console.log(typeof obj, obj);
console.log(typeof str, str);
