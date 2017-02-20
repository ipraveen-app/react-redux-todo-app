import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
//import todos from "./data/todos";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const initialState = {
    visibilityFilter: "SHOW_ALL",
    todos: []
};

//initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
const store = createStore(rootReducer, initialState,  applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
