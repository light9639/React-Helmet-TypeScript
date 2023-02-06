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