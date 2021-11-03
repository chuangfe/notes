/**
 * 在 function component 使用 ref 功能.
 */
function InputComponent() {
  const refInput = React.useRef(null);

  function clickHandler() {
    console.log("ref-function", refInput.current.value);
  }

  return (
    <div className="container">
      <input type="text" ref={refInput} />
      <button onClick={clickHandler}>按鈕</button>
    </div>
  );
}

ReactDOM.render(
  <InputComponent></InputComponent>,
  document.querySelector("#app")
);
