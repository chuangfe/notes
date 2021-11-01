class TodoItemComponent extends React.Component {
  render() {
    const { id, title, completed } = this.props;
    const { updateTodo, removeTodo, setEditing, isEditing } = this.props;

    return (
      <li
        className={[
          completed ? "completed" : "",
          isEditing ? "editing" : " ",
        ].join(" ")}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={(e) => {
              updateTodo({
                id,
                title,
                completed: e.target.checked,
              });
            }}
          />

          <label
            onDoubleClick={(e) => {
              e.stopPropagation();
              setEditing(e, { id });
            }}
          >
            {title}
          </label>

          <button
            className="destroy"
            onClick={(e) => {
              removeTodo(e, { id });
            }}
          ></button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEditing(e, { id: 0 });
          }}
        >
          <input
            className="edit"
            value={title}
            onChange={(e) => {
              updateTodo({
                id,
                title: e.target.value,
                completed,
              });
            }}
            onBlur={(e) => {
              setEditing(e, { id: 0 });
            }}
          />
        </form>
      </li>
    );
  }
}

class TodoComponent extends React.Component {
  state = {
    value: "",
    editing: 0,

    todos: [
      {
        id: 1,
        title: "HTML",
        completed: false,
      },
      {
        id: 2,
        title: "CSS",
        completed: false,
      },
      {
        id: 3,
        title: "JavaScript",
        completed: true,
      },
    ],
  };

  setValueHandler = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  setEditingHandler = (e, { id }) => {
    this.setState({ editing: id });
  };

  createTodoHandler = (e) => {
    e.preventDefault();

    const todos = [...this.state.todos];

    todos.push({
      id: todos[todos.length - 1] ? todos[todos.length - 1].id + 1 : 1,
      title: this.state.value,
      completed: false,
    });

    this.setState({ todos, value: "" });
  };

  removeTodoHandler = (e, { id }) => {
    const todos = [...this.state.todos];
    const index = todos.findIndex((todo) => todo.id === id);
    todos.splice(index, 1);
    this.setState({ todos });
  };

  updateTodoHandler = ({ id, title, completed }) => {
    const todos = [...this.state.todos];
    const newTodos = todos.map((todo) => {
      return todo.id === id ? { id, title, completed } : todo;
    });

    this.setState({ todos: newTodos });
  };

  render() {
    const { value, editing, todos } = this.state;

    return (
      <div>
        <header className="header">
          <h1>todos</h1>

          <form onSubmit={this.createTodoHandler}>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              value={value}
              onChange={this.setValueHandler}
            />
          </form>

          {/* <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={value}
            onChange={this.setValueHandler}
          /> */}
        </header>

        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />

          <label htmlFor="toggle-all">Mark all as complete</label>

          <ul className="todo-list">
            {todos.map((todo) => {
              return (
                <TodoItemComponent
                  key={todo.id}
                  {...todo}
                  isEditing={editing === todo.id}
                  updateTodo={this.updateTodoHandler}
                  setEditing={this.setEditingHandler}
                  removeTodo={this.removeTodoHandler}
                ></TodoItemComponent>
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}

ReactDOM.render(
  <TodoComponent></TodoComponent>,
  document.querySelector("#app")
);
