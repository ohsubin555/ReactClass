// [React CSS-in-JS]
// js 코딩 내에 css 직접 작성할 수 있는 스타일링 기법. 
// 2. CSS-in-JS 설치: npm install styled-components
// 여러 동일한 스타일의 요소를 스타일 확장


import React from 'react'
import styled from 'styled-components';
//  React의 스타일링 기법 CSS In JS
const Button = styled.button`

  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;

`; 

const PrimaryButton = styled(Button)`
background-color : #007bff;
`;
const SuccessButton  = styled(Button)`
background-color : #28a745;
`;

function App() {
  return (
    <div>
      <PrimaryButton>Primary</PrimaryButton>
      <SuccessButton>Success</SuccessButton>

    </div>
  )
}

export default App