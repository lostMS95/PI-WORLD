import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/signup/SignUpPage';

import BoardList from './pages/board/BoardList';
import BoardDetail from './pages/board/BoardDetail';
import BoardWrite from './pages/board/BoardWrite';

import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
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