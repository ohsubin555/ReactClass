//[Style Active Links]
// NavLine : 활성화된 링크 

import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom';

//활성화된 링크에 style function 선언
const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

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
        <NavLink to='/' style={navLinkStyles}>Home</NavLink> | {' '}
        <NavLink to='/contact' style={navLinkStyles}>Contact</NavLink> | {' '}
        <NavLink to='/about' style={navLinkStyles}>About</NavLink> | {' '}
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