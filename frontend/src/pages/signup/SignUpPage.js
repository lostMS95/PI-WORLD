import React, { useState } from 'react';
import { Eye, EyeOff, User, Phone, Lock, Mail } from 'lucide-react';

function SignUpPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [emailVerifying, setEmailVerifying] = useState(false);
    const [emailVerified, setEmailVerified] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (name === 'email') {
            setEmailVerified(false); // 이메일이 변경되면 인증 상태 초기화
        }
        setError('');
    };

    const handleEmailVerification = async () => {
        if (!formData.email) {
            setError('이메일을 입력해주세요.');
            return;
        }

        setEmailVerifying(true);
        try {
            // 이메일 인증 API 호출 시뮬레이션
            await new Promise(resolve => setTimeout(resolve, 1500));
            setEmailVerified(true);
            setError('');
        } catch (error) {
            setError('이메일 인증에 실패했습니다.');
        } finally {
            setEmailVerifying(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!emailVerified) {
            setError('이메일 인증이 필요합니다.');
            return;
        }

        setLoading(true);
        const { username, email, phoneNumber, password, confirmPassword } = formData;

        if (!username || !email || !phoneNumber || !password || !confirmPassword) {
            setError('모든 필드를 입력해주세요.');
            setLoading(false);
            return;
        }
        if (password !== confirmPassword) {
            setError('비밀번호가 일치하지 않습니다.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    phoneNumber,
                    password,
                }),
            });

            if (!response.ok) {
                throw new Error('회원가입 실패');
            }

            const data = await response.json();
            if (data.success) {
                setSuccess(true);
                setError('');
                // 회원가입 성공 후 추가 작업 (예: 로그인 페이지로 리다이렉트)
                setTimeout(() => {
                    window.location.href = '/login';
                }, 2000);
            } else {
                throw new Error(data.message || '회원가입 실패');
            }
        } catch (error) {
            setError(error.message || '회원가입 실패. 다시 시도해 주세요.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">회원가입</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        파이월드에 오신 것을 환영합니다.
                    </p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-500 p-4 rounded-lg text-sm">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="bg-green-50 text-green-500 p-4 rounded-lg text-sm">
                        회원가입이 완료되었습니다!
                    </div>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                name="username"
                                placeholder="아이디를 입력하세요"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                        </div>

                        <div className="relative flex gap-2">
                            <div className="relative flex-1">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="이메일을 입력하세요"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition
                                        ${emailVerified ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                                />
                                {emailVerified && (
                                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 text-sm">
                                        ✓ 인증됨
                                    </span>
                                )}
                            </div>
                            <button
                                type="button"
                                onClick={handleEmailVerification}
                                disabled={emailVerifying || emailVerified}
                                className={`px-4 py-3 rounded-lg text-white font-medium transition whitespace-nowrap
                                    ${emailVerified
                                    ? 'bg-green-500 cursor-not-allowed'
                                    : emailVerifying
                                        ? 'bg-blue-400 cursor-not-allowed'
                                        : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
                                }`}
                            >
                                {emailVerified ? '인증완료' : emailVerifying ? '인증중...' : '이메일 인증'}
                            </button>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Phone className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="전화번호를 입력하세요"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
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
                                className="w-full pl-11 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
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

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="비밀번호를 다시 입력하세요"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full pl-11 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            >
                                {showConfirmPassword ? (
                                    <EyeOff className="h-5 w-5 text-gray-400" />
                                ) : (
                                    <Eye className="h-5 w-5 text-gray-400" />
                                )}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading || !emailVerified}
                        className={`w-full py-3 px-4 rounded-lg text-white font-medium transition
                            ${loading || !emailVerified
                            ? 'bg-blue-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
                        }`}
                    >
                        {loading ? '처리중...' : '회원가입'}
                    </button>
                </form>
            </div>
        </div>
    );
}
export default SignUpPage;