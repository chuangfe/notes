// String.prototype.split(字符);
// 用途，根據字符將字串切割為陣列
// 補充，與 Array.prototype.join(字串); 相對，可能會一起使用

//------------------------------------------------------------------------------

let str = "a,b,c,d,e,f,g";
let arr = str.split(",");

console.log(str, arr); // a,b,c,d,e,f,g [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]

//------------------------------------------------------------------------------

let str2 = "hijklmn";
let arr2 = str2.split("");

console.log(str2, arr2); // hijklmn [ 'h', 'i', 'j', 'k', 'l', 'm', 'n' ]

//------------------------------------------------------------------------------

// 範例，字串反轉
let str3 = "opqrst";
let arr3 = str3.split(""); // ['o', 'p', 'q', 'r', 's', 't']
arr3.reverse(); // [ 't', 's', 'r', 'q', 'p', 'o' ]
let str4 = arr3.join(""); // 'tsrqpo'

//------------------------------------------------------------------------------

// 範例，切割網址參數，並轉為物件
let url =
  "https://www.google.com.tw/?a&id=Ian&b&c=&age=27&gender=man&specialty=bootstrap,vue&d";

let getObject = function(url) {
  let urlArg = url.split("?")[1];
  let obj = {};

  // url 未必都有參數，所以需要判斷
  if (!urlArg) return;

  urlArg.split("&").forEach((item, i) => {
    let arr = item.split("=");

    // 參數未必都正確且都有鍵與值，所以需要判斷
    // forEach 中只能使用 return 來中斷本次迴圈
    if (arr.length === 1 || !arr[1]) return false;

    // 轉換型別
    if (isNaN(Number(arr[1]))) {
      obj[arr[0]] = arr[1].indexOf(",") !== -1 ? arr[1].split(",") : arr[1];
    } else {
      obj[arr[0]] = Number(arr[1]);
    }
  });

  return obj;
};

let obj = getObject(url);

console.log(obj); // { id: 'Ian', age: 27, gender: 'man' }
