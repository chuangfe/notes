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
