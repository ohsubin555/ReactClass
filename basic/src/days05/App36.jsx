//1.입력 요소에 포커스 설정 
//2. DOM 요소의 측정
//[React forwardRef]
// 1) forwardRef 사용하면 컴포넌트의 자식요소 중에 하나에 대한 참조를 전달 할 수 있다. 
// 2) 컴포넌트 내부에서 dom요소에 대한 직접 참조를 할 수 있다. 
// 3) forwardRef 사용법
// (1) 입력 컴포넌트를 forwardRef 함수로 감싼다. 
const MyInput = forwardRef((props, ref) => (
  <input type="text" ref={ref}{...props} />
));


import React, { forwardRef, useRef } from 'react'

function App() {

  //useRef 훅을 사용해서 input 참조해 두면 렌더링이 다시 되어도 유지할 수 있도록 ..
  // inputRef 변수로 참조 유지 할 수 있다. 
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  }

  return (
    <div>
      <MyInput ref={inputRef} placeholder="Type here.." />
      <br />
      <button onClick={handleFocus}>input 포커스</button>
    </div>
  )
}

export default App