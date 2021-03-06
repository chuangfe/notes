// 請在 entry js 中 import component header script.js

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// import frameworks
// import $ from "jquery";
// import vue from "vue";
// import "popper.js";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// import component style
import "./style.scss";

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// 請在 views html 使用 ${require('')} 引入 components 的 template

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// component script

// 不需要參數或是熱更新時使用
// (function() {})();

// 需要參數或是熱更新時使用
// export function header(){};
// export default function header(){};

// 需要拋出物件時使用
// export const object = {};
// export default const object = {};

// 補充
// export 可以拋出多個物件
// export default 只能拋出一個物件

// example
export const headerObject = {};
export function headerFunction() {
  console.log("Header Script");
}
