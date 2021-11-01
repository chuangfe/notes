// 將字串轉為數值，無條件捨去小數
// 若字串中有非數字，則只轉換非數字以前的字串數字

let str = "3.94159";

console.log(typeof parseInt(str), parseInt(str)); // number 3.14159
