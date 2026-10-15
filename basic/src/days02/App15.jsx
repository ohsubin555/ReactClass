//react 구조분해
//1. 구조분해 할당을 사용하면 컴포넌트가 받을 수 있는 속성을 제한할 수 있음.
//2. React는 중괄호를 사용해서 props 를 구조분해한다 

import React from 'react'

/*
function Car({ model }) {
    return (
        <h1>My car is {model}</h1>
    )
}
*/

//car 컴포넌트 내부에서 필요한 속성만을 구조분해해서 사용
/*
function Car(props) {

    const { model, brand } = props;

    return (
        <h1>My car is {model} / {brand}</h1>
    )
}
*/
//[3] 구조분해, 나머지 속성을 모두 객체 저장.
// ...rest : 나머지 속성을 모두 객체 저장.
/*
function Car({ model, brand, ...rest }) {

    //  const { model, brand } = props;

    return (
        <h1>My car is {model} / {brand} / {rest.color}</h1>
    )
}
*/
//[4] 구조분해 할당을 이용해 속성을 설정
function Car({ brand, name = 'KKK' }) {



    return (
        <h1>My car is {brand} / {name}</h1>
    )
}


function App() {
    // 내부 무거운 문자열 "" 숫자는 중괄호
    return (
        <div>
            <Car brand="bmw" color="red" model="Mustang" year={2020} />
        </div>
    )
}

export default App