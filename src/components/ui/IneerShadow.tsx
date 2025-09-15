import React from "react";

interface InderShadowProps {
    icon: React.ReactNode;
    text?: string;
    shadowColor?: string;
    className?: string
}

const IneerShadow = ({
    icon,
    text,
    shadowColor = "rgba(94,164,255,0.7)",
    className
}: InderShadowProps) => {
    return (
        <div
            className={`flex items-center justify-center  w-fit py-[11px] px-5 rounded-full ${className}`}
            style={{
                boxShadow: `inset 0 0 10px 10px ${shadowColor}`,
            }}
        >
            <span>{icon}</span>
            {text && <span>{text}</span>}
        </div>
    );
};

export default IneerShadow;
