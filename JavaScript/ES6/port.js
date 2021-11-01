// import 用於引入其他 js 檔案拋出的物件
// 區分為
// import { var, var ...  } from './a.js';
// import var from './a.js';

// export 用於拋出物件
// 重點：可以使用多次

// export default 用於拋出物件
// 重點：只能存在一個

// -----------------------------------------------------------------------------

// import and export 配合使用

// 通常情況
// 假設 a.js 有以下程式碼
export const users = [
  {
    id: 0,
    name: "Ian",
  },
  {
    id: 1,
    name: "Alex",
  },
];

export function sayHi() {
  console.log("Hi");
}

// 在 index.js 使用 import 需要這樣寫
// export 拋出多少物件，import 使用多少 { var, var ...  } 接收
import { users, sayHi } from "./a.js";

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// import and export and as 配合使用
// 通常 import and export 的接收與拋出時的物件名稱必須一樣，但是使用 as 可以修改變數名稱

// 通常情況
// 假設 a.js 有以下程式碼
export const users = [
  {
    id: 0,
    name: "Ian",
  },
  {
    id: 1,
    name: "Alex",
  },
];

export function sayHi() {
  console.log("Hi");
}

// 在 index.js 使用 import 需要這樣寫
// 使用 as 可以將 sayHi 改為 sayHello
import { users, sayHi as sayHello } from "./a.js";

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// import and * 配合使用
// * 符號代表接收所有 export and export default 拋出的物件
// 必需配合 as 使用
// 似乎不夠嚴謹?

// 通常情況
// 假設 a.js 有以下程式碼
export const users = [
  {
    id: 0,
    name: "Ian",
  },
  {
    id: 1,
    name: "Alex",
  },
];

export default function sayHi() {
  console.log("Hi");
}

// 在 index.js 使用 import 需要這樣寫
import * as data from "./a.js";

// 使用屬性方式獲取
console.log(data.users, data.sayHi);

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// import and export default 配合使用
// export default 只能存在一個

// 假設 a.js 有以下程式碼
export default function sayHi() {
  console.log("Hi");
}

// 在 index.js 使用 import 需要這樣寫
import sayHi from "./a.js";

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
