const { makeObservable, observable, computed, action } = mobx;
const { observer } = mobxReact;

class TodoVM {
  constructor({ vm }) {
    this.id = vm.id;
    this.title = vm.title;
    this.isCompleted = vm.isCompleted;
    this.isEditing = false;

    makeObservable(this, {
      title: observable,
      isCompleted: observable,
      isEditing: observable,

      setTitle: action,
      setCompleted: action,
      setEditing: action,
    });
  }

  setTitle = (event) => {
    this.title = event.target.value;
  };

  setCompleted = () => {
    this.isCompleted = !this.isCompleted;
  };

  setEditing = () => {
    this.isEditing = !this.isEditing;
  };
}

class TodoView extends React.Component {
  render() {
    const { id, title, isCompleted, isEditing, handlerRemove } = this.props.vm;

    return (
      <li
        className={[
          "completed" ? isCompleted : "",
          "editing" ? isEditing : "",
        ].join(" ")}
      >
        <div class="view">
          <input
            class="toggle"
            type="checkbox"
            value={isCompleted}
            onChange={this.setCompleted}
          />

          <label onDoubleClick={this.setEditing}>Buy a unicorn</label>

          <button
            class="destroy"
            onclick={() => {
              handlerRemove(id);
            }}
          ></button>
        </div>

        <input
          class="edit"
          value="Rule the web"
          value={title}
          onChange={this.setTitle}
        />
      </li>
    );
  }
}

class AppVM {
  constructor() {
    this.value = "";
    this.filter = "all";
    this.todos = [];
    this.toggleAll = false;

    makeObservable(this, {
      value: observable,
      filter: observable,
      todos: observable,
      toggleAll: observable,

      filterTodos: computed,

      handlerCreate: action,
      handlerRemove: action,
      setToggleAll: action,
    });
  }

  get filterTodos() {
    return this.todos.filter((todo) => {
      return this.filter === "all"
        ? true
        : this.filter === "active"
        ? !todo.isCompleted
        : todo.isCompleted;
    });
  }

  handlerCreate = () => {
    this.todos.push(
      new TodoVM({
        id: Math.random(),
        title: this.value,
        isCompleted: false,
      })
    );
  };

  handlerRemove = (id) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };

  setToggleAll = () => {
    this.toggleAll = !this.toggleAll;
  };

  init = () => {
    const todos = [
      {
        id: 1,
        title: "HTML",
        isCompleted: false,
      },
      {
        id: 2,
        title: "CSS",
        isCompleted: false,
      },
      {
        id: 3,
        title: "JavaScript",
        isCompleted: false,
      },
    ];

    this.todos = todos.map((todo) => {
      return new TodoVM({ vm: todo });
    });
  };
}

class AppView extends React.Component {
  componentDidMount() {
    const appVM = new AppVM();

    appVM.init();

    this.vm = appVM;
  }

  render() {
    const { vm } = this;
    const TodoViewOb = observer(({ vm, handlerRemove }) => (
      <TodoView vm={vm} handlerRemove={handlerRemove}></TodoView>
    ));

    return (
      <React.Fragment>
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" />
        </header>

        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {/* <li className="completed">
              <div className="view">
                <input className="toggle" type="checkbox" checked />
                <label>Taste JavaScript</label>
                <button className="destroy"></button>
              </div>
              <input className="edit" value="Create a TodoMVC template" />
            </li> */}

            {vm.filterTodos.map((todoVm) => {
              return (
                <TodoViewOb
                  vm={todoVm}
                  handlerRemove={vm.handlerRemove}
                ></TodoViewOb>
              );
            })}
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>0</strong> item left
          </span>
          <ul className="filters">
            <li>
              <a className="selected" href="#/">
                All
              </a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
          <button className="clear-completed">Clear completed</button>
        </footer>
      </React.Fragment>
    );
  }
}

const AppOb = observer(() => <AppView></AppView>);

ReactDOM.render(<AppOb></AppOb>, document.querySelector(".todoapp"));
