/**
 * 在 jsx 中的 ref 屬性可以獲取真實的 dom 元素.
 *
 * ref 不再推薦設置字串的類型, 聽說有效能的問題, 未來可能會移除.
 *
 * ref 推薦使用 function 方式設值, ref 會自動執行函式屬性, 該方式在 component 的 template 更新時, 會調用兩次這個函式屬性值.
 */

class InputComponent extends React.Component {
  refStringClickHandler = () => {
    const input = this.refs.refString;
    console.log(input);
    console.log(input.value);
  };

  refFunctionClickHandler = () => {
    const input = this.refFunction;
    console.log(input);
    console.log(input.value);
  };

  refClassClickHandler = () => {
    const input = this.refClass;
    console.log(input);
    console.log(input.value);
  };

  setInput = (el) => {
    this.refClass = el;
  };

  render() {
    return (
      <div className="container">
        {/* ref 屬性, 字串方式. */}
        <div className="input-container">
          <input id="refString" type="text" ref="refString" />
          <button onClick={this.refStringClickHandler}>點擊彈出警報</button>
        </div>

        <br />

        {/* ref 屬性, 函式方式. */}
        <div className="input-container">
          <input
            id="refFunction"
            type="text"
            ref={(currentNode) => (this.refFunction = currentNode)}
          />
          <button onClick={this.refFunctionClickHandler}>點擊彈出警報</button>
        </div>

        <br />

        {/* ref 屬性, class 方式. */}
        <div className="input-container">
          <input id="refClass" type="text" ref={this.setInput} />
          <button onClick={this.refClassClickHandler}>點擊彈出警報</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <InputComponent></InputComponent>,
  document.querySelector("#app")
);
