import React from 'react';
interface IButton {
    className: string,
    children?: string,
    icon?: React.ReactNode,
    iconPosition?: "left" | "right",
    textStyle?: string
    onClick?: () => void


}

const Button = ({ children, className, icon, iconPosition, textStyle, onClick }: IButton) => {
    return (
        <button className={`${className} flex gap-x-1.5 justify-center items-center`} onClick={onClick}>

            {
                iconPosition === 'left' && <span >{icon}</span>
            }
            <span className={`${textStyle}`}>{children}</span>
            {
                iconPosition === 'right' && <span >{icon}</span>
            }

        </button>
    );
};

export default Button;