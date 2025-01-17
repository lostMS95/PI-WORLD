import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';

function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('로그인에 실패했습니다');
            }

            // 로그인 성공 처리
            window.location.href = '/dashboard';
        } catch (error) {
            setError(error.message || '로그인 중 오류가 발생했습니다');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
                    {/* 헤더 섹션 */}
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            PI-WORLD
                        </h2>
                        <p className="text-gray-500">
                            {/*로그인하고 커뮤니티와 함께하세요*/}
                        </p>
                    </div>

                    {/* 에러 메시지 */}
                    {error && (
                        <div className="bg-red-50 text-red-500 p-4 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    {/* 로그인 폼 */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-4">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="아이디를 입력하세요"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                />
                            </div>

                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="비밀번호를 입력하세요"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full pl-11 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5 text-gray-400" />
                                    ) : (
                                        <Eye className="h-5 w-5 text-gray-400" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember" className="ml-2 text-gray-600">
                                    로그인 상태 유지
                                </label>
                            </div>
                            <a href="/forgot-password" className="text-blue-600 hover:text-blue-700 font-medium">
                                비밀번호 찾기
                            </a>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition duration-200 transform hover:scale-[1.02]"
                        >
                            <span>{loading ? '로그인 중...' : '로그인'}</span>
                            {!loading && <ArrowRight className="h-5 w-5" />}
                        </button>
                    </form>

                    {/* 회원가입 링크 */}
                    <div className="text-center">
                        <p className="text-gray-600">
                            아직 회원이 아니신가요?{' '}
                            <a href="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
                                회원가입
                            </a>
                        </p>
                    </div>
                </div>

                {/* 소셜 로그인 버튼들 */}
                {/*<div className="mt-6 space-y-4">
                    <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-lg border border-gray-200 transition duration-200">
                        <img src="/google-icon.png" alt="Google" className="h-5 w-5" />
                        <span>Google로 계속하기</span>
                    </button>
                </div>*/}
            </div>
        </div>
    );
}

export default LoginPage;