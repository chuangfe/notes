/**
 * 受控元件, 資料受到 state 控制.
 *
 * 非受控元件, 資料不受到 state 控制.
 * 在 submit 事件函式觸發時, 在函式內通過 el 獲取需要的資料.
 */

class FormComponent extends React.Component {
  state = {
    username: "",
    password: "",
  };

  submitHandler = (e) => {
    e.preventDefault();

    // 受控制的元件.
    console.log("受控制的元件", this.state.username, this.state.password);

    // 非受控制的元件.
    console.log(
      "受控制的元件",
      e.target.username.value,
      e.target.password.value
    );
  };

  render() {
    const { username, password } = this.state;

    return (
      <form onSubmit={this.submitHandler}>
        <div className="user-container">
          帳號:{" "}
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => {
              this.setState({ username: e.target.value });
            }}
          />
        </div>

        <br />

        <div
          className="password-container"
          value={password}
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
        >
          密碼: <input type="text" name="password" />
        </div>

        <br />

        <div className="button-container">
          <button>按鈕</button>
        </div>
      </form>
    );
  }
}

ReactDOM.render(
  <FormComponent></FormComponent>,
  document.querySelector("#app")
);
