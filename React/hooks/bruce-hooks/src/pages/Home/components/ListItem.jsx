const ListItem = ({ id, title, date, time, remove }) => {
  return (
    <li className="list-item">
      <div className="list-item-text">
        <p>{title}</p>
        <p>
          {date} {time}
        </p>
      </div>

      <button
        className="remove"
        onClick={(e) => {
          remove({ id });
        }}
      >
        刪除
      </button>
    </li>
  );
};

export default ListItem;
