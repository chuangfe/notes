/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (num) {
  if (num < 0) return false;

  let strArr = String(num).split(""),
    flag = true;

  let forthArr = strArr.slice(0, Math.floor(strArr.length / 2)),
    backArr = strArr.slice(Math.ceil(strArr.length / 2)).reverse();

  forthArr.forEach((el, i) => {
    if (el !== backArr[i]) flag = false;
  });

  return flag;
};

console.log(isPalindrome(1221));
