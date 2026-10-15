function Student(props) {
    return (
        <div>
            저는 {props.name}이고 나이는 {props.age}입니다.
        </div>

    )
}

function App() {
    const student = { name: "hong", age: 20 }
    return (
        <div>
            <h1>student component</h1>
            <Student name="홍길동" age="20" />
            <Student name="홍길동" age="20" />
            <Student name="홍길동" age="20" />
        </div>
    )
}
export default App
