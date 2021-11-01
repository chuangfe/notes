var isValid = function (str) {
  let flag1 = true,
    flag2 = true,
    flag3 = true;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      flag1 = false;
    } else if (str[i] === "[") {
      flag2 = false;
    } else if (str[i] === "{") {
      flag3 = false;
    }
  }

  return flag1 || flag2 || flag3 ? true : false;
};

// console.log(isValid("()[]{}"));

// console.log(isValid("(]"));

// console.log(isValid("([)]"));

// console.log(isValid("{[]}"));

console.log(isValid("(){}}{"));
