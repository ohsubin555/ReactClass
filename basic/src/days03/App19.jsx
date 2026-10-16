//React Form
// html form 와 마찬가지의 역할
// html의 form 요소들은 사용자 입력한 값을 자체적으로 유지되지만
// react의 form 요소들은 컴포넌트의 값은 state로 관리함.
// setState() 함수를 통해서만 값을 업데이트 할 수 있다.
// 3. 제어형 컴포넌트

import React from 'react'

function MyForm() {
  return (
    <form>
      <label>
        Enter Your Name
        <input type="text" />
      </label>
    </form>
  )
}

function App() {
  return (
    <MyForm />
  )
}

export default App
