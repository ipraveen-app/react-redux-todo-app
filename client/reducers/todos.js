
export default function todos(state = [], action) {
    switch (action.type) {
        case "ADD_TODO_SUCCESS": {
            return [
                ...state,
                {
                    text: action.todo.text,
                    completed: false
                }
            ];
        }

        case "LOAD_TODOS_SUCCESS": {
            return [...action.todos];
        }
        case "TOGGLE_TODO": {
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }

                return Object.assign({}, todo, {
                    completed: !todo.completed
                });
            });
        }
        default:
            return state;
    }
}

