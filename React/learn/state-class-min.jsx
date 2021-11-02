class Weather extends React.Component {
  // 在 class 寫賦值, 代表將屬性或方法賦值在實例物件身上, 而非原型身上.
  state = { isRain: true, wind: "微風" };

  // 這裡的 this 會因為 onClick={this.setRain} 而失去.
  // setRain() {
  //   console.log("setRain", this);
  //   this.setState({ isRain: !this.state.isRain });
  // }

  /**
   * 這裡的 this 在 onClick={this.setRain} 調用時, 因為是箭頭函式而往上層尋找, 故找到的是實例物件.
   */
  setRain = () => {
    console.log("setRain", this);

    // 利用賦值和箭頭函式, 可以獲取實例的屬性與方法.
    this.test();

    this.setState({ isRain: !this.state.isRain });

    /**
     * state props 可能是在非同步的情況下被更新, 若需要的值是計算過的, 可以使用函式返回值設置 setState.
     *
     * 目前遇到的狀況是, calcTodos 受到 todos hash 兩個資料的影響, 故修改 calcTodos 的 methods 中, 使用 function 返回值的 setState.
     *
     * 文件有提醒說, 需要計算的資料是否真的有必要掛在 state 身上, 還是直接在 render 函式內計算就好, 這需要詳細思考.
     *
     * 更甚之, 如果產品列表不會被修改, 只需要篩選後給頁面展示, 那產品列表也不應該掛到 state 身上.
     */
    // this.setState((state, props) => ({
    //   counter: state.counter + props.increment,
    // }));
  };

  test() {
    console.log("test", this);
  }

  // render 的 this 是實例物件.
  render() {
    // 解構賦值.
    const { isRain, wind } = this.state;

    return (
      <div className="container">
        <div className="title-container">
          <h1 className="title">
            今天{isRain ? "是下雨天" : "沒有下雨"}, {wind}
          </h1>
        </div>

        <div className="button-container">
          {/* react 綁定事件的方式, 駝峰式屬性. */}
          <input type="button" value="按鈕" onClick={this.setRain} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Weather></Weather>, document.querySelector("#app"));
