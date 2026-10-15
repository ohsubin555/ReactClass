import React from 'react'

// 과일 이름을 props로 받아서 앞에 별을 붙여 출력하는 컴포넌트
function Li({ fruit }) {
    return <li>*{fruit}</li>
}

export default Li
