class Weather extends React.Component {
  // 建構函式的賦值函式.
  constructor(props) {
    super(props);

    // 狀態, 資料.
    this.state = { isRain: true, wind: "微風" };
    /**
     * this.setRain, 是實例的屬性.
     * this.setRain.bind(this), 是原型的屬性.
     * bind, 修改函式的 this 物件指向, 並返回修改完成的函式.
     */
    this.setRain = this.setRain.bind(this);

    console.log("constructor");
  }

  /**
   * 由於 setRain 是 onClick 的回調函式, 所以不是從實例調用, 而是使用實例查詢到函式, 並將函式值接賦值給 onClick 事件, 故 this 會丟失.
   *
   * 依照 onClick 事件的觸發次數執行.
   */
  setRain() {
    console.log("setRain", this);

    // 這是錯誤的, react 不接受 state(狀態) 的直接修改.
    // this.state.isRain = !this.state.isRain;

    // 使用 react 的 setState api 修改 state(狀態).
    // 更新使用物件的合併, 而非替換整的物件.
    this.setState({ isRain: !this.state.isRain });
  }

  /**
   * render 函式在 template 時會執行一次.
   * 且當 setState 修改 state(狀態) 時再次執行.
   */
  render() {
    console.log("render", this); // MyComponent 的實例物件.

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
