//[React 클래스 컴포넌트 상태 관리하기]
//1. 클래스형 컴포넌트는 state 속성을 사용하여 상태를 관리.
//2. state는 객체로 생성되고, 컴포넌트가 마운트될 때 초기값을 갖게 됨.
//3. this.setState() 메서드를 사용하여 상태를 변경.
//4. this.state가 변경되면 컴포넌트는 자동으로 리렌더링됨.

//5. 버튼클릭해서 this.state 상태 색상을 레드 -> 블루 로 변경(자동 렌더링)
import React from 'react'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            brand: "Volvo",
            model: "Mustang",
            year: "2024",
            color: "red"
        } // 클래스 컴포넌트 상태를 저장하는 객체
    }
    handleBtnClick = () => {
        // alert('color changed to blue');
        this.setState({ color: 'blue' });
    }
    render() {
        return (
            <>  <div>
                <h1>Hi I'm {this.state.brand}</h1>
                <p>It is a {this.state.color} {this.state.model} from {this.state.year}</p>
                <button onClick={this.handleBtnClick}>change color</button>


            </div></>
        )
    }
    static getDerivedStateFromProps(props, state) {
        return { favoritecolor: props.favcol };
    }
}


//자식구성요소 여러개 전달
class Garage extends React.Component {
    render() {
        return (
            <>
                <div>
                    <Car />
                    <Car /></div>


            </>
        )
    }
}



export default App