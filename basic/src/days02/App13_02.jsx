// [React 클래스 컴포넌트]
// 1. React 16.8 이전에는 클래스 컴포넌트가 React 컴포넌트의 상태와 생명주기를 추적하는 유일한 방법. 
//2. 훅(hooks)이 발표되고나서 함수 컴포넌트 사용이 일반화됨.
//3. 함수형 컴포넌트가 선호/권장
//4. 클래스 컴포넌트의 상태관리: App13_03.jsx
import React from 'react'

class Car extends React.Component {

    constructor(props) {
        super(props);
        this.state = { color: 'red' } // 클래스 컴포넌트 상태를 저장하는 객체
    }
    render() {
        return (

            <h1>Hi I'm {this.state.color} / {this.props.model} Car</h1>

        )
    }
}
//자식구성요소 여러개 전달
class Garage extends React.Component {
    render() {
        return (
            <>
                <div>
                    <Car />
                    <Car /></div>


            </>
        )
    }
}

function App() {
    return (

        <Car model="Mustang2" />



    )
}

export default App