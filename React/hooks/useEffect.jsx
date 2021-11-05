/**
 * useEffect, 用於監視 useState 的值.
 *
 * 基本上 useEffect 大致有三種用法.
 */

function TestUseEffect() {
  /**
   * 相當於 state 有一個叫 value 的狀態, setValue 是專門更新 value 的函式, 然後 value 的初始值是 React.useState 傳入的值.
   */
  const [val, setVal] = React.useState("abc");
  const [flag, setFlag] = React.useState(true);

  function handlerChange(e) {
    // 跟 class component 更新 state 一樣, 建議使用函式返回值.
    setVal((prev) => e.target.value);
  }

  // 第一種用法, 監視資料, 但是無法獲取資料更新前的值.
  React.useEffect(() => {
    console.log("useEffect: val", val);
  }, [val]);

  /**
   * 第二種用法, 在元件繪製畫面時執行一次, 在元件被刪除時執行第二次, 暫時無法測試.
   * 目前推論, 當 state 改變時, 會重新執行 TestUseEffect 函式, 故返回函式的寫法不推薦自己寫 state 控制.
   */
  // function handlerResize() {}
  // React.useEffect(() => {
  //   console.log("window 綁定 handlerResize 函式.");
  //   window.addEventListener("resize", handlerResize);

  //   return function cleanup() {
  //     console.log("window 刪除 handlerResize 函式.");
  //     window.removeEventListener("resize", handlerResize);
  //   };
  // });

  // 第三種用法, 只執行一次的 useEffect.
  // React.useEffect(() => {
  //   console.log("只執行一次的 useEffect.");
  // }, []);

  return (
    <React.Fragment>
      <input type="text" value={val} onChange={handlerChange} />

      <hr />

      <button
        onClick={() => {
          setFlag((prev) => false);
        }}
      >
        按鈕
      </button>
    </React.Fragment>
  );
}

ReactDOM.render(
  <TestUseEffect></TestUseEffect>,
  document.querySelector("#app")
);
