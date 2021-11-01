// setTimeout(函式, 毫秒);
// 用途，每間隔毫秒執行函式，只會執行一次

// clearTimeout(排程的返回值);
// 用途，停止 setTimeout 的執行

let test = function(s) {
  console.log(s);

  // 重要，使用 setTimeout 時，一定要在函式結尾加上 clearTimeout
  clearTimeout(time);
};

let time = setTimeout(test, 1000, "1111");
