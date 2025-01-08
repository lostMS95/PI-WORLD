import React from "react";
import { Link } from "react-router-dom";

const BoardList = () => {
    const samplePosts = [
        { id: 1, title: "첫 번째 게시글", author: "근우" },
        { id: 2, title: "두 번째 게시글", author: "사용자" },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">게시판 목록</h1>
            <ul className="mt-4">
                {samplePosts.map((post) => (
                    <li key={post.id} className="border-b py-2">
                        <Link to={`/board/${post.id}`} className="text-blue-500 hover:underline">
                            {post.title}
                        </Link>
                        <span className="text-gray-500 ml-2">- {post.author}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-4">
                <Link to="/board/new" className="bg-blue-500 text-white px-4 py-2 rounded">
                    새 게시글 작성
                </Link>
            </div>
        </div>
    );
};

export default BoardList;