import React, { useCallback, useState } from 'react';
import {MdAdd} from 'react-icons/md';
import './ToDoInsert.css';

const ToDoInsert = ({onInsert}) => {
    const [value, setValue] = useState("");

    const onchange = useCallback(e => {
        setValue(e.target.value);
    },[])

    const onSubmit = useCallback(e=> {
        e.preventDefault();
        onInsert(value);
        setValue("");
    },[onInsert, value]);

    return (
        <form className="ToDoInsert" onSubmit={onSubmit}>
            <input className="ToDoInsert_Input" value={value} onChange={onchange} placeholder="일정을 입력하세요." />
            <button className="ToDoInsert_button" type="submit">
                <MdAdd />
            </button>
        </form>
    );
}

export default ToDoInsert;