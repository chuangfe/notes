/**
 * useContext 讓 function 元件
 */

const MyContext = React.createContext();

// function 元件接收 context 的方式.
function Apple() {
  return (
    <div>
      <p>Apple</p>
      <MyContext.Consumer>
        {(value) => {
          return <p>{value.title}</p>;
        }}
      </MyContext.Consumer>

      <hr />

      <Cat></Cat>
    </div>
  );
}

// function 元件使用 hook 接收 context 的方式.
function Cat() {
  const data = React.useContext(MyContext);

  return (
    <div>
      <p>Cat</p>
      <p>{data.title}</p>
    </div>
  );
}

function TestUseContext() {
  return (
    <React.Fragment>
      <MyContext.Provider value={{ title: "TestUseContext" }}>
        <Apple></Apple>
      </MyContext.Provider>
    </React.Fragment>
  );
}

ReactDOM.render(
  <TestUseContext></TestUseContext>,
  document.querySelector("#app")
);
