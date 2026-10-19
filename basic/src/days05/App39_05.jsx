import React, { useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

function Home() {
    return (
        <>
            <h2>시작 페이지</h2>
            <p>시작 페이지입니다.</p>
            <p>시작 페이지입니다.</p>
            <p>시작 페이지입니다.</p>
        </>
    );
}

function Member() {
    useEffect(() => {
        const id = setInterval(() => {
            console.log('Member 업무 > ' + new Date().toTimeString());
        }, 1000);
        return () => {
            console.log('Member Cleanup');
            clearInterval(id);
        };
    }, []);

    return (
        <>
            <h2>회원 페이지</h2>
            <p>회원 페이지입니다.</p>
            <p>회원 페이지입니다.</p>
            <p>회원 페이지입니다.</p>
        </>
    );
}

function Admin() {
    return (
        <>
            <h2>관리자 페이지</h2>
            <p>관리자 페이지입니다.</p>
            <p>관리자 페이지입니다.</p>
            <p>관리자 페이지입니다.</p>
        </>
    );
}

function App() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link> |{' '}
                <Link to="/member">Member</Link> |{' '}
                <Link to="/admin">Admin</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/member" element={<Member />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </>
    );
}

export default App