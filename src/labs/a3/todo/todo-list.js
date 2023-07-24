import ToDoItem from "./todo-item";
import todos from "./todos";

const ToDoList = () => {
    return (
        <>
            <h3>Todo List</h3>
            <ul className="list-group">
                {
                    todos.map(todo => {
                        return (<ToDoItem todo={todo}/>);
                    })
                }
            </ul>
        </>
    )
}

export default ToDoList;