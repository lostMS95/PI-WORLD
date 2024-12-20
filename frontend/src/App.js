import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

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
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
