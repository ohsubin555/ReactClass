import React, { useEffect, useState } from 'react'
//필요없는 버튼 삭제 
function App() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1); //1초마다 1씩 증가
        }
            , 1000
        );
        //useEffect 훅의 끝에 반환 함수를 포함 누수 정리 할 수 있다. 
        return () => clearTimeout(timer);

    }, []); //1번 렌더링

    return (
        <div>
            <p>count : {count}</p>

        </div>
    )
}

export default App