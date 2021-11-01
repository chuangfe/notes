// async await
// 用於簡化 Promise 語法
// reject 的使用

function delay(n1, n2, time) {
  // Promise 是建構函式，用於將異步強制同步
  // resolve 解決，若程式執行成功，則執行 resolve 函式
  // reject 拒絕，若程式執行失敗，則執行 reject 函式
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      // 工作失敗，呼叫 reject 函式，並把結果傳遞給 reject 函式
      reject("Error String 1234");
    }, time);
  });
}

// 2. async 是關鍵字，只要有使用 await 關鍵字，則該作用域外層的函式必須使用 async 關鍵字
async function test() {
  try {
    // 1. await 是關鍵字，只能用於有 return Promise 物件的函式
    let result = await delay(3, 4, 2000);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

test();
