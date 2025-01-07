import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo Section */}
                <h1 className="text-3xl font-extrabold tracking-tight">
                    <Link to="/" className="hover:text-yellow-300 transition duration-300">
                        PI 코인 커뮤니티
                    </Link>
                </h1>

                {/* Navigation Section */}
                <nav>
                    <ul className="flex space-x-8">
                        <li>
                            <Link
                                to="/"
                                className="text-lg font-medium hover:text-yellow-300 transition duration-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="text-lg font-medium hover:text-yellow-300 transition duration-300"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/board"
                                className="text-lg font-medium hover:text-yellow-300 transition duration-300"
                            >
                                게시판
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Action Button */}
                <div>
                    <Link
                        to="/signup"
                        className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-md font-semibold shadow hover:bg-yellow-500 transition duration-300"
                    >
                        Join Now
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;