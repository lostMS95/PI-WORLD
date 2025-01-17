import React, { useState } from 'react';
import { Search, Filter, ArrowUpDown, PlusCircle, MessageCircle, Eye, Clock } from 'lucide-react';

const BoardList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handlePostClick = (id) => {
        console.log(`Navigate to post ${id}`);
        // 실제 구현시에는 여기에 네비게이션 로직 추가
    };

    const handleNewPost = () => {
        console.log('Navigate to new post page');
        // 실제 구현시에는 여기에 네비게이션 로직 추가
    };

    const samplePosts = [
        {
            id: 1,
            title: "2024년 첫 번째 공지사항입니다.",
            author: "관리자",
            category: "공지",
            views: 128,
            comments: 13,
            createdAt: "2024-01-15",
            isNotice: true
        },
        {
            id: 2,
            title: "리액트 최신 버전 사용 후기",
            author: "근우",
            category: "개발",
            views: 56,
            comments: 8,
            createdAt: "2024-01-16"
        },
        {
            id: 3,
            title: "tailwind CSS 활용 꿀팁",
            author: "디자이너",
            category: "디자인",
            views: 92,
            comments: 15,
            createdAt: "2024-01-17"
        }
    ];

    const filteredPosts = samplePosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto p-6">
            {/* 헤더 섹션 */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">커뮤니티</h1>
                <button
                    onClick={handleNewPost}
                    className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
                >
                    <PlusCircle className="w-5 h-5" />
                    새 글 작성
                </button>
            </div>

            {/* 검색 및 필터 섹션 */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="검색어를 입력하세요"
                        className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-3 border rounded-lg hover:bg-gray-50">
                        <Filter className="w-5 h-5" />
                        필터
                    </button>
                    <button className="flex items-center gap-2 px-4 py-3 border rounded-lg hover:bg-gray-50">
                        <ArrowUpDown className="w-5 h-5" />
                        정렬
                    </button>
                </div>
            </div>

            {/* 게시글 목록 */}
            <div className="bg-white rounded-xl shadow-sm">
                {filteredPosts.map((post) => (
                    <button
                        key={post.id}
                        onClick={() => handlePostClick(post.id)}
                        className="block w-full text-left border-b last:border-b-0 hover:bg-gray-50 transition"
                    >
                        <div className="p-6">
                            {/* 상단 메타 정보 */}
                            <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                                {post.isNotice && (
                                    <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium">
                                        공지
                                    </span>
                                )}
                                <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                                    {post.category}
                                </span>
                                <span>{post.author}</span>
                            </div>

                            {/* 제목 */}
                            <h2 className="text-lg font-medium mb-3">
                                {post.title}
                            </h2>

                            {/* 하단 메타 정보 */}
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                    <Eye className="w-4 h-4" />
                                    {post.views}
                                </div>
                                <div className="flex items-center gap-1">
                                    <MessageCircle className="w-4 h-4" />
                                    {post.comments}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {post.createdAt}
                                </div>
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            {/* 페이지네이션 */}
            <div className="flex justify-center gap-2 mt-8">
                {[1, 2, 3, 4, 5].map((page) => (
                    <button
                        key={page}
                        className={`w-10 h-10 rounded-lg ${
                            page === 1
                                ? 'bg-purple-600 text-white'
                                : 'bg-white border hover:bg-gray-50'
                        }`}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BoardList;