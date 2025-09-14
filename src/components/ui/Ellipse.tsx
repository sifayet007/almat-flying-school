import React from "react";

interface EllipseProps extends React.HTMLAttributes<HTMLDivElement> { }

const Ellipse: React.FC<EllipseProps> = ({ className, ...props }) => {
    return (
        <div
            className={`h-[400px] w-[400px] rounded-full blur-[350px]  ${className}`}
            {...props}
        />
    );
};

export default Ellipse;

/* Group 1707480634 */
