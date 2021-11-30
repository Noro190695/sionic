import React from 'react';
import buttonStyle from './button.module.scss';

interface IButton{
    content: string;
    variant?: string | 'default' | 'blue' | 'red' | 'green' | 'orange' | 'pink';
    px?: number;
    py?: number
    borderRadius?: number;
    border?: number;
    borderColor?: string;
    borderType?: string;
    className?: string;
    onClick?: any;
    color?: string;
    fontSize?: number;
    cursor?: string
}

const Button: React.FC<IButton> = ({
                                       content,
                                       variant= 'default',
                                       px = 10, py= 5,
                                       borderRadius = 0,
                                       border= 0,
                                       borderColor,
                                       borderType,
                                       className,
                                       onClick,
                                       color= '#010101',
                                       fontSize = 14,
                                       cursor = 'default'
}) => {
    return (
        <button
            className={buttonStyle.default__button + ` ${className?className:'ß'}`}
            onClick={onClick}
            style={{
                backgroundColor: variant === 'default'? '#bdbdbd': variant,
                padding: `${py}px ${px}px`,
                borderRadius: `${borderRadius}px`,
                border: `${border}px ${borderType? borderType: 'solid'} ${borderColor? borderColor: '#000'}`,
                color: color,
                fontSize: `${fontSize}px`,
                cursor: cursor
            }}
        >
            {content}
        </button>
    );
};

export default Button;