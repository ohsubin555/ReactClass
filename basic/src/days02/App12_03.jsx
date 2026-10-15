import React from 'react';
import Li from './App12_02_Li.jsx';

function App() {
    const items = ["사과", "바나나", "당근", "오렌지", "멜론"];

    return (
        <div>
            <h1>과일 목록</h1>
            <ul>
                {items.map((fruit, index) => (
                    <Li key={index} fruit={fruit} />
                ))}
            </ul>
        </div>
    );
}

export default App;
