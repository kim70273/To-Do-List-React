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
    setTodos(prevTodos => prevTodos.concat(todo));//함수형 업데이트를 사용하면
    //이제 useCallback 함수 두번째 파라미터에서 todos가 바뀌는지 확인해줄 필요없다.
    //todos가 바뀔때마다 함수가 새로만들어지는것을 막음.
    nextId.current +=1;
  },[],);

  const onRemove = useCallback((id) => {
    setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id));
  },[]);

  const onTogle = useCallback((id) => {
      setTodos(prevTodos => prevTodos.map((todo) => 
        todo.id === id ? {...todo, checked:!todo.checked} : todo,
      ));
  },[])

  return (
    <ToDoTemplate>
      <ToDoInsert onInsert={onInsert} />
      <ToDoList todos={todos} onRemove={onRemove} onTogle={onTogle} />
    </ToDoTemplate>
  );
}

export default App;
