import { useState } from 'react'
//import heroImg from './assets/hero.png'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import './App.css'
/*
//컴포넌트
function Greeting() {
  return (
    <h1>Hello Word~~</h1>
  )
}
*/
/*2
function Greeting(props) { //속성을 다 받음
  return (
    <h1>Hello Word {props.name}/{props.age}~~</h1>
  )
}
*/

function Greeting({name}) { //속성을 다 받음
  return (
    <h1>Hello Word {name}~~</h1>
  )
}
//App컴포넌트 
function App() {


  return (
    <Greeting name="Hong" age={20} />
  );
}

export default App
