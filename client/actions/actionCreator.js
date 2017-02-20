export const SHOW_ALL = "SHOW_ALL";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

let nextTodoId = 100;

export function addTodo({text}) {
    return {
        type: "ADD_TODO",
        todo: {
            text,
            id: nextTodoId++
        }
    };
}
export function loadTodo() {
    return {
        type: "LOAD_TODOS"
    };
}

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    };
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};
