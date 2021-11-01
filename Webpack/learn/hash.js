// hash
// 用於應對網頁暫存資料，讓下次讀取網頁時更快

// [hash:10] 代表哈希值取前十個字符
// filename: "./js/[name].bundle.[hash:10].js",

// 通常用於
// js output.filename
// css plugin MiniCssExtractPlugin filename

// hash
// 基本的哈希值，每次 build 都不相同

// chunkhash
// 根據 chunk 產生 hash
// 無法區分 js 與 css，因為 css 是由 js 引入，入 chunk 是一樣的

// contenthash
// 根據檔案的程式碼生產 hash 值，故不同的檔案 hash 都不同
