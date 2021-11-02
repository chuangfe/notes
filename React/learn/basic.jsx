/**
 * react
 * react hook
 * react router
 * react context, 類似 vuex 的功能.
 * redux, 應該是 react context 的超級放大版.
 */

/**
 * 介紹 jsx 部分規則.
 *
 * 虛擬 DOM 不需要引號.
 *
 * 虛擬 DOM 插入變數, 使用 {} 符號.
 * 虛擬 DOM 的 class, 改使用 className 屬性.
 * 虛擬 DOM 的 style, 改使用 {{}} 符號寫物件.
 *
 * 虛擬 DOM 只能有一個根元素.
 *
 * 虛擬 DOM 標籤必需閉合.
 *
 * 虛擬 DOM 的原生標籤使用全小寫, 使用 component 則是字首大寫.
 */

/**
 * jsx 特殊語法
 *
 * {...object} 拆解物件, 並將所有屬性傳給 component props.
 *
 * true && jsx tag, 會返回 jsx tag.
 * false && jsx tag, 會返回 false.
 *
 * jsx tag attr, class => className.
 * jsx tag attr,  => className.
 */

const myId = "title",
  titleContent = "Hello, React",
  data = ["Vue", "React", "Angular"];

// const VDOM = <h1 id="title">Hello, React</h1>;
const VDOM = (
  <div>
    <div className="title-container">
      <h1
        id={myId}
        className="font-italic"
        style={{ fontSize: "24px", "text-decoration": "underline" }}
      >
        {titleContent}
      </h1>
    </div>

    <div className="input-container">
      <input type="text" />
    </div>

    <div className="list-container">
      <ul>
        {data.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  </div>
);

// 將虛擬 DOM 放到容器內.
ReactDOM.render(VDOM, document.querySelector("#app"));
