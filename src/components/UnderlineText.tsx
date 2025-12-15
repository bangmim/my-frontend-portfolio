import React from 'react';

interface UnderlineTextProps {
    text: string;
    color?: string;
    thickness?: string;
    className?: string;
}

export default function UnderlineText({
    text,
    color = 'primary',
    thickness = '8px',
    className = '',
}: UnderlineTextProps) {
    const underlineClass = `relative ${className}`;
    const textClass = 'relative z-10';

    const getBgColor = () => {
        switch (color) {
            case 'primary':
                return 'bg-blue-500';
            case 'secondary':
                return 'bg-purple-500';
            case 'accent':
                return 'bg-pink-500';
            default:
                return color.startsWith('#') ? `bg-[${color}]` : `bg-${color}-500`;
        }
    };

    return (
        <span className={underlineClass}>
            <span className={textClass}>{text}</span>
            <span className={`absolute bottom-0 left-0 w-full ${getBgColor()} -z-10`} style={{ height: thickness }} />
        </span>
    );
}
