// Loop 迴圈
// break; // 跳出迴圈
// continue; // 跳過當次迴圈

let i = 0;

for (; i < 10; i++) {
  console.log(i);
}

console.log(i);

// 執行順序
// 1. let i = 0;
// 2. i < 10;
// 3. console.log(i);
// 4. i++;
// 重複執行 2 ~ 4

// 物件迴圈

let obj = {
  name: "Ian",
  gender: "man",
  ang: 27,
};

for (let key in obj) {
  console.log(obj[key]);
}
