import React from 'react'

// 태그 사이의 내용을 props.children으로 받아서 출력
function Child(props) {
    return (
        <div>
            <h3>아들</h3>
            <div>{props.children}</div>
        </div>
    )
}

// 부모에게 받은 name, age, char를 출력
function Dog(props) {
    return (
        <div>
            <h3>강아지</h3>
            <p>이름 : {props.name}</p>
            <p>나이 : {props.age}</p>
            <p>성격 : {props.char}</p>
        </div>
    )
}

function Parent(props) {
    return (
        <div>
            <h2>My Favorite Pets</h2>
            <Dog name="멍멍이" age="2" char="활발함" />
            <Dog name="새침이" age="3" char="맨날 삐짐" />

            <Child>
                <p>아들이 강아지들을 돌봅니다.</p>
            </Child>
        </div>
    )
}

function App() {
    return (
        <Parent />
    )
}

export default App
