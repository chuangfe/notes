// arr.length; 代表陣列的長度
// 一般情況下不會去更改陣列長度
// 若長度設置比原先短，則擷取陣列

let arr = [1, 2, 3, 4, 5];

console.log(arr, arr.length); // [ 1, 2, 3, 4, 5 ] 5

// 擷取陣列前三個

arr.length = 3;

console.log(arr, arr.length); // [ 1, 2, 3 ] 3
