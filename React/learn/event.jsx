/**
 * 在 jsx 中的 event 介紹.
 *
 * onclick => onClick, 修改為駝峰命名方式.
 *
 * 在事件函式的參數 event.target 獲取綁定事件的目標.
 */

class InputComponent extends React.Component {
  constructor(props) {
    super(props);

    // 標準寫法.
    this.state = {
      value: "",
    };

    // 標準寫法.
    this.setValueHandler = this.setValueHandler.bind(this);
  }

  // 標準寫法．
  setValueHandler(e) {
    this.setState({ value: e.target.value });
  }

  // 簡寫方式.
  clickHandler = () => {
    console.log(this.state.value);
  };

  render() {
    const { value } = this.state;

    return (
      <React.Fragment>
        <div className="input-container">
          <input
            type="text"
            value={value}
            onChange={this.setValueHandler}
            ref={this.refApi}
          />

          <button onClick={this.clickHandler}>點擊彈出警報</button>
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <InputComponent></InputComponent>,
  document.querySelector("#app")
);
