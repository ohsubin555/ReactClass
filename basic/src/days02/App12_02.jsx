import React from 'react'

function App() {

const dog ={

name: "Max"
,age: 3
,gender : "남"


};
let gender = '여자';
if(dog.gender === "남"){
gender = "남자";
};

return (
<>
    <ul>
        <li>이름 : {dog.name}</li>
        <li>나이 : {dog.age}</li>
        <li>성별 : {dog.gender}</li>
        <li>{gender}</li>
        <li>{dog.gender === "남" ? "남자" : "여자"}</li>
    </ul>
    <ul>
        {Object.values(dog).map((value,index)=>(
        <li key={index}>{value}</li>
        ))}
    </ul>
</>
)
}

export default App