// resolve 介紹

let resolve = {
  // 將路徑設為變數，在 js 在 import 時可以不用 ../../../ 尋找目標目錄的層級
  // 缺點，沒有目錄提示，容易出錯
  alias: {
    $views: path.resolve(__dirname, "src/views"),
    $components: path.resolve(__dirname, "src/components"),
    $assets: path.resolve(__dirname, "src/assets"),
  },
  // 省略檔案的副檔名，在 js 在 import 時可以不用 .js .css .html 等副檔名
  // 缺點，該屬性省略的方式是依設定的副檔名去套用，若同時有 index.js index.css
  /**
   * 缺點，該屬性省略的方式是依設定的副檔名去套用，若同時有 index.js index.css
   * 且有設置 ["html", "css", "js"] 則兩個檔案會有一個永遠找不到
   */
  extensions: ["html", "css", "js"],
};
