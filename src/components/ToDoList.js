import React from 'react';
import ToDoListItem from './ToDoListItem';
import './ToDoList.css';

const ToDoList = ({todos, onRemove, onTogle}) => {
    return (
        <div className="ToDoList">
            {todos.map(todo => (
                <ToDoListItem todo={todo} onRemove={onRemove} onTogle={onTogle} key={todo.id} />
            ))}
        </div>
    )
}

export default ToDoList;