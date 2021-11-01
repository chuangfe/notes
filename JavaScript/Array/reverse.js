// Array.prototype.reverse();
// 將陣列順序反轉
// 會影響原本的陣列
// 返回被反轉的陣列

let arr1 = [1, 2, 3, 4, 5];

let arr2 = arr1.reverse();

console.log(arr1, arr2, arr1 === arr2); //[ 5, 4, 3, 2, 1 ] [ 5, 4, 3, 2, 1 ] true
