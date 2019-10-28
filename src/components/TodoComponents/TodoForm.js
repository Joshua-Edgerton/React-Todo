import React from 'react';

 class TodoForm extends React.Component {

    constructor () {
        super();
        this.state = { 
            item: ''
        };
    };

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
            });
    };

    submitItem = event => {
        event.preventDefault();
        event.target.reset();
        this.props.addItem(this.state.item);
        console.log('Item added');
    }


    render () {
        return (
            <form onSubmit={this.submitItem}>

            <input 
            type = 'text'
            value = {this.item}
            name = 'item'
            placeholder = 'to do ...'
            onChange = {this.handleChanges}
            />
           
            <button > Add Todo </button>
            <button onClick={this.props.clearItems}> Clear Components </button>
            </form>
        )
    }
 }

 export default TodoForm;