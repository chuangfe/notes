class FormComponent extends React.Component {
  render() {
    return (
      <form action="">
        <input type="text" />
      </form>
    );
  }
}

ReactDOM.render(
  <FormComponent></FormComponent>,
  document.querySelector("#app")
);
