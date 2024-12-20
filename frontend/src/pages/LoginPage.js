import React from 'react';
import SNSLoginButton from '../components/SNSLoginButton';

function LoginPage() {
    const handleSNSLogin = (platform) => {
        // SNS 로그인 로직을 여기에 추가 (네이버, 카카오 API 호출)
        console.log(`${platform} 로그인 시작`);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    PI 코인 커뮤니티 로그인
                </h2>
                <p className="text-gray-600 mb-6">
                    로그인 후 커뮤니티에 참여하세요.
                </p>

                <div className="space-y-4">
                    <SNSLoginButton
                        platform="Kakao"
                        onClick={() => handleSNSLogin('Kakao')}
                        className="w-full py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition"
                    />
                    <SNSLoginButton
                        platform="Naver"
                        onClick={() => handleSNSLogin('Naver')}
                        className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
