import { useState } from "react";

const Edit = ({ add, remove }) => {
  const [title, setTitle] = useState("");
  function titleChange(e) {
    setTitle(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  function handlerClick() {
    add({ title, date, time });
  }

  return (
    <div className="edit">
      <h1 className="title">備忘錄</h1>

      <div className="edit-item">
        <p className="edit-item-title">記事</p>

        <div className="input-container">
          <input
            type="text"
            className="edit-item-input"
            name="title"
            value={title}
            onChange={titleChange}
          />
        </div>
      </div>

      <div className="edit-item">
        <p className="edit-item-title">日期</p>

        <div className="input-container">
          <input
            type="date"
            className="edit-item-input"
            name="date"
            value={date}
            onChange={dateChange}
          />
        </div>
      </div>

      <div className="edit-item">
        <p className="edit-item-title">時間</p>

        <div className="input-container">
          <input
            type="time"
            className="edit-item-input"
            name="time"
            value={time}
            onChange={timeChange}
          />
        </div>
      </div>

      <div className="edit-item">
        <button className="add" onClick={handlerClick}>
          新增
        </button>
      </div>
    </div>
  );
};

export default Edit;
