import React from 'react'

interface ButtonProps {
    border?: string;
    text?: string;
    borderWidth?: string;
    color?: string;
    children?: React.ReactNode;
    height?: string;
    onClick?: () => void;
    radius?: string;
    width?: string;
    className?: string;

}

const Button: React.FC<ButtonProps> = ({ border, text, borderWidth, color, children, height, onClick, radius, width, className }): JSX.Element => {
    return (
        <button onClick={onClick} 
                className={`bg-red-500 hover:bg-red-300 font-semibold px-4 py-1 rounded-md shadow ${text} ${className}`}>
            {children}
        </button>
    )
}

export default Button