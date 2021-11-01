// new Date().getYear

let itcDate = new Date();

// 年
let year = itcDate.getFullYear();

// 月
// 補充，1 月 = 0
// 若使用需要 + 1
let month = itcDate.getMonth() + 1;

// 日
let date = itcDate.getDate();

// 星期
// 補充，星期天 = 0
let day = itcDate.getDay() === 0 ? "日" : itcDate.getDay();

// 時
let hours = itcDate.getHours();

// 分
let minutes = itcDate.getMinutes();

// 秒
let seconds = itcDate.getSeconds();

// 毫秒
let milliSeconds = itcDate.getMilliseconds();

console.log(
  `${year} 年`,
  `${month} 月`,
  `${date} 日`,
  `星期 ${day}`,
  `${hours} 時`,
  `${minutes} 分`,
  `${seconds} 秒`,
  `${milliSeconds} 毫秒`
);
