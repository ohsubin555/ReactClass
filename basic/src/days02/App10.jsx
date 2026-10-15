import React from 'react'


//1. className 속성
//2. button을 클릭할때 이벤트 처리 속성 추가 :camelCase
//3. 버튼을 비활성화/ 활성화
//4. inline 방식 css적용: style
import './App10.css'

function App10() {

    const x = "myclass"
    const btn_click = () => {

        alert("버튼 클릭 됨!")
    }
    // js객체{}만 JSX 의 css 속성명으로 사용할 수 있다. 
    // font-size 원래.
    const divStyle = {
        color: "red"
        , fontSize: "20px"
        , backgroundColor: 'lightyellow'
    }

    return (
        <>
            <h1 className={x}>Hello World</h1>
            <button onClick={btn_click} disabled>Click me1</button>
            <button onClick={btn_click} disabled={true}>Click me2</button>
            <button onClick={btn_click} disabled={false}>Click me3</button>
            <div style={{
                color: "blue"
                , fontSize: "20px"
                , backgroundColor: 'lightyellow'
            }
            }>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto nisi error molestiae et odio sit eos doloremque vitae necessitatibus at quae sunt, corrupti totam veniam cumque voluptates aliquid nulla.
            </div>


        </>
    )
}

export default App10

