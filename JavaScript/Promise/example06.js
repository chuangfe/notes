// async await 多個異步
// resolve 使用

function delay(n1, n2, time) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(n1 + n2);
    }, time);
  });
}

async function test() {
  let result1 = await delay(1, 2, 2000);
  let result2 = await delay(3, 4, 4000);
  let answer = result1 * result2;

  console.log(answer); // 21
}

test();
