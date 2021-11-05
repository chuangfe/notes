// useRef, 讓 function 元件也可以使用 ref 獲取 dom.

function TestUseRef() {
  const refInput = React.useRef();

  return (
    <div>
      <input type="text" ref={refInput} />

      <hr />

      <button
        onClick={() => {
          console.log(refInput.current.value);
        }}
      >
        按鈕
      </button>
    </div>
  );
}

ReactDOM.render(<TestUseRef></TestUseRef>, document.querySelector("#app"));
