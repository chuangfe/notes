/**
 * useState, 讓 function component 也可以使用 state 的狀態更新.
 */

function TestUseState() {
  /**
   * 相當於 state 有一個叫 value 的狀態, setValue 是專門更新 value 的函式, 然後 value 的初始值是 React.useState 傳入的值.
   */
  const [value, setValue] = React.useState("abc");

  function handlerChange(e) {
    // 跟 class component 更新 state 一樣, 建議使用函式返回值.
    setValue((prev) => {
      const value = e.target.value;

      console.log(prev, value);

      return value;
    });
  }

  return (
    <React.Fragment>
      <input type="text" value={value} onChange={handlerChange} />
    </React.Fragment>
  );
}

ReactDOM.render(<TestUseState></TestUseState>, document.querySelector("#app"));
