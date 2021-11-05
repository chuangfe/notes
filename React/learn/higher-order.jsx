// 高級元件, 簡單而言, 就是元件接收元件, 並返回元件.

/**
 * 高級元件的規則是, 建立一個函式, 該函式最少接收一個參數, 參數是 react component, 姑且稱為 a 元件, 函式執行時, 會產生 b 元件, 並將一些 state methods 包裝至 b 元件, 然後 b 元件使用 props context 等方式將 state methods 傳給 a 元件, 並且 b 元件的 render jsx template 是 a 元件, 最後函式返回 b 元件.
 *
 * 結果而言, 函式執行後用 b 元件把 a 元件包起來, 所以假設有很多元件都需要 b 元件的 state methods 都可以使用該函式, 產出新的 b 元件包裝起來多個元件.
 *
 * 另一個範例與該範例相當接近, 唯一差別在於元件會接收 props, 在把 props 丟給 DataSource 物件撈資料.
 *
 * 不可以在 render 中執行 HOC 函式, 請你在外面跑完函式, 在將結果的元件放到 render 中.
 *
 * ref 需要使用其他方式傳遞.
 */

// 該範例只抽出 handlerClick, state template 不抽離.
class Apple extends React.Component {
  // 給構造函式加上名字, 方便在 React Developer Tools 觀察.
  static displayName = "Apple";

  state = {
    title: "Apple",
  };

  render() {
    const { title } = this.state;
    const { handlerClick } = this.props;

    return (
      <div className="container">
        <p>{title} 元件</p>
        <button
          onClick={() => {
            handlerClick(title);
          }}
        >
          按鈕
        </button>
      </div>
    );
  }
}

class Cat extends React.Component {
  // 給構造函式加上名字, 方便在 React Developer Tools 觀察.
  static displayName = "Cat";

  state = {
    title: "Cat",
  };

  render() {
    const { title } = this.state;
    const { handlerClick } = this.props;

    return (
      <div className="container">
        <p>{title} 元件</p>
        <button
          onClick={() => {
            handlerClick(title);
          }}
        >
          按鈕
        </button>
      </div>
    );
  }
}

// 高級組件函式, 封裝 handlerClick 功能.
// 不可以修改接收的元件.
function higherOrderFunction(Component) {
  const { displayName } = Component;
  return class extends React.Component {
    // 給構造函式加上名字, 方便在 React Developer Tools 觀察.
    static displayName = `higherOrderFunction(${displayName})`;

    // 抽離共用功能.
    handlerClick = (value) => {
      console.log(value);
    };

    render() {
      return <Component handlerClick={this.handlerClick}></Component>;
    }
  };

  // 假設抽離的功能很多, 你懶的一個一個加入, 你可以這樣寫.
  // import hoistNonReactStatic from "hoist-non-react-statics";

  // class HigherOrderFunction extends React.Component {
  //   handlerClick = (value) => {
  //     console.log(value);
  //   };

  //   render() {
  //     return <Component></Component>;
  //   }
  // }

  // 直接複製所有實例的 methods, 需要再實驗.
  // hoistNonReactStatic(HigherOrderFunction, Component);

  // return HigherOrderFunction;
}

// 使用 HigherOrder 包裝 Apple Cat, 產生新的 component.
// 將擁有 handlerClick 功能的元件包裝 Apple Cat.
const AppleComponent = higherOrderFunction(Apple);
const CatComponent = higherOrderFunction(Cat);

function App() {
  return (
    <React.Fragment>
      <AppleComponent></AppleComponent>
      <CatComponent></CatComponent>
    </React.Fragment>
  );
}

ReactDOM.render(<App></App>, document.querySelector("#app"));
