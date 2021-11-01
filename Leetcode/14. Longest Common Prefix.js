function longestCommonPrefix(strArr) {
  strArr.sort((a, b) => a.length - b.length);

  let str = "",
    startStr = strArr[0],
    flag = true;

  if (strArr.length === 1) return strArr[0];

  for (let i = 0; i < startStr.length; i++) {
    if (!flag) break;

    for (let k = 1; k < strArr.length; k++) {
      let index = strArr[k].indexOf(startStr[i], i);

      if (index === -1 || i !== index) {
        flag = false;
        break;
      } else {
        flag = true;
      }

      if (k === strArr.length - 1 && flag) {
        str += startStr[i];
      }
    }
  }

  return str;
}

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix(["reflower", "flow", "flight"]));
console.log(longestCommonPrefix(["aa", "aa"]));
