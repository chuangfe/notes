// String.prototype.replace(舊目標字串, 新目標字串);
// 用於將字串的內容替換
// 不影響原本的字串，返回新的字串

// 補充，通常配合使用正則表達式，已方便替換多次

let str = "今天是下雨天";
let strFilter = str.replace("下雨天", "晴天");

console.log(str, strFilter);

// 數值轉為字串, 加上千分位.
function toCurrency(num) {
  let reverseStr = String(num).split("").reverse().join("");
  let returnStr = reverseStr.replace(/\d{3}\B/g, (str) => {
    return str.length > 2 ? str + "," : str;
  });

  return returnStr.split("").reverse().join("");
}

console.log(toCurrency(1234));
