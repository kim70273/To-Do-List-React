import React, { useCallback, useRef, useState } from 'react';
import ToDoInsert from './components/ToDoInsert';
import ToDoList from './components/ToDoList';
import ToDoTemplate from './components/ToDoTemplate';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  const nextId = useRef(4);
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current +=1;
  },[todos],);

  const onRemove = useCallback((id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  },[todos]);

  const onTogle = useCallback((id) => {
    const newTodos = todos.map((todo) => {
      if(todo.id !== id){
        return todo;
      } else{
        todo.checked=!todo.checked;
        return todo;
      }   
      })
      setTodos(newTodos);
  },[todos])

  return (
    <ToDoTemplate>
      <ToDoInsert onInsert={onInsert} />
      <ToDoList todos={todos} onRemove={onRemove} onTogle={onTogle} />
    </ToDoTemplate>
  );
}

export default App;
