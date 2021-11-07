// 嘗試 hooks 與 hoc 抽象化的差別.

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// 使用 hooks 抽離共用功能.
function useBind({ title, value }) {
  const [val, setVal] = React.useState(value);
  React.useEffect(() => {
    console.log(title);
  }, [val]);

  function handlerClick() {
    console.log(val);
  }

  return {
    val,
    setVal,
    handlerClick,
  };
}

// Form 元件只負責取 useBind 的 hook 返回值, 和生產 jsx template 模版.
function HooksForm({ title, value }) {
  // 這裡才是 hooks 抽象化的用法.
  const { val, setVal, handlerClick } = useBind({ title, value });

  return (
    <div>
      <h3>{title}</h3>

      <input
        type="text"
        value={val}
        onChange={(event) => {
          setVal(() => event.target.value);
        }}
      />

      <button onClick={handlerClick}>按鈕</button>
    </div>
  );
}

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// 使用 higher order 抽象化.
function Methods(Component, { name }) {
  return class extends React.Component {
    static displayName = `Methods-${name}`;

    constructor(props) {
      super(props);
      this.state = Object.assign({}, props);
    }

    handlerChange = (value) => {
      this.setState(() => {
        return { value };
      });
    };

    handlerClick = () => {
      console.log(this.state.value);
    };

    render() {
      const { title } = this.props;
      const { value } = this.state;

      return (
        <Component
          title={title}
          value={value}
          change={this.handlerChange}
          click={this.handlerClick}
        ></Component>
      );
    }
  };
}

class HOCFrom extends React.Component {
  static displayName = "HOCFrom";

  render() {
    const { value, title, change, click } = this.props;

    return (
      <div className="container">
        <h3>{title}</h3>

        <input
          type="text"
          value={value}
          onChange={(event) => {
            change(event.target.value);
          }}
        />

        <button
          onClick={() => {
            click(value);
          }}
        >
          按鈕
        </button>
      </div>
    );
  }
}

const Apple = Methods(HOCFrom, { name: "Apple" });
const Cat = Methods(HOCFrom, { name: "Cat" });

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

function Root() {
  return (
    <React.Fragment>
      {/* hooks 抽離共用功能. */}

      <h2>Hooks</h2>

      <HooksForm title="Apple" value="123"></HooksForm>

      <HooksForm title="Cat" value="456"></HooksForm>

      <hr />

      {/* class HOC 抽離共用功能. */}

      <h2>Higher Order</h2>

      <Apple title="Apple" value="123"></Apple>

      <Cat title="Cat" value="456"></Cat>
    </React.Fragment>
  );
}

ReactDOM.render(<Root></Root>, document.querySelector("#app"));
