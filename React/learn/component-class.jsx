// 首字母必需要大寫.
// 在 react 內使用 class 元件, 必需要繼承 React.Component 元件.
class MyComponent extends React.Component {
  // jsx html 若要使用 this.function, 代表要從實體身上讀到 methods.
  constructor(props) {
    super(props);

    // 使用 bind 將原型的 function 綁定到實體的 selfBindFunction 屬性上, 此乃標準寫法.
    this.selfBindFunction = this.bindFunction.bind(this);

    // 實體的屬性.
    this.index = 1;
  }

  bindFunction() {}

  // 新語法, 可以直接使用在 jsx html 身上, this 指向是實體.
  arrowFunction = () => {};

  // 實體的屬性, 可綁各種值包含 function.
  index = 1;

  // 建構函式的屬性, 非原型故實體無法獲取, 可綁各種值包含 function.
  // 想當於 MyComponent.key = value;
  static index = 9;

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
