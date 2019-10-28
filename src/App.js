import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import "./styles.css";

const todoCollection = [];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todo_collection: todoCollection
    };
  };

  // ON CLICK
  addItem = itemName => {
    // CREATE NEW
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo_collection: [...this.state.todo_collection, newItem]
    });
  };

  toggleItem = id => {
    this.setState({
      todo_collection: this.state.todo_collection.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  clearItems = (event) =>{
    event.preventDefault();

    this.setState({
      todo_collection: this.state.todo_collection.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div className='my-app'>
        <h2>Todo List</h2>
       
        <TodoList todo_collection={this.state.todo_collection} toggleItem={this.toggleItem}/>
        <TodoForm addItem={this.addItem} clearItems={this.clearItems} todoCollection={todoCollection}/>

      </div>
    );
  };
};

export default App;