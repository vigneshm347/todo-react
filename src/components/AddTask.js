import React, { Component } from 'react';

export class AddTask extends Component {
    state = {
        title: '',
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.title);
        this.setState({ title: '' });
    };

    render() {
        return (
            <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
                <input
                    style={{ flex: '10', padding: '5px' }}
                    type='text'
                    name='title'
                    placeholder='Add Todo'
                    value={this.state.title}
                    onChange={this.onChange}
                ></input>
                <input
                    type='submit'
                    value='Submit'
                    className='btn'
                    style={{ flex: '1' }}
                ></input>
            </form>
        );
    }
}

export default AddTask;
