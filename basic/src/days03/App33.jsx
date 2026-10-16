// React Router
//1. 사전적 의미: 경로를 지정하는 장치, 경로를 안내하는 안내자, 라우터
//2. React 에서의 의미: URL 경로에 따라 어떤 컴포넌트를 보여줄지 결정하는 기능. 
//3. React Router ? React 애플리케이션에 표준 라우팅 기능을 제공하는 라이브러리이다. 
// 4. 라우팅 ? 서로 다른 뷰 간의 탐색을 처리하는 것(기능)
//5.  다음과 같은 작업 수행한다.
//   1) 단일 페이지 애플리케이션에 여러 페이지를 만드세요
//   2) URL 매개변수 및 쿼리 문자열을 처리합니다.
//   3) 브라우저 기록 및 탐색 관리
//   4) 중첩 경로 및 레이아웃을 생성합니다.
//   5) 인증을 위한 보호된 경로를 구현하세요.
//6. 라우터가 없으면 다른 뷰 사이를 이동할 방법이 없다. 
//7. 설치 npm install react-router-dom 
//8. 라우터 처리 과정
// 1) BrowserRouter 로 App 을 감싸기. : 라우팅 기능을 활성화. 
// 2)     <BrowserRouter>
//         <App />
//       </BrowserRouter>

// 2) 각각의 파일로 뷰 생성
// 3) React Router 기본 라우팅을 위한 세가지 구성요소
//  (1)  Link : URl을 업데이트 하는 네비게이션 링크를 생성 
//   (2)  Routes: 모든 경로를 정의하는 컨테이너
//   (3)  Route: URL 경로  - 매핑 - 구성요소


import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';

// 뷰=컴포넌트
function Home() {
  return <h1>Home Page</h1>;
}

// 뷰=컴포넌트
function About() {
  return <h1>About Page</h1>;
}

// 뷰=컴포넌트
function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <div>
         <nav>
        <Link to='/'>Home</Link> | {' '}
        <Link to='/contact'>Contact</Link> | {' '}
        <Link to='/about'>About</Link> | {' '}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  )
}

export default App