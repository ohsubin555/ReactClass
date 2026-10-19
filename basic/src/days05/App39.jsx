//[useState, useRef]
//[useEffect]
//1. useEffect 훅을 사용하면 컴포넌트에 side 효과를 수행할 수 있다. 
//2. side 효과: 데이터 가져오기, Dom 직접 업데이트 , 타이머 처리
// 3. useEffect (2개의 인자)
//             <function> 함수, <dependency> 두번째 인자는 선택 사항. (의존성)

import React from 'react'

function App() {

let count = 1;

function handleClick(){
    count  = count+1;
    console.log(count);
}

  return (
    <div>
      <h1>랜더링 횟수: {count}번</h1>

      <button type='button' onClick={handleClick}>버튼 </button>
    </div>
  )
}

export default App