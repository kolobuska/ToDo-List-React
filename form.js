function TodoForm({addTodo}) {

  const [value, setValue] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }

    return (<>
        <form onSubmit={handleSubmit} className='todo-form'>
        <input 
          type="text" 
          className='todo-input'
          value={value} 
          placeholder="Add Todo..." 
          onChange={e => setValue(e.target.value)}
        />
         <button onClick={handleSubmit} className='todo-button'>
            Add
          </button>
      </form>
    </>)
}