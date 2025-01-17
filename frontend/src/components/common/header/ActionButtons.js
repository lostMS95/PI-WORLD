import React from 'react';
import { Link } from 'react-router-dom';

export const ActionButtons = () => (
    <div className="flex space-x-4">
        <Link
            to="/login"
            className="text-base font-medium hover:text-purple-600 transition duration-300"
        >
            로그인
        </Link>
        <Link
            to="/signup"
            className="text-base font-medium hover:text-purple-600 transition duration-300"
        >
            회원가입
        </Link>
    </div>
);