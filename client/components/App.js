//import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/actionCreator";
import TodoPage from "./TodoPage";

function mapStateToProps(state) {
    return {
        todos: state.todos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onTodoChange: (todo) => {
            dispatch(actions.addTodo(todo));
        },
        onLoadTodos: () => {
            dispatch(actions.loadTodo());
        }

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
