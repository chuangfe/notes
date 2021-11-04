/**
 * render props.
 *
 * 1. 將模組化元件的思考方式, 轉為模組化行為.
 *
 * 2. 通俗的概念就是, 將會產生資料或是狀態的 mouse 元件的 state 拋出來.
 *
 * 3. 好處, 如果我要修改接收 mouse state 的元件, 可以不用修改 mouse 元件.
 */

class DivRect extends React.Component {
  render() {
    const { x, y } = this.props;

    return (
      <div className="rect" style={{ left: x + "px", top: y + "px" }}></div>
    );
  }
}

class MouseMove extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "React",
      text: "render prop",
      x: 0,
      y: 0,
    };
  }

  mousemove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  render() {
    const { title, text, x, y } = this.state;

    return (
      <div className="mouse-container" onMouseMove={this.mousemove}>
        <h1>{title}</h1>

        <p>
          X: {x}, Y: {y}
        </p>

        {/* 在這裡呼叫 props.render, 然後傳入自己的 state. */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        {/* key 叫 render 是固定寫法, 不能修改. */}
        <MouseMove
          render={(state) => {
            // 好處, 我可以在 App component 隨時更改接收 state 的元件.
            return <DivRect x={state.x} y={state.y}></DivRect>;
          }}
        ></MouseMove>
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.querySelector("#app"));
