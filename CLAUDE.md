# 수업 실습 단축 명령어

사용자가 메시지로 숫자 하나만 보내면 아래 규칙대로 새 실습 파일을 만든다.
대상 폴더는 `basic/src/` 아래에서 가장 번호가 큰 `daysNN` 폴더다.

- `0` → 새 번호 파일: 가장 큰 `AppNN` 번호 + 1 → `AppNN.jsx` (예: App41 → `App42.jsx`)
- `1` → 같은 번호의 다음 언더바 파일: 가장 큰 `AppNN`의 다음 `_02`, `_03`… → `AppNN_0X.jsx` (예: App41.jsx만 있으면 `App41_02.jsx`, App41_02까지 있으면 `App41_03.jsx`)

새 파일 내용은 사용자의 VS Code 스니펫 `rafcf` 형태로 채운다.

```jsx
import React from 'react'

function App() {
  return (
    <div>

    </div>
  )
}

export default App
```

`basic/src/main.jsx`는 days 폴더의 App*.jsx를 자동으로 찾으므로 import를 따로 바꾸지 않는다.

# 실행·설치 전 확인

`npm install`, `npm run dev` 같은 패키지 설치나 프로그램 실행 명령은 바로 하지 않는다.
원인과 실행할 명령어를 먼저 알려주고, 사용자가 허락한 뒤에 실행한다.
파일 목록 보기, 버전 확인처럼 아무것도 바꾸지 않는 확인용 명령은 그대로 해도 된다.
