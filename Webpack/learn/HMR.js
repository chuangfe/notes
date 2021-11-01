// 補充 HMR 熱更新，即時更新 or 更新部分模組

// 首先，需要在 webpack.config.js 設置 devServer.hot = true;

// view html css 要開啟即時更新需要將檔案加入至 entry 裡，才能生效
// component html css 在 entry js import 就會自動及時更新，故不需要額外設置

// js 要開啟即時更新，需要以下步驟
// 在 entry js import 的 component js 需要使用 export default function(){} 回傳函式
// 在 entry js 使用變數接收 component js 回傳的函式
// 在 entry js 設置條件判斷
// import header from "./../../components/header/script";
// if (module.hot) {
//   module.hot.accept("./../../components/header/script", header);
// }
// 代表 "./../../components/header/script" 更改時，執行 header 函式
