// 單位轉換請用除法與餘數

// getTime() 從 1970 年某月某日到當前時間的毫秒

// 目標的未來時間
let target = new Date("2019-12-15 00:00");

function run() {
  let now = new Date();

  // target.getTime() 從 1970 年某月某日，到目標未來時間的毫秒
  // now.getTime() 從 1970 年某月某日，到當前時間的毫秒
  // (目標時間 - 當前時間) / 1000 = 剩餘秒數
  let countDown = Math.floor((target.getTime() - now.getTime()) / 1000);

  // 轉換成分鐘剩下的秒數 => 剩餘秒數 / 60 的餘數 => X 分 X 秒 => X秒
  let countSeconds = countDown % 60;

  // 轉換成小時剩下的分鐘
  // 可以被分鐘整除的秒 => (countDown - countSeconds)
  // 轉換成剩餘分鐘 => (countDown - countSeconds) / 60
  // 轉換成小時剩下的分鐘 => (countDown - countSeconds) / 60 % 60
  let countMinutes = ((countDown - countSeconds) / 60) % 60;

  // 轉換成天數剩下的小時
  // 剩餘秒數 - 不可轉分鐘的秒數 - 不可轉小時的分鐘 => (countDown - countSeconds - countMinutes * 60)
  // 例：3600 秒 = 1小時, 3690 秒 = 1 小時 1 分鐘 30 秒 => 3690 - 30 - 60 = 3600
  let countHours =
    ((countDown - countSeconds - countMinutes * 60) / (60 * 60)) % 24;

  let countDay =
    (countDown - countSeconds - countMinutes * 60 - countHours * 3600) /
    (60 * 60 * 24);

  console.log(
    countDay,
    "天",
    countHours,
    "小時",
    countMinutes,
    "分",
    countSeconds,
    "秒"
  );
}

run();
setInterval(run, 1000);
