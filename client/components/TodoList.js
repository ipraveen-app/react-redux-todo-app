import React from "react";

class Main extends React.Component {

    renderTodos(todo, i) {
        return (<li key={i}>{todo.text} </li>);

    }
    render() {
        const {todos} = this.props;

        return (
            <div>
                <h2>Todos </h2>
                <ol>
                    {todos.map(this.renderTodos)}
                </ol>
            </div>
        );
    }
}

export default Main;