/**
 * useReducer 相當於擴展 useState 的 setState, 可以依照 dispatch 修改 setState 函式執行的內容.
 */

// state.
// action, 來自 dispatch 傳入的參數.
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "test":
      return { count: state.count - 10 };
  }
}

function Counter() {
  // dispatch 是 useReducer 的屬性.
  // reducer 是可以依照參數切換的 setState 函式.
  // { count: 0 } 相當於 state 的初始值.
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });

  return (
    <React.Fragment>
      Count: {state.count}
      <hr />
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "test" })}>-10</button>
    </React.Fragment>
  );
}
ReactDOM.render(<Counter></Counter>, document.querySelector("#app"));
