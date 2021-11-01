// Array.prototype.findIndex(item => {});
// 只要函式內返回 true 就會停止迴圈，並返回目標的編號
// 用於尋找陣列中某的元素的編號

let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19];

let index = arr.findIndex((item) => {
  if (item === 17) return true;
});

console.log(index); // 6
