/**
 * 在 jsx 中的 ref 是用來獲取 dom tag 使用.
 *
 * ref 不再推薦設置字串的類型, 聽說有效能的問題, 未來可能會移除.
 *
 * ref 推薦使用 function 方式設值, ref 會自動執行函式屬性, 該方式在 component 的 template 更新時, 會調用兩次這個函式屬性值.
 */

class InputComponent extends React.Component {
  constructor(props) {
    super(props);

    // 使用文件介紹 ref api 的獲取方式.
    this.refApi = React.createRef();
  }

  setClassInput = (el) => {
    this.refClass = el;
  };

  // 使用文件介紹 api ref 獲取方式.

  render() {
    return (
      <div className="container">
        {/* ref 屬性, 字串方式. */}
        <div className="input-container">
          <input id="refString" type="text" ref="refString" />
          <button onClick={() => console.log(this.refs.refString.value)}>
            點擊彈出警報
          </button>
        </div>

        <br />

        {/* ref 屬性, 函式方式. */}
        <div className="input-container">
          <input
            id="refFunction"
            type="text"
            ref={(currentNode) => (this.refFunction = currentNode)}
          />
          <button onClick={() => console.log(this.refFunction.value)}>
            點擊彈出警報
          </button>
        </div>

        <br />

        {/* ref 屬性, 通過 class 實體的 methods 方式. */}
        <div className="input-container">
          <input id="refClass" type="text" ref={this.setClassInput} />
          <button onClick={() => console.log(this.refClass.value)}>
            點擊彈出警報
          </button>
        </div>

        <br />

        {/* ref 屬性, api 方式. */}
        <div className="input-container">
          <input id="refApi" type="text" ref={this.refApi} />
          <button onClick={() => console.log(this.refApi.current.value)}>
            點擊彈出警報
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <InputComponent></InputComponent>,
  document.querySelector("#app")
);
