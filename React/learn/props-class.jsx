// const data = { name: "Ian", gender: "Man", age: 29 };
const data = { name: "Ian", age: 29 };

class ListComponent extends React.Component {
  /**
   * 在 react class component 中, constructor 函式非必要, 官方文件說明, 只有兩種情況需要撰寫 constructor 函式.
   *
   * 1. state 的初始化.
   *
   * 2. 將 methods function, 使用 bind 修改 this 指定為實例物件, 但該需求可以使用其他語法完成.
   *
   * 3. 如果要寫 constructor 函式, 一定要在第一行撰寫 super(props); 防止 bug.
   */
  constructor(props) {
    // 無特殊用途, 但是可以防止錯誤出現.
    super(props);

    console.log(props);
  }

  // 給建構函式賦值, 非原型非實例.
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
  };
  // 給建構函式賦值, 非原型非實例.
  static defaultProps = {
    gender: "其他",
  };

  render() {
    // props 不可修改.
    const { name, gender, age } = this.props;

    return (
      <ul className="list">
        <li className="list-item">姓名: {name}</li>
        <li className="list-item">性別: {gender}</li>
        <li className="list-item">年齡: {age}</li>
      </ul>
    );
  }
}

/**
 * 需要配合 prop-types 工具.
 *
 * 設定 ListComponent 元件的 props 型別規則, 看起來規則可以連續寫
 *
 * 限制為 String, 請寫 PropTypes.string.
 * 限制為 Number, 請寫 PropTypes.number.
 * 限制為 Function, 請寫 PropTypes.func, 需再測試.
 * 限制為 Boolean, 請寫 PropTypes.bool.
 * 限制為 Array, 請寫 PropTypes.array.
 * 限制為 Object, 請寫 PropTypes.object.
 * 限制為 Symbol, 請寫 PropTypes.symbol.
 *
 * 限制必需傳入值, 請寫 PropTypes.isRequired
 *
 * 可以使用 static 寫再 class 裡面.
 */
// ListComponent.propTypes = {
//   // 設定 name 屬性必需是 String 型別.
//   // name: PropTypes.string,
//   // age: PropTypes.number,

//   // 設定 name 屬性必需是 String 型別, 必需傳入值.
//   name: PropTypes.string.isRequired,
// };

// // 設定 ListComponent 元件的 props 預設值.
// ListComponent.defaultProps = {
//   gender: "其他",
// };

// 簡單資料, 賦值給元件的方式.
// ReactDOM.render(
//   <ListComponent
//     name={data.name}
//     gender={data.gender}
//     age={data.age}
//   ></ListComponent>,
//   document.querySelector("#app")
// );

// 複雜資料, 賦值給元件的方式.
// 該解構方式只能在 react 的元件在使用, 非原生語法.
ReactDOM.render(
  <ListComponent {...data}></ListComponent>,
  document.querySelector("#app")
);
