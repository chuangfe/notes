/**
 * 受控元件
 *
 * 非受控元件
 */

class FormComponent extends React.Component {
  state = {
    user: "",
    password: "",
  };

  submitHandler = (e) => {
    e.preventDefault();

    console.log(e);
    console.log(e.target);
    console.log(e.target.username);
    console.log(e.target.password);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="user-container">
          帳號: <input type="text" name="username" />
        </div>

        <br />

        <div className="password-container">
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
