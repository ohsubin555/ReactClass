//[React 이벤트]
//HTML DOM 과 마찬가지로 React도 사용자 이벤트에 따라 동작 처리 가능
// clikc , mouseover, mouseleave, keydown 등등
// camel case 사용 : onclick -> onClick


function App() {
    const clickhandler = () => {
        alert('버튼 클릭')
    }

    const clickhandler2 = (name, event) => {
        alert(`버튼4 ${name} 클릭 ${event.type}`)
    }

    return (
        <>
            <button onClick={function () {
                alert('버튼 클릭')
            }}>버튼</button>

            <button onClick={() => {
                alert('버튼2 클릭')
            }}>버튼2</button>

            <button onClick={clickhandler}>버튼3</button>
            {/* 버튼 클릭시 매개 변수로 넘기도록 */}
            <button onClick={(event) => clickhandler2("홍길동", event)}>버튼4</button>
        </>
    );
}

export default App
