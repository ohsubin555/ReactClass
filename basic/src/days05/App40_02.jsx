//useState, useRef, useEffect 조합하여 이전 상태 추적

import React, { useEffect, useRef, useState } from 'react'

function App() {

    const [inputValue, setInputValue] = useState('');
    const previousInputValue = useRef('');


    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </div>
    )
}
export default App

