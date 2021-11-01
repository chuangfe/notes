// Array.prototype.splice(位置, 要刪除的元素數量, 要增加的元素);
// 功能，陣列增加元素、陣列刪除元素
// 將被刪除的元素組成新的陣列並返回
// 會改變原本的陣列

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 以下請分開執行

// 刪除 arr1 的元素，並使用 arr2 接收被刪除的元素組成的陣列
// let arr1 = arr.splice(6);
// console.log(arr, arr1); // [ 1, 2, 3, 4, 5, 6 ] [ 7, 8, 9 ]

// 在陣列指定的位置增加元素
// let arr1 = arr.splice(4, 1, 11);
// console.log(arr, arr1); // [ 1, 2, 3, 4, 11, 5, 6, 7, 8, 9 ]

// 在陣列尾部增加元素
// let arr1 = arr.splice(arr.length, 0, 21);
// console.log(arr, arr1); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 21 ]

// 在陣列倒數第一位增加元素
// let arr1 = arr.splice(-1, 0, 21);
// console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 21, 9 ]

// 在陣列指定的位置刪除舊元素，並增加新元素，使用 arr2 接收被刪除的元素組成的陣列
// let arr1 = arr.splice(3, 2, 21, 22);
// console.log(arr, arr1); // [ 1, 2, 3, 21, 22, 6, 7, 8, 9 ] [ 4, 5 ]
