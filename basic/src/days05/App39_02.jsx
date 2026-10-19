//[useState, useRef]
//[useEffect]
//1. useEffect 훅을 사용하면 컴포넌트에 side 효과를 수행할 수 있다. 
//2. side 효과: 데이터 가져오기, Dom 직접 업데이트 , 타이머 처리
// 3. useEffect (2개의 인자)
//             <function> 함수, <dependency> 두번째 인자는 선택 사항. (의존성)

import React, { useEffect, useState } from 'react'

function App() {

  const [count, setCount] = useState(1);
  // 사이드 효과 처리하는 함수 : useEffect
  useEffect(() => {

    console.log("useeffect 호출");
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);


  }, [])

  return (
    <div>
      <h1>랜더링 횟수: {count}번</h1>

      <button type='button' onClick={() => setCount(count + 1)}>버튼 </button>
    </div>
  )
}

export default App