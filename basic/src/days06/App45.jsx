//페이징 처리..
// mocks 폴더 > members.js

import { mockMembers } from '../mocks/members.js'
import React from 'react'

function App() {

  const page = 1; //현재 페이지 번호
  const pageSize = 10; // 한 페이지에 출력 할 갯수
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const list = mockMembers.slice(start, end);

  return (
    <>
      <h1>회원 목록</h1>

      <div>전체 회원: {mockMembers.length}명</div>
      <div>현재 페이지: {page}페이지</div>
      <hr />

      <ul>
        {list.map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
