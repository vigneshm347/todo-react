import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTask from './components/AddTask';
import About from './components/pages/About';

import './App.css';
import Axios from 'axios';

class App extends Component {
    state = {
        todos: [],
    };

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }),
        });
    };

    delComplete = (id) => {
        Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
            (response) => {
                this.setState({
                    todos: [
                        ...this.state.todos.filter((todo) => todo.id !== id),
                    ],
                });
            }
        );
    };

    addTask = (title) => {
        Axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false,
        }).then((response) => {
            this.setState({
                todos: [...this.state.todos, response.data],
            });
        });
    };

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(
            (response) => {
                console.log(response);
                this.setState({
                    todos: [...response.data],
                });
            }
        );
    }

    render() {
        return (
            <Router>
                <div className='App'>
                    <div className='container'>
                        <Header />
                        <Route
                            exact
                            path='/'
                            render={(props) => (
                                <React.Fragment>
                                    <AddTask addTask={this.addTask} />
                                    <Todos
                                        markComplete={this.markComplete}
                                        delComplete={this.delComplete}
                                        todos={this.state.todos}
                                    />
                                </React.Fragment>
                            )}
                        />
                        <Route path='/about' component={About} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
