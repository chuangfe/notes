// 首字母必需要大寫.
function MyComponent() {
  // babel 開啟嚴格模式, 禁止自訂函式指向 window 物件.
  console.log(this); // undefined

  return (
    <div className="title-container">
      <h1 className="title">React 函式元件, 適合簡單元件</h1>
    </div>
  );
}

// 標籤必需閉合.
ReactDOM.render(<MyComponent></MyComponent>, document.querySelector("#app"));
