// [React 조건부 렌더링]
import React from 'react'

// [2] 삼항 연산자 연습
function MissedGoal() {
  return <h1>MISSED!!!</h1>
}

function MadeGoal() {
  return <h1>GOAL~~~</h1>
}

// function CheackGoal({isGoal})
function CheackGoal(props) {
  // 구조분해 방식
  const isGoal = props.isGoal;
  // 조건 ? 참일때 : 거짓일때
  return isGoal ? <MadeGoal /> : <MissedGoal />
}

function App() {
  return (
    <div>
      <CheackGoal isGoal={false} />
      <CheackGoal isGoal />
    </div>
  )
}

export default App
