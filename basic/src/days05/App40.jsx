//[useRef 훅 설명]
//1. input , div 등dom 요소에 대한 참조를 할 수 있다. 
//2. 렌더링 되어도 참조 유지
//3. 사용법 : const [count, setCount] = useRef(초기값);
//4. useState 와의 차이점
// useState : 상태값 변경시 리렌더링 
// useRef : 상태값 변경시 리렌더링 안함, count.current로 접근

import React, { useEffect, useRef, useState } from 'react'

function App() {
    const count = useRef(0);
    const [inputValue, setInputValue] = useState('');

    //렌더링 될때마다 호출
    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <div>
            <p>Lorem ipsum dolor sit.</p>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <h1>useRef.count : {count.current}</h1>

        </div>
    )
}
export default App
