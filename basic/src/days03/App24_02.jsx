import { useState } from "react";

// 각 컴포넌트의 state를 App으로 끌어올림 (useState 4개는 그대로 유지)
// 각 컴포넌트의 태그를 App의 return 안으로 옮겨서 한 곳에 모음

function App() {
    // 모든 상태는 App에서 관리
    const [text, setText] = useState('');
    const [multiText, setMultiText] = useState('');
    const [gender, setGender] = useState('f');
    const [flag, setFlag] = useState(false);

    return (
        <div>
            <h1>각종 컨트롤 + 상태관리</h1>

            <h2>텍스트 박스</h2>
            <div>
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
            </div>
            <div className="message">{text}</div>

            <h2>다중라인 텍스트 박스</h2>
            <div>
                {/* <textarea onChange={event => setText(event.target.value)}>{text}</textarea> */}
                <textarea
                    value={multiText}
                    onChange={(event) => setMultiText(event.target.value)}
                ></textarea>
            </div>
            <div className="message">{multiText}</div>

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
        </div>
    )
}

export default App
