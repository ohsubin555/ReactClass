//[React Css 스타일링]
// 1) 인라인 스타일링
// 2) 스타일 시트
//3)  css 모듈

import React from 'react'
import './App27_style.css';

function Header(){
 return (
    <>
    <h1 style={{color: 'red'}}>Hello Hearder style</h1>
    <p>Add a little style</p>
    </>
 )
}
// JSX CSS 객체로 스타일링
function Footer(){
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };
     return (
    <>
    <h1 style={{}}>Hello Footer style</h1>
    <p>Footer</p>
    </>
 )

}


function Main(){
 return (
    <>
    <h3>Hello Main style</h3>
    <div>Main</div>
    </>
 )
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App