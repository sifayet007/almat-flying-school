'use client'
import React from "react";

interface InnerShadowProps {
    icon?: React.ReactNode;
    text?: string;
    shadowColor?: string;
    hoverShadowColor?: string;
    className?: string;
}

const InnerShadow = ({
    icon,
    text,
    shadowColor = "rgba(94,164,255,0.7)",
    hoverShadowColor = "rgba(255,99,132,0.7)",
    className,
}: InnerShadowProps) => {
    return (
        <div
            className={`flex items-center justify-center w-fit py-[11px] px-5 rounded-full transition-all duration-300 ${className}`}
            style={{
                ["--shadow-color" as string]: shadowColor,
                ["--hover-shadow-color" as string]: hoverShadowColor,
            }}
        >
            <span>{icon}</span>
            {text && <span className="ml-2">{text}</span>}
            <style jsx>{`
        div {
          box-shadow: inset 0 0 10px 10px var(--shadow-color);
        }
        div:hover {
          box-shadow: inset 0 0 10px 10px var(--hover-shadow-color);
        }
      `}</style>
        </div>
    );
};

export default InnerShadow;
