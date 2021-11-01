// Object.prototype.values(obj);
// 返回物件屬性值集合的陣列

let obj = {
  name: "Ian",
  age: 27,
  gender: "man",
};

let arr = Object.values(obj);

console.log(typeof arr, arr); // object [ 'Ian', 27, 'man' ]
