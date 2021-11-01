// Array.prototype.find((item, index, array) => return true or false });
// 返回符合條件的第一個元素.

const todos = [
  { id: 1, text: "html", done: true },
  { id: 2, text: "css", done: false },
  { id: 3, text: "javascript", done: false },
];

let todo = todos.find((todo) => {
  return todo.id === 3;
});

console.log(todo); // { id: 2, text: "css", done: false }
