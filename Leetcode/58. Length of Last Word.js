var lengthOfLastWord = function (str) {
  const strArr = str.split(" ").reverse();
  const index = strArr.findIndex((el) => el.length > 0);
  return strArr[index].length;
};

// console.log(lengthOfLastWord("Hello World"));

// console.log(lengthOfLastWord("   fly me   to   the moon  "));

// console.log(lengthOfLastWord("luffy is still joyboy"));
