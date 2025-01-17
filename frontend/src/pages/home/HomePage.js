import React from 'react';
import { Search, ShoppingBag, Heart, TrendingUp, Shield, Truck } from 'lucide-react';

const HomePage = () => {
    return (
        <main className="min-h-screen">
            {/* 히어로 섹션 */}
            <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <div className="container mx-auto px-6 py-24">
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            당신의 쇼핑을 더 특별하게
                        </h1>
                        <p className="text-xl mb-8 max-w-2xl">
                            최고의 제품들을 큐레이션하여 제공합니다. 지금 바로 새로운 쇼핑 경험을 시작하세요.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                                쇼핑하기
                            </button>
                            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition">
                                더 알아보기
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 특징 섹션 */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <TrendingUp className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">트렌디한 상품</h3>
                                <p className="text-gray-600">최신 트렌드 상품 큐레이션</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <Shield className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">안전한 거래</h3>
                                <p className="text-gray-600">검증된 판매자의 상품</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <Truck className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">빠른 배송</h3>
                                <p className="text-gray-600">당일 발송 서비스</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 인기 상품 섹션 */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">인기 상품</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="group">
                                <div className="relative overflow-hidden rounded-xl mb-4">
                                    <img
                                        src={`/api/placeholder/300/400`}
                                        alt="Product"
                                        className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                                    />
                                    <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md">
                                        <Heart className="w-5 h-5 text-gray-600" />
                                    </button>
                                </div>
                                <h3 className="font-semibold mb-2">프리미엄 상품 {item}</h3>
                                <p className="text-gray-600 mb-2">₩299,000</p>
                                <div className="flex items-center text-sm text-yellow-500">
                                    {'★'.repeat(5)} <span className="text-gray-600 ml-2">(123)</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 카테고리 섹션 */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">카테고리별 쇼핑</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {['패션', '전자기기', '홈리빙', '뷰티'].map((category) => (
                            <div key={category} className="relative group cursor-pointer">
                                <div className="aspect-square rounded-2xl overflow-hidden">
                                    <img
                                        src={`/api/placeholder/400/400`}
                                        alt={category}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                        <h3 className="text-white text-xl font-semibold">{category}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 뉴스레터 섹션 */}
            <section className="py-16 bg-purple-600 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">특별한 혜택을 받아보세요</h2>
                        <p className="mb-8">뉴스레터 구독하고 최신 트렌드와 할인 소식을 받아보세요!</p>
                        <div className="flex gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="이메일을 입력하세요"
                                className="flex-1 px-6 py-3 rounded-full text-gray-900"
                            />
                            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                                구독하기
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;