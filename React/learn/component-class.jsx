// 首字母必需要大寫.
// 在 react 內使用 class 元件, 必需要繼承 React.Component 元件.
class MyComponent extends React.Component {
  // 必需使用 render 函式, 並且有返回 jsx html 值.
  render() {
    console.log(this); // MyComponent 的實例物件.

    /**
     * 複雜元件, 代表元件有狀態(state).
     */
    return (
      <div className="title-container">
        <h1 className="title">React Class 元件, 適合複雜元件使用</h1>
      </div>
    );
  }
}

// 標籤必需閉合.
ReactDOM.render(<MyComponent></MyComponent>, document.querySelector("#app"));
