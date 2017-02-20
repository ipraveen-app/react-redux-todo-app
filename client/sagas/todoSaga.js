import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

function* loadTodos() {
    try {
        const todos = yield call(axios.get, "/api/todos");
        yield put({ type: "LOAD_TODOS_SUCCESS", todos: todos.data });
    } catch (e) {
        yield put({ type: "USER_FETCH_FAILED", message: e.message });
    }
}

function* addTodo(action) {
    try {
        const todo = yield call(axios.post, "/api/todo", action.todo);
        yield put({ type: "ADD_TODO_SUCCESS", todo: todo.data });
    } catch (e) {
        yield put({ type: "ADD_TODO_FAILED", message: e.message });
    }
}

function* todoRootSaga() {
    yield takeLatest("LOAD_TODOS", loadTodos);
    yield takeLatest("ADD_TODO", addTodo);
}

export default todoRootSaga;
