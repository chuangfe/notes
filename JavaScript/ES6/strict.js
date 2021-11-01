// 嚴格模式，可以在任何 JS 部分加上這行程式，會要求程式更嚴格的規則

// 1. 變數必須宣告後才能使用，必須使用 let or const

// 2. 函數形參名稱不能相同
// 例如:function(a, a){} 這種不允許

// 3. 不可使用 with 關鍵字

// 4. 只讀屬性不能賦值
// 例如:Array or String 的 length

// 5. 不可使用 8 進位

// 6. 不可刪除不能刪除的屬性
// 例如:delete arr.length

// 7. 不可刪除變數

// 8. eval 不能使用外層作用域的變數

// 8. eval arguments 不能重新賦值

// 9. 不可使用 arguments.callee 與 arguments.callee.caller

// 10. 不可以在最外層的作用域使用 this 關鍵字

// 11. ES6 不建議使用 arguments，有其他可以使用

// 12. 增加三個保留字 protected static interface

"use strict";
