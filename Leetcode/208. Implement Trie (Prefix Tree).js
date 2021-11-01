var Trie = function () {
  this.wordArr = [];
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  this.wordArr.push(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  const index = this.wordArr.findIndex((item) => {
    return item === word;
  });

  return index < 0 ? false : true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  const index = this.wordArr.findIndex((item) => {
    return item.includes(prefix);
  });

  return index < 0 ? false : true;
};

// const obj = new Trie();
// obj.insert("abc");
// obj.search("abc"); // true
// obj.search("a"); // false
// obj.startsWith("abc"); // true
