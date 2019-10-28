import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    const {toggleItem} = props;
    return(
        <div className = 'todo-list'>

            {props.todo_collection.map(item =>(
                <Todo key={item.id} item={item} toggleItem={toggleItem}/>
            ))}

        </div>
    )
}

 export default TodoList;