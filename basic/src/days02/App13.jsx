//[React  컴포넌트]
// 1.컴포넌트는 독립적이고 재사용 가능한 코드 조각
//2. 자바스크립트 함수와 동일한 목적이지만 HTML을 반환함
//3. 컴포넌트는 2가지 종류
// 1) 클래스 컴포넌트
// 2) 함수 컴포넌트(권장) + 훅(Hooks)

import React from 'react'
/*
function App13() {
  return (
    <div>App13</div>
  )
}
*/
//[2] props 인수는 속성을 나타내는 '<property>'형식으로 컴포넌트에 전달
function Car(props) {
  return (
    <>
      <h2>자동차 이름: {props.name}</h2>
    </>
  )
}
function App13_01(props) {
  return (
    <>
      <h1>props.name</h1>
    </>
  )
}

export default App13