// npm 是 node.js 的模組管理軟體，較新版的 node.js 已經附帶 npm 所以不用特別安裝

// npm 通常會用於安裝網站前後端的模組
// 前端:jQuery、Vue、bootstrap ...
// 後端:sass node-sass、json-server、webpack、webpack module、webpack plugins ...

// 若網頁使用 cdn 則可以使用 VsCode Extensions cdnjs

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// Npm 指令

// npm init 在專案的 npm 初始化，會產生 package.json 檔案，用於紀錄 npm 下載的模組等等

// npn install [模組名稱] 在局部安裝模組，依照當前終端機的路徑安裝模組，只能在該路徑的專案內使用模組
// 例如:npn install bootstrap --sever-dev
// npn install -g [模組名稱] 在全局(整台電腦)安裝模組

// npn uninstall [模組名稱] 刪除當前專案(當前終端機的路徑)內的模組
// npn uninstall -g [模組名稱] 刪除全域安裝模組

// -g 全局安裝
// --sever 將下載的模組名字，保存至 package.json dependencies (網站上線時使用)
// --sever-dev  同上，保存至 package.json devDependencies (網站開發時使用)

// 指令縮寫
// --save === -S
// --save-dev === -D

// 查詢當前 npm 版本
// npm -v

// 查詢 npm 所有版本
// npm show npm

// 查詢 npm 全局模組
// npm list -g --depth 0

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// Npm 目前使用的模組

// json-server 安裝指令 npm install - g json-server
// json-server 可以把 json 檔案模擬成伺服器，代表可以用 Ajax 去針對這個 Json 操作，get post patch delete ...
// 在 命令視窗 Ctrl + ` 輸入 json-server data.json ，需要注意當前路徑是否正確，且有沒有 json 檔案
// 修改終端機當前路徑，輸入 cd xxx ，讓終端機進入 xxx 資料夾

// webpack v4+ 版本需要安裝 webpack 與 webpack-cli
// 由於 npm 較低版本無法使用 npx 指令(使用專案內的 node 套件)，所以要裝全局的版本
// 專案版本
// webpack 安裝指令 npm install --save-dev webpack
// webpack-cli 安裝指令 npm install --save-dev webpack-cli
// 全局版本，若使用 npx 則不需要
// npm install -g webpack
// npm install -g webpack-cli

// vue-cli 安裝指令 npm install -g @vue/cli
