# 👑 React-Helmet-Async 라이브러리를 이용하여 만든 예제입니다.
:octocat: 바로가기 : https://light9639.github.io/React-Helmet-TypeScript/

<img src="https://user-images.githubusercontent.com/95972251/217133246-a41a0178-0349-47a2-b482-bf600aefd1aa.png" alt="Img" width="500px" />

:sparkles: React-Helmet-Async 라이브러리를 이용하여 만든 예제입니다. :sparkles:
## :tada: React 프로젝트 생성
- React 생성
```bash
npm create-react-app my-app
# or
yarn create react-app my-app
```

- vite를 이용하여 프로젝트를 생성하려면
```bash
npm create vite@latest
# or
yarn create vite
```
- 터미널에서 실행 후 프로젝트 이름 만든 후 React 선택, Typescirpt-SWC 선택하면 생성 완료.
## 🚂 react-helmet-async, sass, react-router-dom 설치
- 이 프로젝트를 만들려면 필요한 여러 라이브러리들을 설치해야 한다. 따라서 `react-helmet-async`, `sass`, `react-router-dom`을 설치한다.
```bash
$ npm install react-helmet-async sass react-router-dom
# or
$ yarn add react-helmet-async sass react-router-dom
```
## ✒️ main.tsx, App.tsx, index.scss, App.scss 수정 및 작성
### ⚡ main.tsx
- `react-router-dom`에서 `BrowserRouter`을 `import`한 뒤 `App` 컴포넌트를 감싸서 라우팅 기능을 추가한다.
```typescript
import { BrowserRouter } from 'react-router-dom'

<BrowserRouter>
  <App />
</BrowserRouter>
```

### ⚡ App.tsx
- `react-helmet-async`를 이용하여 `link`, `title`을 작성하고 `Hello.tsx`로 `props`를 전송하여 `title`명이 바뀌도록 설정한다.
- `react-router-dom`의 `Link`, `Routes`, `Route`을 이용하여 라우팅 기능 구현.
- 문서 상단에 `Header` 컴포넌트를 넣어서 `Link`를 통해 페이지 이동 시키게 한다.
```typescript
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import HelmetImg from './assets/Helmet.png'
import { Helmet, HelmetProvider } from "react-helmet-async";
import Hello from "./components/Hello";
import Detail from "./components/Detail";
import { Link, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import './App.scss'

export default function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <div>
        <a href="https://www.npmjs.com/package/react-helmet-async" target="_blank">
          <img src={HelmetImg} className="logo" alt="Helmet logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <HelmetProvider>
        <div>
          <Helmet>
            <link rel="icon" type="image/svg+xml" href={HelmetImg} />
            <title>React-Helmet-Async</title>
            <link rel="canonical" href="https://www.tacobell.com/" />
          </Helmet>
          <Routes>
            <Route path="/" element={<Hello name="React-Helmet-Async" />} />
            <Route path="/detail/:id" element={<Detail name="Detail" />} />
            <Route path="*" element={<Hello name="This is Error Page" />} />
          </Routes>
          <h2>링크를 클릭하면 이름과 Title명이 변경됩니다. {"\u2728"}</h2>
        </div>
      </HelmetProvider>
    </div>
  )
}
```

### ⚡ index.scss
- `index.scss`에 `@mixin`을 이용한 반응형 함수를 추가한다.
```css
@mixin mobile {
  @media (max-width: 767px) {
    @content;
  }
}

h1 {
  font-size: 1.75rem;
  line-height: 1.1;

  @include mobile {
    font-size: 1.35rem;
  }
}

h2 {
  margin-top: 30px;
  font-size: 1.1rem;

  @include mobile {
    margin-top: 25px;
    font-size: 0.9rem;
  }
}
```

### ⚡ App.scss
- `App.scss`에 `@mixin`을 이용한 반응형 함수와, `Header` 부분에 스타일링을 추가한다.
- `logo` 호버시 효과와 반응형 스타일링 추가.
```css
@mixin mobile {
  @media (max-width: 767px) {
    @content;
  }
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  margin: 75px 0 30px;

  @include mobile {
    height: 5rem;
    margin: 60px 0 10px;
  }

  &:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
}

.Header {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  gap: 25px;
  background-color: #000;
  width: 100%;
  padding: 20px 0;

  @include mobile {
    flex-wrap: wrap;
  }

  a {
    font-size: 1rem;
    color: #fff;
    font-weight: 600;
    transition: .5s;

    @include mobile {
      font-size: 0.9rem;
    }

    &:hover,
    &:focus {
      color: skyblue;
    }
  }
}

```
## 📝 components 파일 속 Detail.tsx, Header.tsx, Hello.tsx 수정 및 작성
### ⚡ Detail.tsx
- `App.tsx`에서 `<Route path="/detail/:id />`를 사용하여 `/detail/2`로 이동시 `title`이 **Detail2 Page**이 되도록 설정한다.
- `useParams()`를 사용하여 각 페이지마다의 숫자값을 가져온 후 텍스트와 `title` 값에 넣는다.
```typescript
import * as React from "react";
import { useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from "react-helmet-async";

interface Props {
    name: string;
}

export default ({ name }: Props) => {
    let { id } = useParams();
    console.log(id)

    return (
        <React.Fragment>
            <Helmet>
                <title>{name}{id} Page</title>
            </Helmet>
            <h1>Hello {name} {id}!</h1>
        </React.Fragment>
    )
}
```

### ⚡ Header.tsx
- 상단에 Header 컴포넌트를 넣어서 `Link`를 통해 페이지 이동을 가능하게 한다.
```typescript
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(): JSX.Element {
    return (
        <div className='Header'>
            <Link to="/">Home</Link>
            <Link to="/detail/1">Detail1</Link>
            <Link to="/detail/2">Detail2</Link>
            <Link to="/detail/3">Detail3</Link>
            <Link to="Error">Error</Link>
        </div>
    )
}
```

### ⚡ Hello.tsx
- `App.tsx`에서 `props`로 전달받은 값들이 `title`명에 전달되도록 만들고 `h1` 태그 안에도 들어가도록 설정한다.
```typescript
import * as React from "react";
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

interface Props {
    name: string;
}

export default ({ name }: Props) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{name} Page</title>
            </Helmet>
            <h1>Hello {name}</h1>
        </React.Fragment>
    )
}
```
