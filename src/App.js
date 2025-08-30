import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Question from './pages/Question';
import Result from './pages/Result';
import Board from './pages/Board';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />{/* 컴포넌트의 path 속성은 경로를 지정하고, element 속성은 해당 경로로 접근했을 때 렌더링할 페이지 컴포넌트를 지정*/}
        <Route path="/question" element={<Question />} />
        <Route path="/result" element={<Result />} />
        <Route path='/board' element={<Board/>} />
      </Routes>
    </div>
  );
}

export default App;
