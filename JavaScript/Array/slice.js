// Array.prototype.slice(起始位置, 結束位置);
// 若無參數，代表會複製全部的元素
// 若無結束位置，代表會複製起始位置到最後的元素
// 複製陣列的元素，組成新的陣列並返回
// 不影響原本的陣列

// 特殊用途：將偽陣列轉為陣列
// let divArr = Array.prototype.slice.call(document.querySelectorAll("div"));

let arr = [1, 2, 3, 4, 5, { name: "Ian" }];

console.log(arr.slice(2)); // [ 3, 4, 5, { name: 'Ian' } ]

console.log(arr.slice(-1)); // [ { name: 'Ian' } ]

console.log(arr.slice(2, 4)); // [ 3, 4 ]
