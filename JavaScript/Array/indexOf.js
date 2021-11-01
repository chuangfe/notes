// Array.prototype.indexOf(元素, 起始位置);
// 在陣列中尋找元素的位置，並返回
// 若無起始位置，代表會從起始尋找元素
// 若找不到元素在陣列中的位置，返回 -1

let arr = [1, 2, 3, true, 4, 5, false, 4, 5, true];

console.log(arr.indexOf(100)); // -1

console.log(arr.indexOf(true)); // 3

console.log(arr.indexOf(true, 3)); // 3

console.log(arr.indexOf(true, 4)); // 9

// 詭異的教學

let index = -1;

while (arr.indexOf(true, index + 1) !== -1) {
  index = arr.indexOf(true, index + 1);
  console.log(index); // 3 9
}
