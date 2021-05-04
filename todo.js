function Todo({todo, index, complete, remove}) {

    function handleDelete() {
        remove(index);
    }

    function handleComplete() {
        complete(index);
    }

    return(<>
    <div className="todo-row">
    <div className="icons">
        <i className="ri-check-fill complete-icon" onClick={handleComplete}></i>
        </div>
        <div className={todo.isCompleted ? "completed" : ""}>{todo.text} </div>
        <div className="icons">
            <i className="ri-delete-bin-6-line delete-icon" onClick={handleDelete}></i>
        </div>
    </div>
    </>);
}