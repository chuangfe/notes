// Promise 多個異步
// resolve 使用

function delay(n1, n2, time) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(n1 + n2);
    }, time);
  });
}

function test() {
  let promise1 = delay(1, 2, 2000);
  let promise2 = delay(3, 4, 4000);

  // Promise.all[Promise 實體, Promise 實體, ...]
  // 該方法目的在於等代所有 Promise 實體完成後，將返回值組成陣列並返回
  Promise.all([promise1, promise2]).then(function (results) {
    console.log(results); // [ 3, 7 ]

    // Array.prototype.reduce((total, value, index) => { return number }, start);
    let answer = results.reduce((total, value, index) => {
      console.log(total, value, index); // 3 7 1

      return total * value;
    });

    console.log(answer); // 21
  });
}

test();
