import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "./actions/index";

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

    toggleTodo = id => {
        this.setState({
            newTodo: this.state.newTodo.map(event =>
            event.id === id ? { ...event, completed: !event.completed } : event
          )
        });
      };
    
    removeDone = e => {
        e.preventDefault();
        this.setState({
            newTodo: this.state.newTodo.filter(event => !event.completed)
        });
      };

    render() {
        return (
            <div>
                <h1 className="title">Add To Do</h1>
                {this.props.todo &&
                this.props.todo.map((atodo, index) => (
                    <h4 onClick= { () => this.props.toggleTodo(this.props.newTodo.id)} key={index}>
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
                        <button onClick={this.removeDone}>Remove Completed</button>
                </form>
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

export default connect(mapStateToProps, { addTodo, toggleTodo })(Todo);