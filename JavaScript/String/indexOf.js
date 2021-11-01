// String.prototype.indexOf(字串, 起始位置);
// 從開頭尋找字串中某的字串的位置
// 只會返回第一個找的字串的位置

let str = "abcde";

console.log(str.indexOf("c")); // 2
console.log(str.indexOf("f")); // -1

// 範例，統計字串中某個字出現幾次

let s = "akajuhaknnlakja";
let index = -1;
let frequency = 0;

// 順序說明
// 1. 宣告變數 index (起始位置)，frequency (目標出現次數)
// 2. 使用 while 迴圈，使用 indexOf 方法，並設定起始位置
// 3. 起始位置為 indexOf 方法每次找到的位置 + 1，如此可避免暴力迴圈

while (s.indexOf("a", index + 1) > -1) {
  index = s.indexOf("a", index + 1);
  frequency++;
}

console.log(frequency); // 5
