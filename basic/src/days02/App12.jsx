// React는  if문을 지원하지만 JSX 내부에서는 사용할 수 없다. 
// JSX 외부에선 사용 가능하고 내부에서는 삼항연산자를 사용. 

import React from 'react'

// x 가 100 이상이면 Admin, 그렇지 않으면 Hong 대입 -> 출력
function App() {
    const x = 100;
    let y = "Admin";
    //JSX  외부
    //if (x < 100) {
    //    y = "Hong";
    //}

    // JSX 내부에는 if문 사용 불가 삼항연상자. 
    <div>

        <h1>{y}</h1>
        <h1>{x >= 100 ? y : "Hong"}</h1>
    </div>



    return (
        <div>
            <h1>{y}</h1>

        </div>
    )
}

export default App12