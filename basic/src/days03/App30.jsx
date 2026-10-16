// lazy로딩과 함께 suspense 사용
// 1. lazy 로딩을 사용하면 컴포넌트를 동적으로 불러와서 로딩중인 동안 작업속도가 매우 빠르더라도 로딩 메시지를 표시할 수 있다. 
//2. 2초 지연 X 
//3. App30_Cars.jsx

import React, { lazy, Suspense } from 'react'
//import Cars from './App30_Cars.jsx'
//지연로딩
//const Cars = lazy(() => import('./App30_Cars.jsx'));
const Cars = lazy(() => import('./App30_Cars.jsx'));

function App() {
  return (
    <div>
      <Suspense fallback="로딩중 ...">
        <Cars />
      </Suspense>
    </div>
  )
}

export default App