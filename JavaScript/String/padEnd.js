// String.prototype.padStart(填充完畢後字串的長度, 用什麼字元來填充);
// 在字串(結尾)填充字元至指定的長度，並返回新的字串

let arr = ["1", "2", "3", "4", "12"];

arr.forEach((num, i) => {
  arr[i] = num.padEnd(2, "0");
});

console.log(arr); // [ '10', '20', '30', '40', '12' ]
