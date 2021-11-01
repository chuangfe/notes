// Source Map
// 在 webpack.config.js module.exports.devtool = 'source-map'
// 由於 webpack build 後程式碼接近不可讀，故 source-map 會新創建檔案，類似於書本目錄

// 可選屬性介紹
// [inline-|hidden-|eval-|][nosources-][cheap-[module-]]source-map

// source-map 新增 .mpa 檔案，最基礎版

// inline-source-map 將 .map 檔案的程式碼加入至 js 檔案中最尾部
// build 速度較快
// 提示程式碼錯誤時，是依照 build 前的程式碼位置
// 可以將錯誤的程式碼精確到行列數

// hidden-source-map 新增 .mpa 檔案，隱藏 build 前的程式碼
// 提示程式碼錯誤時，是依照 build 後的程式碼位置，不推薦開發時使用
// 為了隱藏重要程式碼才會使用，比如老鳥的框架不可以給菜鳥改

// eval-source-map 將 .map 檔案的程式碼加入至每個 js 模組後面
// 與 inline-source-map 相同，檔案多了哈西值

// nosources-source-map 新增 .mpa 檔案，隱藏全部程式碼，不推薦開發時使用
// 可以看到程式碼的錯誤提示，但是找不到錯誤的位置
// 為了隱藏重要程式碼才會使用，比如老鳥的框架不可以給菜鳥改

// cheap-source-map 新增 .mpa 檔案
// 提示程式碼錯誤時，是依照 build 前的程式碼位置
// 提示錯誤時是一整行，而非一行的某部分段落

// cheap-module-source-map 新增 .mpa 檔案，待補充
// module 會將 loader 的 source-map 也加入

// 開發環境
// 速度比較 eval > inline > cheap
// 速度比較 eval-cheap-source-map > eval-source-map
// 推薦使用 eval-source-map

// 上線環境，通常只使用外聯的 .map 檔案
// 依照尋找錯誤的方便性排名
// 1. source-map
// 2. nosources-source-map 用於隱藏全部程式碼
// 3. hidden-source-map 速度較快，只隱藏 build 前的程式碼
// 4. cheap-module-source-map 速度較快
// 推薦此用 source-map / cheap-module-source-map
