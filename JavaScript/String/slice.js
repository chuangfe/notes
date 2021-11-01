// String.prototype.slice(起始位置, 結束位置);
// 用途，擷取字串
// 補充，不擷取結束位置的字串
// 補充，若無結束位置，則擷取到字串結束

let str = "abcde";
let strNew = str.slice(1, 2);

console.log(str, strNew); // abcde b
