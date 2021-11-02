class TodoItemComponent extends React.Component {
  // 在 render 之後執行.
  componentDidMount() {}

  componentWillUnmount() {}

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
            ref="edit"
          />
        </form>
      </li>
    );
  }
}

class FooterComponent extends React.Component {
  render() {
    const { setHash, hash, itemLeft, clearTodoCompleted } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{itemLeft}</strong> item left
        </span>
        <ul className="filters">
          <li>
            <a
              className={hash === "all" ? "selected" : ""}
              href="#/all"
              onClick={(e) => {
                setHash(e, { hash: "all" });
              }}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={hash === "active" ? "selected" : ""}
              href="#/active"
              onClick={(e) => {
                setHash(e, { hash: "active" });
              }}
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={hash === "completed" ? "selected" : ""}
              href="#/completed"
              onClick={(e) => {
                setHash(e, { hash: "completed" });
              }}
            >
              Completed
            </a>
          </li>
        </ul>

        <button className="clear-completed" onClick={clearTodoCompleted}>
          Clear completed
        </button>
      </footer>
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

    hash: "all",
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

  clearTodoCompletedHandler = () => {
    const todos = this.state.todos.filter((todo) => !todo.completed);
    this.setState({ todos });
  };

  setHashHandler = (e, { hash }) => {
    this.setState({ hash });
  };

  componentDidMount() {
    location.hash = "/all";
  }

  render() {
    const { value, editing, todos, hash } = this.state;

    const calcTodos = [...todos].filter((todo) => {
        return hash === "all"
          ? todo
          : hash === "active"
          ? todo.completed === false
          : todo.completed;
      }),
      itemLeft = todos.filter((todo) => !todo.completed).length;

    return (
      <React.Fragment>
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
        </header>

        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />

          <label htmlFor="toggle-all">Mark all as complete</label>

          <ul className="todo-list">
            {calcTodos.map((todo) => {
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

        <FooterComponent
          itemLeft={itemLeft}
          hash={hash}
          setHash={this.setHashHandler}
          clearTodoCompleted={this.clearTodoCompletedHandler}
        ></FooterComponent>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <TodoComponent></TodoComponent>,
  document.querySelector("#app")
);
