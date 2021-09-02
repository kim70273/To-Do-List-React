import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import './ToDoListItem.css';
import cn from 'classnames';

const ToDoListItem = ({todo,onRemove, onTogle, style}) => {
    const {text, checked} = todo;

    const onClick = () => {
        onRemove(todo.id);
    }
    
    return (
        <div className="ToDoListItem-virtualized" style={style}>
        <div className="ToDoListItem">
            <div className="checkbox" onClick={() => onTogle(todo.id)}>
                {checked ? <MdCheckBox className="checkIcon"/> : <MdCheckBoxOutlineBlank className="checkIcon"/>}
                <div className={cn('text', {checked})}>{text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline onClick={onClick} />
            </div>

        </div>
        </div>
    )
}

export default React.memo(ToDoListItem);