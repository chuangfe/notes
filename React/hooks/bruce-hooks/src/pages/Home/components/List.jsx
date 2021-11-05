import ListItem from "./ListItem";

const List = ({ listData, remove }) => {
  return (
    <ul className="list">
      {listData.map(({ id, title, date = "日期未定", time = "時間未定" }) => {
        const calcItem = { id, title, date, time };
        return <ListItem {...calcItem} key={id} remove={remove}></ListItem>;
      })}
    </ul>
  );
};

export default List;
