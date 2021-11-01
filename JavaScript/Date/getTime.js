// new Date().getTime();
// 獲取當前時間戳，從 1970 年 1 月 1 日 0 時 0 分 0 秒到當前時間的毫秒
// 補充，獲取不重複的數字，獨立 ID，或是讓哈西值不同已避免暫存
// 通常，計算程式的執行時間

function getTimeFunc() {
  let date = new Date();
  console.log(date.getTime());
}

setInterval(getTimeFunc, 1000);
