// [React 조건부 렌더링 - 논리 && 연산자]
// 1. 조건 && <태그>
//    조건이 true  -> && 뒤의 태그를 출력
//    조건이 false -> 아무것도 출력하지 않음
// 2. "보여줄까 / 말까" 둘 중 하나일 때 사용 (else가 필요하면 삼항 연산자)
// 3. 주의: && 앞에 숫자 0이 오면 화면에 0이 출력된다. -> 비교식(> 0)으로 작성

import React from 'react'

// [1] 배열에 값이 있을 때만 메시지 출력
function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>You have {cars.length} cars in your garage.</h2>
      }
    </>
  )
}

// [2] 새 메시지가 있을 때만 알림 표시
function Mailbox({ unreadMessages }) {
  return (
    <div>
      <h1>Mailbox</h1>
      {unreadMessages.length > 0 &&
        <h2>읽지 않은 메시지가 {unreadMessages.length}개 있습니다.</h2>
      }
    </div>
  )
}

// [3] 주의 : && 앞에 숫자 0
function ZeroTest({ count }) {
  return (
    <div>
      <h1>ZeroTest</h1>
      {/* count가 0이면 화면에 0이 찍힌다 */}
      <p>잘못된 예: {count && <span>{count}개</span>}</p>
      {/* 비교식으로 쓰면 false가 되어 아무것도 안 찍힌다 */}
      <p>올바른 예: {count > 0 && <span>{count}개</span>}</p>
    </div>
  )
}

function App() {
  const cars = ['Ford', 'BMW', 'Audi'];
  const messages = ['안녕', '내일 수업 있나요?'];

  return (
    <div>
      <Garage cars={cars} />
      <Garage cars={[]} />
      <hr />

      <Mailbox unreadMessages={messages} />
      <Mailbox unreadMessages={[]} />
      <hr />

      <ZeroTest count={0} />
    </div>
  )
}

export default App
