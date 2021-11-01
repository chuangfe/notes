/**
 * 程式執行順序
 * 宏任務，將程式放到下一輪的第一位執行, setTimeout setInterval
 * 微任務，將程式放到該輪的最後位執行, Promise
 */

function test() {
  // 異步
  setTimeout(function () {
    // 異步
    setTimeout(() => {
      console.log(1);
    }, 0);

    // Promise 是建構函式，用於強制同步
    // resolve 解決，若執行內容正確，則執行 resolve 方法
    // reject 拒絕，若執行內容錯誤，則執行 reject 方法
    let pro = new Promise(function (resolve, reject) {
      // 同步
      console.log(2);

      // 異步
      resolve(3);
    });

    // 異步
    pro.then(
      function (result) {
        console.log(result);
      },
      function () {}
    );

    // 同步
    console.log(4);
  }, 0);

  // 同步
  console.log(5);
}

test(); // 5 2 4 3 1
