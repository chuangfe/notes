/**
 * react
 * react hook
 * react router
 * react context, 類似 vuex 的功能.
 * redux, 應該是 react context 的超級放大版.
 */

/**
 * 介紹 jsx 部分規則.
 *
 * 虛擬 DOM 不需要引號.
 *
 * 虛擬 DOM 插入變數, 使用 {} 符號.
 * 虛擬 DOM 的 class, 改使用 className 屬性.
 * 虛擬 DOM 的 style, 改使用 {{}} 符號寫物件.
 *
 * 虛擬 DOM 只能有一個根元素.
 *
 * 虛擬 DOM 標籤必需閉合.
 *
 * 虛擬 DOM 的原生標籤使用全小寫, 使用 component 則是字首大寫.
 */

/**
 * jsx 特殊語法
 *
 * {...object} 拆解物件, 並將所有屬性傳給 component props.
 *
 * true && jsx tag, 會返回 jsx tag.
 * false && jsx tag, 會返回 false.
 *
 * jsx tag attr, class => className.
 * jsx tag attr,  => className.
 */

/**
 * 柯里化函式, 函式返回函示, 達到接收多個參數的目標.
 *
 * 高級函式, 符合條件, 則一即可.
 * 1. 函式接收的參數是含式.
 * 2. 函式的返回值, 還是函式.
 */

class Basic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "React",
      data: ["Vue", "React", "Angular"],
    };
  }

  // 科里化函式.
  setData = (dataType) => {
    return (event) => {
      this.setState({ [dataType]: event.target.value });
    };
  };

  render() {
    const { title, data } = this.state;

    return (
      <div>
        <div className="title-container">
          <h1
            className="font-italic"
            style={{ fontSize: "24px", textDecoration: "underline" }}
          >
            {title}
          </h1>
        </div>

        <div className="input-container">
          <input type="text" value={title} onChange={this.setData("title")} />
        </div>

        <div className="list-container">
          <ul>
            {data.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

// 將虛擬 DOM 放到容器內.
ReactDOM.render(<Basic></Basic>, document.querySelector("#app"));
