
function fetchFruitData(){
    // Promise 객체 : js 비동기 처리 성공/ 실패한 결과를 저장하는 내장 객체
    return new Promise((resolve) => {
        // resovle 매개변수: 실행 결과를 Promise 생성자에게 전달 하는 함수
        //일부러 2초 후 에 겨과값을 resolve () 함수를 통해서 -> Promise 생성 전달 
        setTimeout(()=>{
            resolve(['Apple', 'Banana', 'Cherry'])
        }, 2000);
    });
}

const fruitResource = {
    data: null,
    read(){
         if(this.data != null) return this.data;
         throw fetchFruitData().then(result => this.data = result);


    }
}

function MyFruits(){
   //과일 자원을 가지고 조회. 
    const fruits = fruitResource.read();
    return(
        <>
         <h2>My favoriate F</h2>
         <ul>

            {
                fruits.map(
                    (fruit,index) => (
                        <li key={index}>{fruit}</li>
                    )
                )
            }
         </ul>
        </>
    )
}

export default MyFruits;