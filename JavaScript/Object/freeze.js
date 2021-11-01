// Object.freeze(obj);
// 用於將物件凍結, 及代表物件屬性與屬性值不可增加刪除修改
/**
 * 有可能運用在 vue js 的某部分 data, 可以將不需要響應畫面的 data 部分用該方法凍結,
 * 代表 vue 將 freeze data 繪製到 html 上後就不可再互動
 */

let obj = {
  name: "Ian",
  age: 27,
  gender: "man",
};

Object.freeze(obj);

obj.name = "apple";
console.log(obj); // { name: 'Ian', age: 27, gender: 'man' }
