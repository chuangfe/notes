// Object.prototype.keys(obj);
// 返回物件屬性集合的陣列

let obj = {
  name: "Ian",
  age: 27,
  gender: "man",
};

let arr = Object.keys(obj);

console.log(typeof arr, arr); // object [ 'name', 'age', 'gender' ]
