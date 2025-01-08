import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

// 게시판 관련 페이지 추가
import BoardList from './pages/BoardList';
import BoardDetail from './pages/BoardDetail';
import BoardWrite from './pages/BoardWrite';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />

                    {/* 게시판 관련 라우트 추가 */}
                    <Route path="/board" element={<BoardList />} />
                    <Route path="/board/:id" element={<BoardDetail />} />
                    <Route path="/board/new" element={<BoardWrite />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;