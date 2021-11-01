// 新的語法，功能上類似 Chrome 斷點工具
// 通常該語法會與異步配何使用，例如其他異步完成後再執行 .next() 這樣
// 使用 function* 語法和 yield 關鍵字，可以讓函式在每個斷點暫停並返回值
// function* 斷點函式
// yield 斷點，並且返回值
// .next() 斷點後繼續執行

function* test(num) {
  yield num; // yield 斷點，並且返回值

  let i = 5;

  num = num + i;

  yield num; // yield 斷點，並且返回值

  num = num * i;

  yield num; // yield 斷點，並且返回值

  return num; // done: true 代表函式執行完成
}

let obj = test(1);

console.log(obj); // Object [Generator] {}

console.log(obj.next()); // { value: 1, done: false }
console.log(obj.next()); // { value: 6, done: false }
console.log(obj.next()); // { value: 30, done: false }
console.log(obj.next()); // { value: 30, done: true } // done: true 代表函式執行完成
console.log(obj.next()); // { value: undefined, done: true }
