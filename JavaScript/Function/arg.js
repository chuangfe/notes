// 在 ES6 與 嚴格模式中禁止使用 arguments
// 故使用 ...arg 與 arg 代替
// 該語法重要的是 ... 符號，arg 可以改但是不推薦

// c = 9 代表預設值語法
let sum = function (a, b, c = 9, ...arg) {
  // arg 會將沒設定的形參放到陣列內
  console.log(a, b, c, arg);
};

sum(1, 2, 4, 5); // 1 2 [ 3, 4, 5 ]

sum(1, 2); // 1 2 9 []
