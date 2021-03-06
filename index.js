function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text: text, isCompleted: false}];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    let temp = [...todos];
    todos.find((value, i) => {
      if (i === index) {
        const completeTodo = {text: value.text, isCompleted: true};
        temp.splice(index, 1, completeTodo);
        setTodos(temp);
      }
    });
  }

  const removeTodo = index => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(<>
    <div className="todo-app">
    <h1>ToDo List</h1>
    <TodoForm addTodo={addTodo}/>
    <div className="todo-list">
      {todos.map((todo, i) => 
        <Todo index={i} key={i} todo={todo} remove={removeTodo} complete={completeTodo}/>)}
          </div>
    </div>
    </>);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
