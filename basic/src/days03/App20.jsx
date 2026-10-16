// React textarea 
// 다중입력 태그 
// html: <textarea>내용입력</textarea> innerText, innerHTML
// react: <textarea value ='내용입력'></textarea> innerText, innerHTML

import React, { useState } from 'react'

function App() {
    const [mtext, setMtext] = useState('');
    function handleChange(event){
        setMtext(event.target.value);
    }
  return (
    <form>

        <label>
            작성:
            <textarea value={mtext} onChange={handleChange}/>
        </label>
        <p>
            작성한 내용 : {mtext}
        </p>
    </form>
  )
}

export default App