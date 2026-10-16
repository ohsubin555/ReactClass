//css 모듈: css 충돌 해결
// App28_ComponentA 컴포넌트에만 사용할 수 있는 모듈 css 적용
// 즉, 현재 컴포넌트에만 적용할 
import React from 'react'
//import './App28_style.css'
import styles from './App28_ComponentA.module.css'

function ComponentA() {
  return (
    <>
        <h2 className={styles.mainTitle}>ComponentA</h2>
      <div className={styles.mainContent}>컴포넌트 A입니다.</div>
    </>
  )
}

export default ComponentA