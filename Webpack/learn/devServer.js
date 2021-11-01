// devServer 介紹

let devServer = {
  // 模擬伺服器的目錄，通常會設定 build 之後的目錄
  contentBase: path.join(__dirname, "dist"),
  // 開啟 gzip 壓縮，可以執行的更快
  compress: true,
  // 模擬伺服器的端口
  port: 8080,
  // 設定域名
  // host: "https://www.google.com.tw/",
  // 自動打開瀏覽器
  open: true,
  // 開啟 HMR 熱更新
  hot: true,

  // 監視模擬伺服器的目錄
  watchContentBase: true,
  // 監視的可選項
  watchOptions: {
    ignored: "/node_modules/",
  },
  // 起動 devServer 顯示日誌(伺服器開啟什麼的日誌)
  clientLogLevel: "none",
  // 除了基本資訊外，其他不顯示
  quiet: true,
  // 報錯時不要顯示在 ... 終端機?
  overlay: false,

  // 模擬跨域，配合 json-server 使用
  // 瀏覽器與伺服器是有跨域名組檔，但伺服器之間是沒有的
  proxy: {
    // "/api": "http//:localhost:8888",
    "/api": {
      target: "http//:localhost:8888",
      // 發送請求時，將網址重寫，例如:/api/xxx -> /xxx
      pathRewrite: {
        "^/api": "",
      },
    },
  },
};
