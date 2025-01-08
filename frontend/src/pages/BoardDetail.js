import React from "react";
import { useParams } from "react-router-dom";

const BoardDetail = () => {
    const { id } = useParams();

    // 샘플 댓글 데이터
    const comments = [
        { id: 1, author: "댓글 작성자", content: "이 글 너무 좋아요!" },
        { id: 2, author: "근우", content: "정말 유익한 글입니다." },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">게시글 상세 보기</h1>
            <div className="mt-4">
                <p>게시글 ID: {id}</p>
                <p>여기에 게시글 내용이 들어갑니다.</p>
            </div>
            <h2 className="text-xl font-bold mt-6">댓글</h2>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id} className="border-b py-2">
                        <p>
                            <strong>{comment.author}</strong>: {comment.content}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BoardDetail;