// output 介紹

let output = {
  // 輸出路徑，與文件名稱
  filename: "js/[name].bundle.js",
  // 所有文件的輸出目錄
  path: path.resolve(__dirname, "dist"),
  // 在所有資源打包後，引入時的路徑前加上字串
  // 配合伺服器時使用，通常會使用配合網域
  // 代表 images/a.jpg -> /images/a.jpg
  // publicPath: "/",
  // 將非 entry 指定的入口 js 文件，額外打包後的路徑與名稱
  // 相當於把所有 import 的 js 檔案全部拆開，暫時不使用
  // chunkFilename: "js/[name]_chunk.js",
  // 將 entry js 打包後賦予全局變數
  // 通常配合 dll 打包框架時使用，正常情況不會使用
  // library: "[name]",
  // 將全局變數賦予物件的屬性
  // libraryTarget: "window",
  // libraryTarget: "commonjs",
};
