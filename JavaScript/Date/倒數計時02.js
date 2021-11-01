// 影片中介紹，目標時間可能來自網址的參數 &time=200;

// 目標時間為 200 分鐘後
let time = "200";

let target = new Date();

// setMinutes() 是設置 target 的分鐘
// 當前分鐘 target.getMinutes() + 目標分鐘 Number(time)
// 這部操作會改變 target 的時間，分鐘會自動進位
target.setMinutes(target.getMinutes() + Number(time));

let run = function() {
  let now = new Date();

  // 倒數時間，單位秒
  // / 1000 = 轉換單位
  let distance = (target - now) / 1000;

  // 顯示 X 秒
  let seconds = distance % 60;

  // 顯示 X 分
  // distance - seconds = 倒數時間的秒數 - 顯示 X 秒的秒數 = X 時 X 分，單位秒
  // / 60 = 剩下多少分鐘，可能是 200 分鐘
  // 200 / 60 = 3.333 = 3小時 33 分鐘
  // 200 % 60 = 0.333 = 33 分鐘
  let minutes = ((distance - seconds) / 60) % 60;

  // 顯示 X 時
  // distance - seconds - minutes * 60 = 倒數時間的秒數 - 顯示 X 秒的秒數 - 顯示 X 分的秒數
  // = X 時，單位秒
  // / 60 / 60 = 將秒數轉為小時
  let hours = (distance - seconds - minutes * 60) / 60 / 60;

  // 預設顯示倒數格式
  // X 時 X 分 X 秒
  console.log(
    parseInt(hours),
    "時",
    parseInt(minutes),
    "分",
    parseInt(seconds),
    "秒"
  );
};

run();

setInterval(run, 1000);
