import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from "./actions/index";

class Todo extends Component {
    state = {
        newTodo:""
    }

    handleChanges = e => {
        this.setState({ newTodo: e.target.value });
    };

    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({newTodo:''});
    }

    render() {
        return (
            <div>
                <h1 className="title">Add To Do</h1>
                {this.props.todo &&
                this.props.todo.map((atodo, index) => (
                    <h4 key={index}>
                    {atodo.value}
                    {atodo.completed}
                    </h4>
                ))}
                <form>
                    <input
                        type= "text"
                        placeholder="Add To Do..."
                        value={this.state.newTodo}
                        name="todo"
                        onChange={this.handleChanges} />
                        <button onClick={this.addTodo}>Add To Do</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todo: state.todo
    };
};

export default connect(mapStateToProps, { addTodo })(Todo);