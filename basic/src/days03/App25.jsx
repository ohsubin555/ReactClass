import React from 'react'
import { useState } from 'react';

function App() {

    const [checked, setChecked] = useState(false);

    return (
        <div>
            <h1>
                폼 <small>체크박스</small>
            </h1>


            <label >
                <input onChange={(event) => setChecked(event.target.value)} /> {''}동의합니다.
            </label>
            <button disabled={!checked} onClick={() => alert('xxx')}>제출하기</button>
            <h2>현재 state값</h2>
            <p>checked: {checked}</p>
            <p>checked: {checked.toString()}</p>
            <p>checked: {String(checked)}</p>
            <p>checked: {checked ? '동의함' : '동의안함'}</p>
        </div>
    )
}

export default App