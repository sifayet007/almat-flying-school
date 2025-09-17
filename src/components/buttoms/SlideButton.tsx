import React from "react";

interface SlideButtonProps {
    buttonText: string;
    icon?: React.ReactNode;
    shadowColor?: string;
    className?: string
}

const SlideButton = ({
    buttonText,
    icon,
    shadowColor = "rgba(255,255,255,0.8)",
    className
}: SlideButtonProps) => {
    return (
        <button
            className="flex items-center justify-center mt-10 relative group"
            style={{ ["--shadow-color" as string]: shadowColor }}
        >
            <span
                className={`text-[clamp(14px,2.5vw,16px)] bg-main-color rounded-full px-[clamp(10px,2.5vw,20px)] py-[clamp(6px,2.5vw,8px)] 
        -mr-[clamp(11px,2.5vw,16px)] cursor-pointer transition-all duration-300 
        group-hover:opacity-0 group-hover:translate-x-4 uppercase ${className}`}

                style={{ boxShadow: `0 0 15px 3px var(--shadow-color)` }}
            >
                {buttonText}
            </span>
            <span
                className={`bg-main-color group-hover:-translate-x-12 rounded-full p-[clamp(6px,2.5vw,8px)] 
        uppercase  transition-all duration-300 
        -rotate-45 group-hover:rotate-0 cursor-pointer ${className}`}
                style={{ boxShadow: `0 0 15px 3px var(--shadow-color)` }}
            >
                {icon}
            </span>
        </button>
    );
};

export default SlideButton;
