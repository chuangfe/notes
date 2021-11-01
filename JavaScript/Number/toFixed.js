// 將數值轉為字串，並數字保留小數位，四捨五入
// Number.prototype.toFixed(保留幾位的小數);
// 轉換後的值為字串類型

let n = 5.56;

console.log(typeof n.toFixed(1), n.toFixed(1)); // string 5.6
