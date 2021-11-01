let numbersCh = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];

let weeksCh = [
  "星期日",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
];

let numberToArray = function(num) {
  return num.toString().split("");
};

let animation = function() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let week = date.getDay();
  let hors = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  console.log(
    getYears(numberToArray(year)),
    getMonth(numberToArray(month + 1))
  );
};

let getYears = function(yearArr) {
  let str = "";

  yearArr.forEach(value => {
    str += numbersCh[value];
  });

  return str + "年";
};

let getMonth = function(monthArr) {
  let str = "";

  monthArr.forEach(value => {
    str += numbersCh[value];
  });

  return str + "月";
};

animation();
