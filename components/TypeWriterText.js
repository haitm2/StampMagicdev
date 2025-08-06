import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

const TypewriterText = ({ text, speed = 100, loop = true, style }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, speed);
            return () => clearTimeout(timer);
        } else if (loop) {
            // Nếu đã hiển thị hết và prop loop là true, reset lại
            setTimeout(() => {
                setDisplayText('');
                setCurrentIndex(0);
            }, 2000); // Chờ 1 giây trước khi lặp lại (bạn có thể điều chỉnh thời gian này)
        }
    }, [currentIndex, speed, text, loop]);

    return (
        <Text style={style}>{displayText}</Text>
    );
};

export default TypewriterText;