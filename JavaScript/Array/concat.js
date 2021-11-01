// Array.prototype.concat(陣列);
// 將陣列與陣列合併
// 返回合併後，新的陣列
// 不會改變原本的陣列

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

// 若無參數，則是淺複製，返回新的陣列

let arr = [1, 2, 3, 4, 5, { name: "Ian" }];

let reArr = arr.concat();

arr[5].name = "Vivian";

console.log(reArr, arr === reArr); //[ 1, 2, 3, 4, 5, { name: 'Vivian' } ] false

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

let arr1 = [1, 2, 3, 4, 5];

let arr2 = [11, 12, 13];

let arr3 = arr1.concat(arr2);

console.log(arr1, arr3); //[ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5, 11, 12, 13 ]
