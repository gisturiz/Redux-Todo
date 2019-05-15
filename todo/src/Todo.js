import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./actions/index";
import "./Todo.css"

class Todo extends Component {
    state = {
        newTodo: ""
    }

    handleChanges = e => {
        this.setState({ newTodo: e.target.value });
    };

    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' });
    }

    toggleTodo = id => {
        this.props.toggleTodo(id)
    };

    deleteTodo = e => {
        e.preventDefault();
        this.props.deleteTodo(e)
    };

    render() {
        return (
            <div>
                <div className="body">
                    <h1 className="title">Add To Do</h1>
                    {this.props.todo &&
                        this.props.todo.map((atodo, index, completed) => (
                            <h4 onClick={() => this.toggleTodo(atodo.id)}
                                key={index}
                                style={{
                                    textDecoration: atodo.completed ? 'line-through' : 'none'
                                }}
                            >
                                {atodo.value}
                                {atodo.completed}
                            </h4>
                        ))}
                    <form className="form">
                        <input
                            type="text"
                            placeholder="Add To Do..."
                            value={this.state.newTodo}
                            name="todo"
                            onChange={this.handleChanges} />
                        <button onClick={this.addTodo}>Add To Do</button>
                        <button onClick={this.deleteTodo}>Remove Completed</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        todo: state.todo
    };
};

export default connect(mapStateToProps, { addTodo, toggleTodo, deleteTodo })(Todo);