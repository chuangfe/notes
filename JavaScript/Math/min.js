// Math.min(數字, 數字, 數字, 數字);
// 返回最小的數字

let n = Math.min(1, 5, 4, 3, 8);

console.log(n); // 1

// 配合陣列使用

let arr = [1, 5, 4, 3, 8];

let m = Math.min.apply(null, arr);

console.log(m); // 1
