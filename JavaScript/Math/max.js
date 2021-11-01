// Math.max(數字, 數字, 數字, 數字);
// 返回最大的數字

let n = Math.max(1, 5, 4, 3, 8);

console.log(n); // 8

// 配合陣列使用

let arr = [1, 5, 4, 3, 8];

let m = Math.max.apply(null, arr);

console.log(m); // 8
