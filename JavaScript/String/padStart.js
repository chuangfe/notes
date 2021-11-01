// String.prototype.padStart(填充完畢後字串的長度, 用什麼字元來填充);
// 在字串(開頭)填充字元至指定的長度，並返回新的字串

let arr = ["1", "2", "3", "4", "12"];

arr.forEach((num, i) => {
  arr[i] = num.padStart(2, "0");
});

console.log(arr); // [ '01', '02', '03', '04', '12' ]
