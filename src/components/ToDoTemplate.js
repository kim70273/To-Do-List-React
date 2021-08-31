import React from 'react';
import './ToDoTemplate.css';

const ToDoTemplate = ({children}) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정 목록</div>
            <div className="content">{children}</div>
        </div>
    );
}

export default ToDoTemplate;