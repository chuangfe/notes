var romanToInt = function (str) {
  const data = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;

  for (let i = 0; i < str.length; i++) {
    if (data[str[i]] < data[str[i + 1]]) {
      total += data[str[i + 1]] - data[str[i]];
      i += 1;
    } else {
      total += data[str[i]];
    }
  }

  return total;
};

console.log(romanToInt("MCMXCIV"));
