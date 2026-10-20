import React, { useRef, useState } from 'react'

function App() {
  const [todoContent, setTodoContent] = useState('');
  const [todoList, setTodoList] = useState([]);
  const txtTodo = useRef(null);
  //할 일 추가 버튼 클릭 이벤트 핸들러
  function handleAdd() {
    if (todoContent.trim() === '') {
      alert("할일 내용 입력하세요!")
      return;
    }
    // 할 일 문자열 -> 객체 할 일 저장
    const todo = {
      id: crypto.randomUUID(),
      content: todoContent,
      done: false
    }
    setTodoList([...todoList, todo]);
    setTodoContent('');
    txtTodo.current.focus();
  }

  function handleDelete(id) {
    if (window.confirm("삭제하시겠습니까?")) {
      setTodoList(todoList.filter((todo) => todo.id !== id));
    }
  }
  return (
    <>
      <h1>
        TodoList <small>React</small>
      </h1>

      <input
        type="text"
        value={todoContent}
        ref={txtTodo}
        onChange={(event) => setTodoContent(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleAdd();
          }
        }}

      />

      {' '}

      <button onClick={handleAdd}>추가</button>

      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo.content}
            <button onClick={() => { handleDelete(todo.id) }}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
