// String.prototype.replace(舊目標字串, 新目標字串);
// 用於將字串的內容替換
// 不影響原本的字串，返回新的字串

// /c/ 正規的目標內容
// g 返回所有符合的目標內容
console.log("abcabcabc".replace(/c/g, "f")); // abfabfabf

// 配合分組使用，隱藏手機號碼部分數字
console.log("0912345678".replace(/^(\d{4})(\d{3})(\d{3})$/, "$1***$3")); // 0912***678

// 將 ul 和 li 替換成 div
console.log(
  "<ul><li></li><li></li><li></li></ul>".replace(/(\<\/?)(\w+)(\>)/g, "$1div$3")
); // <div><div></div><div></div><div></div></div>
