//입력값 -> useState로 관리
// 서브밋 (제출) useState 사용하지 않고 FormData 사용가능

import React from 'react'

function App() {
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log('이름', formData.get('name'));
        console.log('성별', formData.get('gender'));
        console.log('취미', formData.getAll('hobby'));
        console.log('국가', formData.get('country'));
    }
    return (
        <div>
            <h1>회원 가입</h1>
            <form onSubmit={handleSubmit} action="ok.jsp">
                <table className="vertical content">
                    <tr>
                        <th>이름</th>
                        <td>
                            <input type="text" name="name" />
                        </td>
                    </tr>
                    <tr>
                        <th>성별</th>
                        <td>
                            <input type="radio" name="gender" value="male" /> 남자
                            <input type="radio" name="gender" value="female" /> 여자
                        </td>
                    </tr>
                    <tr>
                        <th>취미</th>
                        <td>
                            <input type="checkbox" name="hobby" value="reading" />
                            독서
                            <input type="checkbox" name="hobby" value="sports" />
                            운동
                            <input type="checkbox" name="hobby" value="music" />
                            음악
                        </td>
                    </tr>
                    <tr>
                        <th>국가</th>
                        <td>
                            <select name="country">
                                <option value="kr">대한민국</option>
                                <option value="jp">일본</option>
                                <option value="us">미국</option>
                            </select>
                        </td>
                    </tr>
                </table>
                <div>
                    <button type="submit">가입하기</button>
                </div>
            </form>
        </div>
    )
}

export default App
