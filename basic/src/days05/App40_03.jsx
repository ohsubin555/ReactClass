//일반 변수, useRef, useState 변수들간의 차이점
import React, { useRef, useState } from 'react'

function Member() {
  //지역변수 선언
  let localNum = 0;

  const numRef = useRef(0);

  const [countState, setCountState] = useState(0);

  // 일반 지역 변수 증가 핸들러
  const handleLocalNumClick = () => {
    localNum += 1;
    console.log('localNum:', localNum);
  };

  // useRef 값 증가 핸들러
  const handleRefNumClick = () => {
    numRef.current += 1;
    console.log('numRef.current:', numRef.current);
  };

  // useState 상태 증가 핸들러
  const handleStateCountClick = () => {
    setCountState((prev) => prev + 1);

  };

  return (
    <>
      <h2>회원(Member) 페이지</h2>
      <p>회원 페이지입니다.</p>

      <hr />

      <p>num: {localNum}</p>
      <button onClick={handleLocalNumClick}>증가</button>

      <hr />

      <p>numRef: {numRef.current}</p>
      <button onClick={handleRefNumClick}>증가</button>

      <hr />

      <p>countState: {countState}</p>
      <button onClick={handleStateCountClick}>증가</button>
    </>
  )
}

function App() {
  return (
    <div>
      <Member />
    </div>
  )
}

export default App
