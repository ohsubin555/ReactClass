import React, { useEffect, useState } from 'react'

function App() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        console.log("useEffect 실행")
        setCalculation(() => count * 2)
    }, [count])

    return (
        <div>
            <p>count : {count}</p>
            <button type='button' onClick={() => setCount(count + 1)}>카운트 증가</button>


            <p>calculation: {calculation}</p>

        </div>
    )
}

export default App