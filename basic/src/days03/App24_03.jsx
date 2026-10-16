import { useState } from "react";
import React from "react";

function TextBox(props) {

    return (
        <>
            <h2>텍스트 박스</h2>
            <div>
                <input
                    type="text"
                    value={props.text}
                    onChange={(event) => props.setText(event.target.value)}
                />
            </div>
            <div className="message">{props.text}</div>
        </>
    );
}

function CheckBox({ flag, setFlag }) {


    return (
        <>
            <h2>체크 박스</h2>
            <div>
                <input
                    type="checkbox"
                    checked={flag}
                    onChange={(event) => setFlag(event.target.checked)}
                />
            </div>
            {/* 리액트는 표현식에 boolean을 넣으면 아무것도 출력 안한다. */}
            <div className="message">{flag ? '참' : '거짓'}</div>
        </>
    );
}

function SelectBox({ gender, setGender }) {


    return (
        <>
            <h2>셀렉트 박스</h2>
            <div>
                <select
                    value={gender}
                    onChange={(event) => setGender(event.target.value)}
                >
                    <option value="m">남자</option>
                    <option value="f">여자</option>
                </select>
            </div>
            <div className="message">{gender}</div>
        </>
    );
}

function MultiTextBox(multiText, setMultiText) {


    return (
        <>
            <h2>다중라인 텍스트 박스</h2>
            <div>
                {/* <textarea onChange={event => setText(event.target.value)}>{text}</textarea> */}
                <textarea
                    value={multiText}
                    onChange={(event) => setMultiText(event.target.value)}
                ></textarea>
            </div>
            <div className="message">{multiText}</div>
        </>
    );
}


function App() {
    // 모든 상태는 App에서 관리
    const [text, setText] = useState('초깃값');
    const [multiText, setMultiText] = useState('초깃값');
    const [flag, setFlag] = useState(true);
    const [gender, setGender] = useState('f');
    return (
        <div>
            <h1>각종 컨트롤 + 상태관리</h1>
            <TextBox text={text} setText={setText} />
            <MultiTextBox multiText={multiText} setMultiText={setMultiText} />
            <SelectBox gender={gender} setGender={setGender} />
            <CheckBox flag={flag} setFlag={setFlag} />
        </div>
    )
}

export default App
