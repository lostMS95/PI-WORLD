import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Flag, MoreHorizontal, Clock, MapPin, ThumbsUp, Send } from 'lucide-react';

const BoardDetail = ({ postId = '1' }) => {
    const [commentText, setCommentText] = useState('');

    // 샘플 게시글 데이터
    const post = {
        id: postId,
        title: "아이폰 15 Pro 실버 판매합니다",
        content: "아이폰 15 Pro 실버 256GB 판매합니다. 구매한지 1개월 되었고 항상 케이스 착용했습니다. 배터리 성능 100%이고 모든 기능 정상작동합니다. 직거래 우선이며, 택배거래도 가능합니다.",
        author: {
            name: "판매자",
            avatar: "/api/placeholder/40/40",
            rating: 4.8
        },
        category: "판매",
        price: "1,450,000원",
        location: "서울시 강남구",
        createdAt: "2024-01-17 14:30",
        views: 245,
        likes: 12,
        images: [
            "/api/placeholder/600/400",
            "/api/placeholder/600/400",
            "/api/placeholder/600/400"
        ],
        tags: ["애플", "아이폰", "중고폰", "직거래"]
    };

    const comments = [
        {
            id: 1,
            author: {
                name: "구매희망자",
                avatar: "/api/placeholder/32/32"
            },
            content: "쪽지 보냈습니다. 확인 부탁드려요!",
            createdAt: "방금 전",
            likes: 0
        },
        {
            id: 2,
            author: {
                name: "근우",
                avatar: "/api/placeholder/32/32"
            },
            content: "상태가 너무 좋네요. 다른 색상도 있나요?",
            createdAt: "30분 전",
            likes: 2
        }
    ];

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        console.log('Comment submitted:', commentText);
        setCommentText('');
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* 게시글 헤더 */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                        <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <h3 className="font-medium">{post.author.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <span>★ {post.author.rating}</span>
                                <span>•</span>
                                <span>{post.location}</span>
                            </div>
                        </div>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <MoreHorizontal className="w-5 h-5" />
                    </button>
                </div>

                {/* 카테고리 & 태그 */}
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                        {post.category}
                    </span>
                    {post.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* 제목 & 메타정보 */}
                <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.createdAt}
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {post.location}
                    </div>
                </div>

                {/* 이미지 갤러리 */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <img
                        src={post.images[0]}
                        alt="상품 이미지"
                        className="w-full aspect-4/3 object-cover rounded-lg col-span-2"
                    />
                    <img
                        src={post.images[1]}
                        alt="상품 이미지"
                        className="w-full aspect-4/3 object-cover rounded-lg"
                    />
                    <img
                        src={post.images[2]}
                        alt="상품 이미지"
                        className="w-full aspect-4/3 object-cover rounded-lg"
                    />
                </div>

                {/* 가격 */}
                <div className="text-2xl font-bold mb-6">{post.price}</div>

                {/* 본문 내용 */}
                <p className="text-gray-700 whitespace-pre-line mb-6">
                    {post.content}
                </p>

                {/* 액션 버튼 */}
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100">
                        <Heart className="w-5 h-5" />
                        <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100">
                        <Share2 className="w-5 h-5" />
                        공유하기
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100">
                        <Flag className="w-5 h-5" />
                        신고하기
                    </button>
                </div>
            </div>

            {/* 댓글 섹션 */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-lg font-bold mb-6">
                    댓글 <span className="text-purple-600">{comments.length}</span>
                </h2>

                {/* 댓글 입력 */}
                <form onSubmit={handleCommentSubmit} className="flex gap-4 mb-6">
                    <img
                        src="/api/placeholder/32/32"
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            placeholder="댓글을 입력하세요"
                            className="w-full pr-12 py-2 px-4 border rounded-full focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-purple-600 hover:bg-purple-50 rounded-full"
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                </form>

                {/* 댓글 목록 */}
                <div className="space-y-6">
                    {comments.map((comment) => (
                        <div key={comment.id} className="flex gap-4">
                            <img
                                src={comment.author.avatar}
                                alt={comment.author.name}
                                className="w-8 h-8 rounded-full"
                            />
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-medium">{comment.author.name}</span>
                                    <span className="text-sm text-gray-500">{comment.createdAt}</span>
                                </div>
                                <p className="text-gray-700 mb-2">{comment.content}</p>
                                <div className="flex items-center gap-4 text-sm">
                                    <button className="flex items-center gap-1 text-gray-500 hover:text-purple-600">
                                        <ThumbsUp className="w-4 h-4" />
                                        좋아요 {comment.likes}
                                    </button>
                                    <button className="text-gray-500 hover:text-purple-600">
                                        답글달기
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BoardDetail;