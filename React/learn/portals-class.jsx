/**
 * 從結果推論, react 的 dom tree 未必會與 html tree 相同.
 *
 * 這個範例很明確的, 將 react dom tree 中可以觸發事件冒泡的 dom, 丟到 html 可以觸發事件冒泡的 dom tree 外.
 *
 * 結果推論, react 的事件冒泡, 依照 react 的 dom true, 至於 html dom tree 是如何, react 不在乎.
 */

// 這兩個 dom 在 html 頁面.
const appRoot = document.getElementById("app");
const modalRoot = document.getElementById("modal-root");

function Button() {
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
}

class Modal extends React.Component {
  constructor(props) {
    super(props);

    // 新建 div.
    this.el = document.createElement("div");
    this.el.id = "create-div";
  }

  // 該元件繪製到畫面後, 把新建的 div 插入至 modal-root div 中.
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  // 待補充.
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    // 使用特殊的 methods 將 dom 丟到外面.
    // ReactDOM.createPortal(拋出的 react component, 接收 component 的真實 dom);
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      clicks: state.clicks + 1,
    }));
  }

  render() {
    return (
      <div id="parent" onClick={this.handleClick}>
        <p id="count">Number of clicks: {this.state.clicks}</p>

        <p id="text">
          Open up the browser DevTools to observe that the button is not a child
          of the div with the onClick handler.
        </p>

        <Modal>
          {/* 這裡傳入的元件, 可以在 Modal props.children 收到. */}
          <Button></Button>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<Parent></Parent>, app);
