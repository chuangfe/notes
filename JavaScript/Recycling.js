// JS 中的回收機制，只有自動式

// Number、String、Boolean 以外的數據類型才有效

// 回收機制觸發條件，當物件不再被變數指向時，才會被消除

let obj = { name: "Ian" };

obj = null;

// 這樣可以觸發回收機制
