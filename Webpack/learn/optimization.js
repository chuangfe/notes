// optimization 介紹

let optimization = {
  splitChunks: {
    // 使用 chunks: "all" 就有許多默認值，通常不會去改
    chunks: "all",

    // 檔案小餘 30kb 不會分割
    minSize: 30 * 1024,
    maxSize: 0,
    // 若要分割至少 import 一次
    minChunks: 1,
  },
};
