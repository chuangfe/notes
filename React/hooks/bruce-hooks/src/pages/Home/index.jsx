import { useState, useEffect } from "react";
import Edit from "./components/Edit.jsx";
import List from "./components/List.jsx";
import "./index.scss";

const Home = () => {
  /**
   * 在 state 身上有一個 data, 而 setData 是專門修改 data 的函式, 最後 data 的初始值是 useState 傳入的參數.
   */
  const [data, setData] = useState([
    {
      id: 1,
      title: "HTML",
    },
    {
      id: 2,
      title: "CSS",
    },
    {
      id: 3,
      title: "JavaScrip",
    },
  ]);

  /**
   * 使用方式 useEffect(function(){}, [...state]);
   * 當陣列中的 state 更新時, 會執行傳入的函式, function component 第一次繪製到畫面上時也會執行傳入的函式一次.
   *
   * useEffect 大致上有三種用法.
   *
   * 1. 當作 vue 的 watch 使用, 資料更新時執行函式, 不過似乎無法獲取資料更新前的值.
   * 2. 傳入的函式返回函式, 該方式適合只會改變一次的資料, 例如事件的綁定與刪除.
   * 3. 發出 api 請求, 只在繪製畫面時執行一次, 後面的物件不傳入值.
   */

  // 第一種使用方式, 如果要在這裡修改 state.data 可能會造成無限迴圈, 需要注意.
  // useEffect(() => console.log("data", data), [data]);

  // 第二種使用方式.
  // function handlerResize() {}
  // useEffect(() => {
  //   window.addEventListener("reset", handlerResize);
  //   return () => {
  //     window.removeEventListener("reset", handlerResize);
  //   };
  // }, [flag]);

  // 第三種使用方式.
  // useEffect(() => {
  //   // 發出 api 請求.
  // }, []);

  function handlerAdd(fromData) {
    // prev 是 data 修改前的值.
    setData((prev) => {
      const id = prev[prev.length - 1] ? prev[prev.length - 1].id + 1 : 1;
      // 返回值會更新 data.
      return [...prev, { ...fromData, id }];
    });
  }

  function handlerRemove({ id }) {
    setData((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  }

  return (
    <div className="app">
      <Edit add={handlerAdd}></Edit>
      <List listData={data} remove={handlerRemove}></List>
    </div>
  );
};

export default Home;
