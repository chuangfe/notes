import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Home from "./pages/Home/index.jsx";

/**
 * global, 可以放 js 工具, 大概是保存 const 檔案.
 */

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
