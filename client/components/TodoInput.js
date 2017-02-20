import React from "react";

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {text} = this.state;
        this.props.onTodoChange({ text });
        this.setState({ text: "" });
    }

    handleTodoChange = (event) => {
        const text = event.target.value;
        this.setState({ text });
    }

    render() {
        const {text} = this.state;

        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="text" value={text} placeholder="Enter todo" onChange={this.handleTodoChange} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default TodoInput;
