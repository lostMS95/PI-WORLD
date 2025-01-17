import React, { useState } from 'react';
import { Image, MapPin, DollarSign, Package, X } from 'lucide-react';

const BoardWrite = () => {
    const [form, setForm] = useState({
        category: '',
        title: '',
        content: '',
        photos: [],
        location: '',
        price: '',
        quantity: '',
        tags: []
    });

    const [tagInput, setTagInput] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handlePhotoChange = (e) => {
        const files = Array.from(e.target.files);
        setForm({ ...form, photos: [...form.photos, ...files] });
    };

    const removePhoto = (index) => {
        setForm({
            ...form,
            photos: form.photos.filter((_, i) => i !== index)
        });
    };

    const handleTagKeyDown = (e) => {
        if (e.key === 'Enter' && tagInput.trim()) {
            e.preventDefault();
            if (!form.tags.includes(tagInput.trim())) {
                setForm({
                    ...form,
                    tags: [...form.tags, tagInput.trim()]
                });
            }
            setTagInput('');
        }
    };

    const removeTag = (tagToRemove) => {
        setForm({
            ...form,
            tags: form.tags.filter(tag => tag !== tagToRemove)
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white rounded-2xl shadow-sm p-8">
                <h1 className="text-3xl font-bold mb-8">새 글 작성</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* 카테고리 선택 */}
                    <div className="grid grid-cols-3 gap-4">
                        {['판매', '구매', '교환'].map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setForm({ ...form, category: cat })}
                                className={`py-3 px-4 rounded-lg border-2 font-medium transition-all
                                    ${form.category === cat
                                    ? 'border-purple-600 bg-purple-50 text-purple-600'
                                    : 'border-gray-200 hover:border-purple-600'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* 제목 */}
                    <div>
                        <input
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            placeholder="제목을 입력하세요"
                            className="w-full text-xl p-4 border-0 border-b focus:ring-0 placeholder:text-gray-400"
                        />
                    </div>

                    {/* 내용 */}
                    <div>
                        <textarea
                            name="content"
                            value={form.content}
                            onChange={handleChange}
                            placeholder="내용을 입력하세요"
                            className="w-full h-48 p-4 border rounded-lg resize-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        />
                    </div>

                    {/* 사진 업로드 */}
                    <div>
                        <label className="block font-medium mb-2">사진 첨부</label>
                        <div className="grid grid-cols-4 gap-4">
                            {form.photos.map((photo, index) => (
                                <div key={index} className="relative aspect-square rounded-lg bg-gray-100">
                                    <img
                                        src={URL.createObjectURL(photo)}
                                        alt={`Preview ${index}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removePhoto(index)}
                                        className="absolute top-2 right-2 p-1 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                            {form.photos.length < 4 && (
                                <label className="cursor-pointer aspect-square rounded-lg border-2 border-dashed border-gray-300 hover:border-purple-600 transition-colors flex flex-col items-center justify-center">
                                    <Image className="w-6 h-6 text-gray-400 mb-2" />
                                    <span className="text-sm text-gray-500">사진 추가</span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handlePhotoChange}
                                        className="hidden"
                                        multiple
                                    />
                                </label>
                            )}
                        </div>
                    </div>

                    {/* 태그 입력 */}
                    <div>
                        <label className="block font-medium mb-2">태그</label>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {form.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 text-purple-600"
                                >
                                    #{tag}
                                    <button
                                        type="button"
                                        onClick={() => removeTag(tag)}
                                        className="ml-2"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </span>
                            ))}
                        </div>
                        <input
                            type="text"
                            value={tagInput}
                            onChange={(e) => setTagInput(e.target.value)}
                            onKeyDown={handleTagKeyDown}
                            placeholder="태그를 입력하고 Enter를 누르세요"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        />
                    </div>

                    {/* 거래 정보 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                name="location"
                                value={form.location}
                                onChange={handleChange}
                                placeholder="거래 희망 장소"
                                className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            />
                        </div>
                        <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="number"
                                name="price"
                                value={form.price}
                                onChange={handleChange}
                                placeholder="가격"
                                className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            />
                        </div>
                        <div className="relative">
                            <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="number"
                                name="quantity"
                                value={form.quantity}
                                onChange={handleChange}
                                placeholder="수량"
                                className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            />
                        </div>
                    </div>

                    {/* 버튼 */}
                    <div className="flex gap-4 pt-4">
                        <button
                            type="button"
                            className="flex-1 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
                        >
                            임시저장
                        </button>
                        <button
                            type="submit"
                            className="flex-1 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
                        >
                            등록하기
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BoardWrite;