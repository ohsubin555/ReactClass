// lazy() 로딩과 함께 suspense 사용
// 1. 지연로딩: 지연로딩을 사용하면 컴포넌트를 동적으로 불러와서 로딩중인 동안 로딩메시지 등을 표시할 수 있다. 
//2. suspense : 기다림. 긴장상태 
//     기다리는 상태
//     컴포넌트의 지연로딩을 사용하는 컴포넌트를 가져올 때 ...

import React, { Suspense } from 'react'
import MyFruits from './App29_MyFruits.jsx'

//App29_MyFruits
function App() {
  return (
    <div>
      {/*fallback : Promise의 실행 결과가 반환될 때까지 표시할 컴포넌트*/}
      <Suspense fallback={<div>로딩중 ...</div>}>
        <MyFruits />
      </Suspense>

    </div>
  )
}

export default App
