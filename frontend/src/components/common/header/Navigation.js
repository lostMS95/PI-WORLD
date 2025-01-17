import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => (
    <nav className="mr-8">
        <ul className="flex space-x-6">
            <li>
                <Link
                    to="/public"
                    className="text-lg font-medium hover:text-purple-600 transition duration-300"
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to="/about"
                    className="text-lg font-medium hover:text-purple-600 transition duration-300"
                >
                    About
                </Link>
            </li>
            <li>
                <Link
                    to="/board"
                    className="text-lg font-medium hover:text-purple-600 transition duration-300"
                >
                    게시판
                </Link>
            </li>
        </ul>
    </nav>
);