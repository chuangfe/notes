// Array.prototype.map((item, index, arr) => { return });
// 用途，在循環陣列中，對陣列的修改，並返回新的陣列
// 必需要有返回值，若無則會返回 undefined
// 不影響原本的陣列

let arr = [5, 4, 8, 1, 2, 9, 7, 3, 6];

let arrNew = arr.map((item, index, arr) => {
  // 偶數 + 2
  return item % 2 === 0 ? (item = item + 2) : item;
});

console.log(arr, arrNew); // [ 5, 4, 8, 1, 2, 9, 7, 3, 6 ] [ 5, 6, 10, 1, 4, 9, 7, 3, 8 ]
