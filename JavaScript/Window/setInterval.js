// setInterval(函式, 毫秒);
// 用途，每間隔毫秒執行函式，無限執行到使用 clearInterval 停止

// clearInterval(排程的返回值);
// 用途，停止 setInterval 的執行

let i = 0;

let test = function() {
  i++;
  if (i > 5) {
    clearInterval(time);
  } else {
    console.log(i);
  }
};

let time = setInterval(test, 1000);
