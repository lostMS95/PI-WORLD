import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; 2024 PI 코인 커뮤니티. All rights reserved.</p>
                <div className="flex justify-center space-x-6 mt-4">
                    {/* Social Media Links */}
                    <a href="#" className="hover:text-yellow-400 transition">
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 001.92-2.38 8.6 8.6 0 01-2.74 1.05 4.28 4.28 0 00-7.38 3.91A12.13 12.13 0 013 4.49a4.27 4.27 0 001.32 5.7 4.24 4.24 0 01-1.94-.53v.05a4.28 4.28 0 003.43 4.19 4.31 4.31 0 01-1.93.07 4.28 4.28 0 004 3 8.61 8.61 0 01-5.33 1.84c-.34 0-.67-.02-1-.06a12.14 12.14 0 006.57 1.93c7.88 0 12.2-6.54 12.2-12.21 0-.19 0-.37-.01-.56a8.73 8.73 0 002.15-2.22z" />
                        </svg>
                    </a>
                    <a href="#" className="hover:text-yellow-400 transition">
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.41 3.6 8.06 8.14 8.93v-6.33h-2.46v-2.6h2.46v-2.03c0-2.43 1.46-3.76 3.68-3.76 1.07 0 2.18.19 2.18.19v2.39h-1.23c-1.21 0-1.59.75-1.59 1.52v1.69h2.7l-.43 2.6h-2.27v6.33c4.54-.87 8.14-4.52 8.14-8.93 0-5.52-4.48-10-10-10z" />
                        </svg>
                    </a>
                    <a href="#" className="hover:text-yellow-400 transition">
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18.5c-4.69 0-8.5-3.81-8.5-8.5s3.81-8.5 8.5-8.5 8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5zM12 7c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 10c-2.33 0-4.31-1.68-4.31-3.75h1.51c0 1.27 1.32 2.25 2.8 2.25s2.8-.98 2.8-2.25h1.51c0 2.07-1.98 3.75-4.31 3.75z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
