import React from 'react';

function HomePage() {
    return (
        <main className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    PI 코인에 오신 것을 환영합니다!
                </h2>
                <p className="text-gray-600 mb-6">
                    PI 코인은 세계적인 암호화폐로, 커뮤니티 중심의 생태계를 제공합니다.
                </p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                    더 알아보기
                </button>
            </div>
        </main>
    );
}

export default HomePage;