import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem
                markComplete={this.props.markComplete}
                delComplete={this.props.delComplete}
                key={todo.id}
                todo={todo}
            />
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
};

export default Todos;
