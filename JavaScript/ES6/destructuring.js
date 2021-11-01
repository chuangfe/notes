// 解構賦值

// 依照順序拆解陣列的元素為變數.
let [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1 2 3

// 依照順序拆解陣列的元素為變數, ... 運算符則將剩下的元素組合為陣列.
let [x, y, ...other] = [10, 20, 30, 40, 50];
console.log(x, y, other); // 10 20 [ 30, 40, 50 ]

// 拆解物件的屬性.
let { length } = [1, 2, 3, 4, 5, 6];
console.log(length); // 6

// 拆解字串.
let [str1, str2, str3, str4] = "abcd";
console.log(str1, str2, str3, str4); // a b c d

// 物件賦值，通常用於函式傳參, 若屬性有函式使用 this 則指向會改為新物件
let { name, id } = { name: "Ian", id: 1 };
console.log(name, id); // Ian 1

// 物件拆解複製, 物件拆解合併修改.
let data1 = { id: 1 }; // { id: 1 };
let data2 = { ...data1 }; // { id: 1 };
let data3 = { ...data1, id: 2 }; // { id: 2 };
console.log(data1 === data2); // false

// 拆解函式返回值.
function func1() {
  return [100, 200];
}
let [num1, num2] = func1();
console.log(num1, num2); // 100 200

// 函式參數預設值.
function func2({ x = 1, y = 2 }) {
  return x + y;
}
console.log(func2({})); // 3
console.log(func2({ x: 10 })); // 12
console.log(func2({ y: 20 })); // 21
console.log(func2({ x: 10, y: 20 })); // 30

// 陣列展開, 陣列合併.
let arr1 = [1, 2, 3, 4];
let arr2 = [6, 7, 8, 9];
console.log([...arr1, ...arr2]);
