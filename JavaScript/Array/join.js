// Array.prototype.join(字串);
// 將陣列的元素，使用參數字串拼接成字串，並返回該字串
// 若無參數，則使用字串的逗號拼接
// 不影響原本的陣列

let arr = [1, 2, 3, 4, 5];

let str = arr.join();

console.log(str, typeof str); // 1,2,3,4,5 string

str = arr.join("-");

console.log(str, typeof str); // 1-2-3-4-5 string
