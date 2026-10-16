//React radio 

import React, { useState } from 'react'

function App() {
    const [selectedFruit, setSelectFruit] = useState('cherry');
    const handleSubmit = (event) => {
       event.preventDefault();
       alert(`선택한 과일 : ${selectedFruit}`);
    }
    const handleChange = (event) => {
     setSelectFruit(event.target.value)
    }


  return (
    <form onSubmit={handleSubmit}>
        <p>좋아하는 과일 : </p>
        <label>
            <input type="radio" name='fruit' value='apple' checked={selectedFruit === 'apple'} onChange={handleChange}/>Apple
            
        </label>
        <br />
    
        <label>
            <input type="radio" name='fruit' value='banana' checked={selectedFruit === 'banana'} onChange={handleChange}/>banana
        </label>
         <br />
    
        <label>
            <input type="radio" name='fruit' value='cherry' checked={selectedFruit === 'cherry'} onChange={handleChange} />cherry
        </label>
        <br />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default App