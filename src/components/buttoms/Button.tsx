import React from 'react';
interface IButton {
    className: string,
    children: string,
    icon?: React.ReactNode,
    iconPosition?: "left" | "right",


}

const Button = ({ children, className, icon, iconPosition, }: IButton) => {
    return (
        <button className={`${className} flex gap-x-1.5 justify-center items-center`}>

            {
                iconPosition === 'left' && <span >{icon}</span>
            }
            <span>{children}</span>
            {
                iconPosition === 'right' && <span >{icon}</span>
            }

        </button>
    );
};

export default Button;