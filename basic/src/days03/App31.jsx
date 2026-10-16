// App31.jsx
//[React 포털(Portal)] 
// 1. 사전적의미: 출입구, 관문
// 2. React 포털은 부모 컴포넌트의 DOM 계층 구조 외부에서 html을 렌더링하는 
//    방법을 제공한다.
// 3. 모달창, 툴팁, 대화상자와 같이 컨테이너 레이아웃에서 벗어나는 구성요소.
// 4. Portal은 react-dom 패키지에 포함된 React메소드이다.
// 5. createPortal() 메서드를 사용하면 html은 부모 컴포넌트의 자식이 되지
//   않고, 부모 컴포넌트의 DOM 계층 구조 외부에 렌더링 된다. 
// 6. createPortal( children, domNode )
//    1) children  : 요소, 문자열 또는 프레그먼트와 같은 렌더링 가능한 React 콘텐츠
//    2) domNode   : 포털이 삽입될 DOM 요소

// 7. [포털을 사용하여 모달창 생성...]

import React, { useState } from 'react'
import { createPortal } from 'react-dom';

function Modal({isOpen, onClose, children }){

    if(!isOpen) return null; // isOpen = false

    return createPortal( 
        <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
        }}>
        <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '8px'
        }}>
            {children}
            <button onClick={onClose}>Close</button>
        </div>
        </div>
        , document.body);

}

function App() {

   // 모달창의 열고 닫고 상태관리  
   const [isOpen, setIsOpen] = useState(false) ;

  return (
    <div>
      <h1>My App</h1>
      <button onClick={ () => setIsOpen(true) }>Open Modal</button>

      <Modal isOpen={isOpen} onClose={()=> setIsOpen(false)}>
        <h2>Modal Content</h2>
        <p>This content is rendered outside the App component!</p>
      </Modal>

    </div>
  )
}

export default App