// 1. 偽陣列
// 2. 沒有索引，沒有屬性
// 3. 元素不重複
// 4. 若要迴圈可以使用 forEach(el => {}) 或 for of 關鍵字
// 5. 長度屬性使用 size
// 使用方式 new Set([]);
// 主要用途，幫陣列刪除重複，刪除後的返回值需要再轉回陣列

let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

// 刪除重複，並轉換為陣列
let arr2 = Array.from(new Set(arr));

console.log(arr, arr2); // [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5 ] [ 1, 2, 3, 4, 5 ]

// -----------------------------------------------------------------------------

let arrSet = new Set();

// Set.prototype.arr(Element);
// 增加實體元素，若已有相同的元素則不再增加
arrSet.add(1);
arrSet.add(2);
arrSet.add(3);
arrSet.add(4);
arrSet.add(5);
// 若已有相同的元素則不再增加
arrSet.add(1);
console.log(arrSet); // Set { 1, 2, 3, 4, 5 }

// Set.prototype.delete(Element);
// 刪除實體元素，參數為元素而非位置
arrSet.delete(2);
console.log(arrSet); // Set { 1, 3, 4, 5 }

// Set.prototype.has(Element);
// 判斷實體是否有該元素，並返回 true or false
let b = arrSet.has(5);
console.log(b); // true

// Set.prototype.clear();
// 刪除實體所有元素
arrSet.clear(5);
console.log(arrSet); // Set {}

// 若要迴圈可以使用 forEach(el => {}) 或 for of 關鍵字
arrSet.add(10);
arrSet.add(20);
arrSet.add(30);
arrSet.add(40);
arrSet.add(50);
arrSet.forEach((el) => {
  console.log(el);
});
for (let el of arrSet) {
  console.log(el);
}

// size 獲取 Set 實體的長度
console.log(arrSet.size); // 5
