// module 介紹

// 觀察 loader use options 的寫法

let module = {
  rules: [
    {
      // 正規表達式指向某類型檔案
      test: "",
      // 正規表達式排除路徑的檔案
      exclude: "",
      // 指定某的路徑的檔案
      include: path.resolve(__dirname, "src"),
      // 使用單個 loader 的屬性
      loader: "",
      // 使用多個 loader 的屬性，檔案使用 loader 的順序為後往前
      use: ["", {}],
      // 使用 loader 時的可選項
      options: {},
      // 優先執行該 loader
      enforce: "pre",
      // 延後執行該 loader
      enforce: "post",
    },

    // html 使用單個 loader
    {
      test: /\.(html)$/,
      exclude: /(node_modules|bower_components)/,
      loader: "html-loader",
      options: {
        attrs: [":src"],
        // 讓 html 頁面可以使用 ${require('./../../components/header/template.html')} 插入 component
        interpolate: true,
      },
    },
    // css 使用多個 loader
    {
      test: /\.(sa|sc|c)ss$/i,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          // 可能會配合 output.publicPath 設置資源路徑前的網域
          // 這裡是為了處理 css 中的 url
          options: {
            publicPath: "../",
          },
        },
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            plugins: () => [autoprefixer()],
          },
        },
        "sass-loader",
      ],
    },
    // js 使用多個 loader
    {
      test: /\.m?js$/,
      // 排除的路徑
      exclude: /(node_modules|bower_components)/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            // 使用 babel 的暫存
            cacheDirectory: true,
          },
        },
        {
          loader: "eslint-loader",
          options: {
            // 起動暫存
            cache: true,
            // 修復 eslint 認為的錯誤
            fix: true,
          },
        },
      ],
    },
  ],
};
