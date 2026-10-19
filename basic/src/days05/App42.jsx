//새로 고침 뒤에도 값을 유지해서 사용하려면 컴포넌트 상태밖에
// 유지하고싶은 값을 저장해야한다.
// 브라우저 안에 저장: localStorage + JSON

import React, { useEffect } from 'react'

function App() {


    function handleSave() {

        const names = [
            "임훈",
            "김민준",
            "이서연"
        ]


        // localStorage.setItem('name', "홍길동");
        // sessionStorage.setItem('name', "서영학");
        localStorage.setItem('names', JSON.stringify(names));
        sessionStorage.setItem('names', JSON.stringify(names));

        alert("저장되었습니다.");

    }
    function handleRead() {
        // const IsName = localStorage.getItem('name');
        // const ssName = sessionStorage.getItem("name");
        // alert(`${IsName}/${ssName}`);

        const lsNames = localStorage.getItem('names');
        const ssNames = sessionStorage.getItem('names');

        console.log(lsNames, ssNames);

    }
    //렌더링 완료 후에 실행
    // 두번째 인자가 없기 때문에 렌더링 발생할때마다 함수 호출된다.
    useEffect(() => {

        const IsName = localStorage.getItem('name');
        const ssName = sessionStorage.getItem("name");
        console.log(`${IsName}/${ssName}`);

    })
    function handleEdit() {
        localStorage.setItem('name', "홍길동수정");
        sessionStorage.setItem('name', "서영학수정");
        alert("수정되었습니다.");
    }
    function handleDelete() {
        localStorage.removeItem('name');
        sessionStorage.removeItem('name');
        alert("삭제되었습니다.");
    }


    return (
        <div>
            <h1>localStorage사용 하는 예</h1>
            <button onClick={handleSave}>쓰기</button>
            <button onClick={handleRead}>읽기</button>
            <button onClick={handleEdit}>수정</button>
            <button onClick={handleDelete}>삭제</button>
        </div>
    )
}

export default App
