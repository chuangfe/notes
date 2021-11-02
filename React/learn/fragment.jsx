/**
 *  無論在 vue react 中, 兩個框架元件的 html 模板都只能有一個根元素, 在 vue 中是使用 template tag 當作元件中個根元素, 繪製到畫面後, template tag 會消失, 必免產生不必要的 tag.
 *
 * 而在 react 是使用一個叫 React.Fragment tag 的標籤, 使用方式與效果基本上和 vue 的 template tag 一樣.
 */
class ListComponent extends React.Component {
  render() {
    /**
     * React.Fragment 不會產生 html tag, 只能在迴圈時傳入的 key 屬性, 文件說明, 暫時還不能傳入其他屬性.
     */
    return (
      <React.Fragment>
        <ul className="list">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </React.Fragment>
    );

    /**
     * 上面的簡寫方式, 但是不能傳入 key 與任何屬性.
     */
    // return (
    //   <>
    //     <ul className="list">
    //       <li></li>
    //       <li></li>
    //       <li></li>
    //     </ul>
    //   </>
    // );
  }
}

ReactDOM.render(
  <ListComponent></ListComponent>,
  document.querySelector("#app")
);
