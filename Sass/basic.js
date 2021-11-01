/**
 * 可以配合 VS Code Live Sass Compiler
 * 不需要編譯的 scss, 檔案名稱前加上 _ 符號, 像是只需要 import 的檔案
 * 例如 _variable.scss
 */

// setting 的設定方式
let json = {
  // Live Sass Compiler 設定，輸出的檔案
  "liveSassCompile.settings.formats": [
    {
      // expanded 未壓縮的格式
      format: "expanded",
      // 將 scss 編譯為 css 檔案
      extensionName: ".css",
      // 將 scss 轉換到的路徑
      savePath: "/style",
    },
    {
      // compressed 壓縮後的格式, 適合上線使用
      format: "compressed",
      // 將 scss 編譯為 css 檔案, 檔案名稱 xxx.min.css
      extensionName: ".min.css",
      // 將 scss 轉換到的路徑
      savePath: "/dist/style",
    },
  ],
  // Live Sass Compiler 設定，排除的路徑，避免轉到別的檔案
  "liveSassCompile.settings.excludeList": ["**/node_modules/**", ".vscode/**"],
  // Live Sass Compiler 設定，CSS Map 如果模組化可以改為 false，用途，把 Sass 和 Css 做行數對應
  "liveSassCompile.settings.generateMap": true,
  // Live Sass Compiler 設定，樣式前綴
  "liveSassCompile.settings.autoprefix": [
    // 瀏覽器市占率大於 1% 的瀏覽器才加上樣式前綴
    "> 1%",
    // 瀏覽器最新的兩個版本
    "last 2 versions",
  ],
};
