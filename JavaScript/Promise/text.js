// const ret = await x()

function x(url) {
  let flag = true;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flag) {
        resolve(0);
        flag = false;
      }
    }, 1000);

    axios({ url: url }).then((res) => {
      if (flag) {
        resolve(res);
        flag = false;
      }
    });
  });
}

x();
