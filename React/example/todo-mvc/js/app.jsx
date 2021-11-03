function TodoItem(props) {
  const {
    id,
    title,
    completed,
    isEditing,
    updateTodo,
    removeTodo,
    setEditing,
  } = props;

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

        <p
          onDoubleClick={(e) => {
            e.stopPropagation();
            setEditing(e, { id });
          }}
        >
          {title}
        </p>

        <button
          type="button"
          className="destroy"
          onClick={(e) => {
            removeTodo(e, { id });
          }}
        >
          按鈕
        </button>
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

function Footer(props) {
  const { setHash, hash, itemLeft, clearTodoCompleted } = props;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemLeft}</strong>
        &nbsp;item left
      </span>
      <ul className="filters">
        <li>
          <button
            type="button"
            className={hash === "all" ? "selected" : ""}
            onClick={(e) => {
              setHash(e, { hash: "all" });
            }}
          >
            All
          </button>
        </li>
        <li>
          <button
            type="button"
            className={hash === "active" ? "selected" : ""}
            onClick={(e) => {
              setHash(e, { hash: "active" });
            }}
          >
            Active
          </button>
        </li>
        <li>
          <button
            type="button"
            className={hash === "completed" ? "selected" : ""}
            onClick={(e) => {
              console.log(1);
              setHash(e, { hash: "completed" });
            }}
          >
            Completed
          </button>
        </li>
      </ul>

      <button
        type="button"
        className="clear-completed"
        onClick={clearTodoCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
}

class TodoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // 要新增 todo 的 title.
      value: "",

      // 正在編輯的 todo id.
      editing: 0,

      isChecked: false,

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

      // 判斷篩選至畫面的 todos 的 hash 值.
      hash: "all",
    };
  }

  // 要新增的 todo 的 value.
  setValueHandler = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  // 設置當前正在編輯的 todo 的 id, 傳給 TodoItemComponent 使用.
  setEditingHandler = (e, { id }) => {
    this.setState({ editing: id });
  };

  // 新增 todo.
  createTodoHandler = (e) => {
    e.preventDefault();

    this.setState((state) => {
      const todos = [...state.todos];

      todos.push({
        id: todos[todos.length - 1] ? todos[todos.length - 1].id + 1 : 1,
        title: state.value,
        completed: false,
      });

      return { todos, value: "" };
    });
  };

  // 刪除某一項 todo.
  removeTodoHandler = (e, { id }) => {
    this.setState((state) => {
      const todos = [...state.todos];
      const index = todos.findIndex((todo) => todo.id === id);

      todos.splice(index, 1);

      return { todos };
    });
  };

  // 更新某一項 todo 內容.
  updateTodoHandler = ({ id, title, completed }) => {
    this.setState((state) => {
      const todos = [...state.todos];
      const updateTodos = todos.map((todo) => {
        return todo.id === id ? { id, title, completed } : todo;
      });
      // 找未完成的 todo 項目.
      const imperfectTodoIndex = updateTodos.findIndex((todo) => {
        return todo.completed === false;
      });
      // 如果沒有未完成的 todo, 則想當於全選.
      const isChecked = imperfectTodoIndex === -1;

      return { isChecked, todos: updateTodos };
    });
  };

  // 刪除所有已經完成的 todo.
  clearTodoCompletedHandler = () => {
    this.setState((state) => {
      const todos = [...state.todos];
      const filterTodos = todos.filter((todo) => !todo.completed);

      return { todos: filterTodos };
    });
  };

  // 給 Footer component 設定 hash 值.
  setHashHandler = (e, { hash }) => {
    this.setState({ hash });
  };

  toggleClickHandler = () => {
    this.setState((state) => {
      const isChecked = !state.isChecked;
      const todos = [...state.todos];
      const calcTodos = todos.map((todo) => {
        return {
          ...todo,
          completed: isChecked,
        };
      });

      return { isChecked, todos: calcTodos };
    });
  };

  render() {
    const { value, editing, todos, hash, isChecked } = this.state;

    // 根據 hash 篩選要顯示在畫面上的 todos.
    const filterTodos = [...todos].filter((todo) => {
      if (hash === "all") {
        return true;
      }

      if (hash === "acitve") {
        return !todo.completed;
      }

      if (hash === "completed") {
        return todo.completed;
      }

      return false;
    });
    // 計算剩餘未完成項目.
    const itemLeft = todos.filter((todo) => !todo.completed).length;
    // 根據未完成的數量判斷全選的值.
    // const toggleAll = !itemLeft;

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
          <div
            className={["toggle-all", isChecked ? "checked" : ""].join(" ")}
            onClick={this.toggleClickHandler}
          />

          <ul className="todo-list">
            {filterTodos.map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  {...todo}
                  isEditing={editing === todo.id}
                  updateTodo={this.updateTodoHandler}
                  setEditing={this.setEditingHandler}
                  removeTodo={this.removeTodoHandler}
                />
              );
            })}
          </ul>
        </section>

        <Footer
          itemLeft={itemLeft}
          hash={hash}
          setHash={this.setHashHandler}
          clearTodoCompleted={this.clearTodoCompletedHandler}
        />
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <TodoComponent></TodoComponent>,
  document.querySelector("#app")
);
