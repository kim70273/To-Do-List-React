import React,{useCallback} from 'react';
import {List} from 'react-virtualized';
import ToDoListItem from './ToDoListItem';
import './ToDoList.css';

const ToDoList = ({todos, onRemove, onTogle}) => {

    const rowRenderer = useCallback(
        ({index, key, style}) => {
            const todo = todos[index];
            return (
                <ToDoListItem
                todo={todo}
                key={key}
                onRemove={onRemove}
                onTogle={onTogle}
                style={style}
                />
            )
        },
        [onRemove, onTogle, todos],
    );
    return (
        <List
        className="ToDoList"
        width={512}
        height={513}
        rowCount={todos.length}
        rowHeight={57}
        rowRenderer={rowRenderer}
        list={todos}
        style={{outline:'none'}}
        />
    )
}

export default React.memo(ToDoList);