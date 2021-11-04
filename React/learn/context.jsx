/**
 * context 使用於需要將資料傳入子孫元件時使用, 可以避免每層元件重複傳遞資料.
 */

const MyContext = React.createContext();
const { Provider, Consumer } = MyContext;

class AppleComponent extends React.Component {
  render() {
    console.log("Apple", this.context);

    return (
      <div className="container">
        <h6>A Component</h6>

        <hr />

        <BigComponent></BigComponent>
      </div>
    );
  }
}

// class 元件使用 context.
class BigComponent extends React.Component {
  // 這是固定寫法, 在需要資料的元件, 使用 static 接收.
  static contextType = MyContext;

  render() {
    console.log("Big", this.context);

    return (
      <div className="container">
        <h6>B Component</h6>

        <hr />

        <CatComponent></CatComponent>
      </div>
    );
  }
}

// 函式元件使用 context.
function CatComponent() {
  return (
    <div className="container">
      <h6>C Component</h6>

      <MyContext.Consumer>
        {(value) => {
          console.log("Cat", value);
          return <p>{value.text}</p>;
        }}
      </MyContext.Consumer>
    </div>
  );
}

class ContextClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "來自 ContextClass 的 text.",
    };
  }

  render() {
    const { text } = this.state;

    return (
      <div className="context-class">
        <h1>Context Class</h1>

        <hr />

        {/* 使用 context 元件傳遞資料, key 必須是 value. */}
        <MyContext.Provider value={{ text }}>
          <AppleComponent></AppleComponent>
        </MyContext.Provider>
      </div>
    );
  }
}

ReactDOM.render(<ContextClass></ContextClass>, document.querySelector("#app"));
