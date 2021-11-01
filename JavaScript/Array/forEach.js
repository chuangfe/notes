// Array.prototype.forEach((item, index, arr) => {});
// 用途，循環陣列

let arr = [5, 4, 8, 1, 2, 9, 7, 3, 6];

// forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void
// callbackfn 代表參數是函式
// value 代表陣列中的元素
// index 代表索引
// array 代表被循環的陣列
// void 代表沒有返回值
arr.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
