/**
 * 高級元件, 簡單而言, 就是元件接收元件, 並返回元件.
 */

/**
 * 總體而言, 感覺有點類似觀察者模式, DataSource 物件保存 CommentList 的 handleChange 函式, 並且在必要時調用 handleChange 函式並傳入參數, 讓 CommentList 更新自己的 state 資料, 最後再由 CommentList render 函式更新畫面.
 *
 * 另一個範例與該範例相當接近, 唯一差別在於元件會接收 props, 在把 props 丟給 DataSource 物件撈資料.
 *
 * 簡單而言, 該範例將元件的更新時機, 統一交給 DataSource 物件管理, 而資料更新後的元件再繪製畫面到頁面上.
 */
class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // DataSource 是開發者自己設計的物件.
      comments: DataSource.getComments(),
    };
  }

  componentDidMount() {
    /**
     * ataSource.addChangeListener, 的功能猜測應該是將元件的 handleChange 保存到 DataSource 物件身上.
     */
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    // 如果上方猜測正確, 那這裡應該就是刪除 DataSource 物件身上的 handleChange 函式.
    DataSource.removeChangeListener(this.handleChange);
  }

  // 呼叫該函式後, 更新元件的 state 資料.
  handleChange() {
    this.setState({
      // 資料來源, DataSource 物件的函式, 該函式的返回值應該是陣列包物件資料.
      comments: DataSource.getComments(),
    });
  }

  render() {
    return (
      <div>
        {/* 將資料傳給另個元件, 繪製元件的 html 頁面. */}
        {this.state.comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }
}
