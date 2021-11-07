/**
 * lifecycle, 生命週期相關.
 *
 * componentDidMount, react 新建元件後, 繪至頁面後執行一次, 元件狀態更新不會再次更新, 如果元件被刪除, 並且再次新建元件, 可能會再次執行.
 *
 * componentDidUpdate(prevProps, prevState, snapshotValue), react 元件 state props ref 更新並且在 render 後執行.
 *
 * componentWillUnmount, 元件被刪除前執行.
 *
 * ReactDOM.unmountComponentAtNode(Element), 刪除 Element 下的所有 react 元件.
 *
 * 不推薦在 render componentDidUpdate 函式內直接修改 state props ref, 因為可能會造成無限遞迴, 但是可以在事件內更新狀態.
 *
 * lifecycle 順序.
 * constructor -> render -> componentDidMount -> state props ref 更新 -> render -> getSnapshotBeforeUpdate -> componentDidUpdate.
 *
 * getDerivedStateFromProps(props, state), 建構函式的生命週期, 必需要返回物件或是 null, 返回的物件會覆蓋 state 的屬性, 故 state 的值只依照 props 的值, 並且不可以使用 setState 修改, 只有在極端情況下會使用.
 *
 * getSnapshotBeforeUpdate(prevProps, prevState) 在 state props ref 更新前執行, 必需要有返回值, 該返回值會傳給 componentDidUpdate 使用.
 */

const app = document.querySelector("#app");

class RemoveButton extends React.Component {
  handlerRemoveComponent = () => {
    ReactDOM.unmountComponentAtNode(app);
  };

  render() {
    return (
      <button onClick={this.handlerRemoveComponent}>刪除 Life 元件</button>
    );
  }
}

class Life extends React.Component {
  state = {
    opacity: 1,
    timer: null,
    val: "",
  };

  // 生命週期函式, 新建元件後執行, this 指向實例.
  componentDidMount() {
    // console.log("mount");
    // 掛在實例身上, 不是實例的 state 身上.
    // this.timer = setInterval(() => {
    //   this.setState(({ opacity }) => {
    //     const calcOpacity = opacity > 0 ? opacity - 0.1 : 1;
    //     return { opacity: calcOpacity };
    //   });
    // }, 200);
  }

  // 生命週期函式, 元件被刪除前執行, this 指向實例.
  componentWillUnmount() {
    // clearInterval(this.timer);
  }

  componentDidUpdate(prevProps, prevState, snapshotValue) {
    console.log("componentDidUpdate", prevProps, prevState, snapshotValue);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    return 123;
  }

  render() {
    // console.log("render");

    const { opacity, val } = this.state;

    return (
      <div className="life">
        <h1 style={{ opacity }}>Life Component</h1>

        <RemoveButton></RemoveButton>

        <input
          type="text"
          value={val}
          onChange={(event) =>
            this.setState((state) => {
              return { val: event.target.value };
            })
          }
        />
      </div>
    );
  }
}

ReactDOM.render(<Life></Life>, app);
