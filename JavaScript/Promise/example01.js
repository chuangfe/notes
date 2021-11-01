// Promise
// resolve 使用

function delay(n1, n2, time) {
  // Promise 是建構函式，用於將異步強制同步
  // resolve 解決，若程式執行成功，則執行 resolve 函式
  // reject 拒絕，若程式執行失敗，則執行 reject 函式
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      // 工作完成，呼叫 resolve 函式，並把結果傳遞給 resolve 函式
      resolve(n1 + n2);
    }, time);
  });
}

delay(3, 4, 2000).then(function (result) {
  console.log(result); // 7
});
