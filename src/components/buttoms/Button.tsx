import React from 'react';
interface IButton {
    className: string,
    buttonText?: string,
    icon?: React.ReactNode,
    iconPosition?: "left" | "right",
    textStyle?: string
    onClick?: () => void


}

const Button = ({ buttonText, className, icon, iconPosition, textStyle, onClick }: IButton) => {
    return (
        <button className={`${className} flex gap-x-1.5 justify-center items-center`} onClick={onClick}>

            {
                iconPosition === 'left' && <span >{icon}</span>
            }
            <span className={`${textStyle}`}>{buttonText}</span>
            {
                iconPosition === 'right' && <span >{icon}</span>
            }

        </button>
    );
};

export default Button;