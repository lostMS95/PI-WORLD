import React from 'react';

function SNSLoginButton({ platform, onClick }) {
    const styles = {
        Kakao: {
            backgroundColor: '#FEE500',
            color: '#000',
        },
        Naver: {
            backgroundColor: '#03C75A',
            color: '#fff',
        },
    };

    return (
        <button
            onClick={onClick}
            style={{
                ...styles[platform],
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                fontSize: '16px',
                margin: '10px',
                cursor: 'pointer',
            }}
        >
            {platform} 로그인
        </button>
    );
}

export default SNSLoginButton;