import React, { useState } from "react";

const BoardWrite = () => {
    const [form, setForm] = useState({
        category: "",
        title: "",
        content: "",
        photo: null,
        location: "",
        price: "",
        quantity: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handlePhotoChange = (e) => {
        setForm({ ...form, photo: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("게시글이 작성되었습니다!");
        console.log(form);
    };

    return (
        <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">게시글 작성</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* 카테고리 */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        카테고리
                    </label>
                    <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">카테고리를 선택하세요</option>
                        <option value="판매">판매</option>
                        <option value="구매">구매</option>
                        <option value="교환">교환</option>
                    </select>
                </div>

                {/* 제목 */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        제목
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="제목을 입력하세요"
                    />
                </div>

                {/* 내용 */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        내용
                    </label>
                    <textarea
                        name="content"
                        value={form.content}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 h-32"
                        placeholder="내용을 입력하세요"
                    />
                </div>

                {/* 사진 */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        사진
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className="block w-full text-gray-700"
                    />
                </div>

                {/* 위치 */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        위치
                    </label>
                    <input
                        type="text"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="위치를 입력하세요 (카카오맵 연동 예정)"
                    />
                </div>

                {/* 금액 */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        금액
                    </label>
                    <input
                        type="number"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="금액을 입력하세요"
                    />
                </div>

                {/* 수량 */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        수량
                    </label>
                    <input
                        type="number"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="수량을 입력하세요"
                    />
                </div>

                {/* 저장 버튼 */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        저장
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BoardWrite;
