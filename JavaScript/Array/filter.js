// Array.prototype.filter((item, index, array) => return});
// 過濾、篩選元素，並返回新的陣列

let arr = [1, 2, 6, 7, 8, 9];

let arrNew = arr.filter((item, index, array) => {
  // 使用 item 並不會改變 arr 陣列內容，或是 filter 方法返回的 arrNew 陣列內容
  item = item + 2;

  // 使用 array[index] 會改變 arr 陣列內容
  // array[index] = item + 2;

  return item > 5;
});

console.log(arr, arrNew);
