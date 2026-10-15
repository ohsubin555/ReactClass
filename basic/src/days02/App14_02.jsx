//[React 컴포넌트에 전달되는 인자가 props]
// 1. 인자(Argument)는 자식 컴포넌트에 데이터를 전달하는 방법으로 사용됩니다.
// 2. 전달된 값은 자식 컴포넌트의 속성으로 사용되며, 자식 컴포넌트는 props 속성을 통해 전달된 값을 참조할 수 있습니다.
// 3. props는 부모 컴포넌트에서 전달하는 데이터로, 읽기 전용입니다.
// 4. props는 객체로 전달되며, 속성명과 속성값으로 구성됩니다. < Car model="Mustang" /> : model이 속성명, Mustang이 속성값
// 5. props는 딕셔너리와 유사한 구조를 가지며, 속성명으로 접근할 수 있습니다. model: "Mustang"


import React from 'react'

function Car(props) {
    return (
        <>
            <h2>My {props.carInfo[0]} {props.carInfo[1]}</h2>
            <h2></h2>

        </>
    )
}

function App() {
    // 배열 선언

    const carInfo = ["Volvo", "Mustang"]

    return (
        <div>

            <Car carInfo={carInfo} />
        </div>
    )
}
export default App