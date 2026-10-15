import React from 'react'
/*
// [1] JSX expressions must have one parent element.
function App() {
  return (
    <h1>My Car</h1>
    <p>It has 10*3 horsepower.</p>
  )
}
*/
/*
// [2] JSX 부모 요소 추가
function App() {
  return (
    <div>
    <h1>My Car</h1>
      <p>It has 10*3 horsepower.</p>
    </div>
  )
}
*/
/*
// [3] JSX 표현식 {} 중괄호 사용 30으로 출력됨
function App() {
  return (
    <div>
    <h1>My Car</h1>
      <p>It has {10*3} horsepower.</p>
    </div>
  )
}
*/
/*
// [4] JSX 불필요한 부모 요소 div 제거
function App() {
  return (
    <>
    <h1>My Car</h1>
      <p>It has {10*3} horsepower.</p>
    </>
  )
}
*/
// [5] JSX React.Fragment => key 값 설정
// 중괄호 묶으면 js 표현식, 변수, 함수 을 JSX내부에 삽입할 수 있다. 
function App() {
  const name = 'hong';

  const message = '이름은 ${name} 이다.'

  function test(kw){
    return kw * 100;
  }

  const person = { name: 'hong', age: 20 };

  return (
    <React.Fragment>
    <h1>My Car</h1>
      <p>It has {10*3} horsepower. -{name} / {test(11)} / {person.name} / {person.age}</p>
    </React.Fragment>
  )
}
export default App