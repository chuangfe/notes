// Object.assign(Obj, { key: value });
// 將物件的屬性與屬性值複製給 Obj 物件

let obj = {};

let style = {
  width: 1440,
  height: 720,
};

Object.assign(obj, style);

console.log(obj); // { width: 1440, height: 720 }
console.log(style); // { width: 1440, height: 720 }
