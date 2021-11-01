let today = 5;

switch (today) {
  case 2:
    console.log("today :", today);
    break;

  case 5:
    console.log("today :", today);
    break;

  case 3:
    console.log("today :", today);
    break;

  // 一樣的可以這樣寫
  case 1:
  case 7:
    console.log("today :", "1 or 7");
    break;

  default:
    console.log("today :", "不是數字");
    break;
}
