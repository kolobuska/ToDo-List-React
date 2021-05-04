function Todo({todo, index, remove}) {

    function handle() {
        remove(index);
    }

    return(<>
    <div className="todo-row">{todo.text} 
        <div className="icons">
            <i className="ri-delete-bin-6-line delete-icon" onClick={handle}></i>
        </div>
    </div>
    </>);
}