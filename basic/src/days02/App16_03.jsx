// [props.children 활용 : 일반상품 vs 특별상품]
// 1. Product 컴포넌트는 카드 틀(테두리, 그림자)과 이름, 가격만 정해 둔다.
// 2. 카드 아래쪽 내용은 부모가 시작태그~종료태그 사이에 넣어서 children으로 전달한다.
// 3. 일반상품(list)   : children으로 색상 전달
//    특별상품(clist)  : children으로 이미지 + 판매 기간 전달

import React from 'react'

function Product({ seq, name, price, color, children }) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, .3)',
    width: '200px'
  };

  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <div>가격: {price.toLocaleString()}원</div>
      {/* 일반상품 vs 특별상품 */}
      {children}
    </div>
  );
}

function ProductList() {
  // 일반상품
  const list = [
    { seq: 1, name: '마우스', price: 30000, color: '빨강' },
    { seq: 2, name: '키보드', price: 50000, color: '노랑' },
    { seq: 3, name: '모니터', price: 100000, color: '파랑' }
  ];

  // 특별상품
  const clist = [
    {
      seq: 1,
      name: '태블릿',
      price: 2000000,
      img: 'https://placehold.co/150',
      priod: 7
    },
    {
      seq: 2,
      name: '스마트폰',
      price: 1000000,
      img: 'https://placehold.co/150',
      priod: 5
    }
  ];

  

  return (
    <>
      <h1>일반상품</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {list.map((item) => (
          <Product key={item.seq}
            seq={item.seq}
            name={item.name}
            price={item.price}
            color={item.color}
          >
            <p>색상: {item.color}</p>
          </Product>
        ))}
      </div>

      <h1>특별상품</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {clist.map((item) => (
          <Product key={item.seq}
            seq={item.seq}
            name={item.name}
            price={item.price}
          >
            <img src={item.img} alt={item.name} />
            <p style={{ color: 'red' }}>특가 기간: {item.priod}일</p>
          </Product>
        ))}
      </div>
    </>
  )
}

function App() {
  return (
    <ProductList />
  )
}

export default App
