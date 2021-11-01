// 遞迴
// 執行函式，並在函式中設定條件，若條件不滿足則再次執行函式
// 若需求次數過大，建議別使用

let i = 0;
let sum = 0;

let getSum = function() {
  i++;
  sum += i;
  return i === 100 ? sum : getSum();
};

console.log(getSum());
