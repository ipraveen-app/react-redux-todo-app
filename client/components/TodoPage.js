import React from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

class Main extends React.Component {
    componentDidMount() {
        this.props.onLoadTodos();
    }

    render() {
        const {todos} = this.props;

        return (
            <div>
                <h1>Home</h1>
                <TodoInput onTodoChange={this.props.onTodoChange} />
                <TodoList todos={todos} />
            </div>
        );
    }
}

export default Main;
