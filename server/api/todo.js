import todos from "../../client/data/todos";

let nextToDoId = todos.length + 1;

export function getTodos(){
    return todos;
}

export function addTodo(todo){
    todo.id = nextToDoId++;
    todos.push(todo);
    return todo;
}
