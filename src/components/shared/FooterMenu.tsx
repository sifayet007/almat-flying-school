import { div } from "framer-motion/client";
import Link from "next/link";
import React from "react";

const FooterMenu = ({
    data,
    sectionKey,
    ifLink = false,
    className
}: {
    data: any[];
    sectionKey: string;
    ifLink?: boolean;
    className?: string
}) => {
    return (
        <div className={`space-y-[clamp(20px,2.5vw,24px)] ${className}`}>
            <h2 className="uppercase font-medium text-white text-[clamp(18px,2.5vw,20px)]">
                {sectionKey}
            </h2>

            {data?.map((item, index) => {

                if (typeof item === "string") {
                    return ifLink ? (
                        <Link
                            key={index}
                            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                            className="text-white/80 hover:text-white transition-colors text-[clamp(12px,2.5vw,16px)]"
                        >
                            {item}
                        </Link>
                    ) : (
                        <div key={index} className="text-white/80 text-[clamp(12px,2.5vw,16px)]">{item}</div>
                    );
                }


                return (
                    <div key={index} className="flex items-center gap-2 text-white">
                        {item.icon && React.isValidElement(item.icon)
                            ? React.cloneElement(item.icon, { size: 18 })
                            : item.icon && <item.icon size={18} />}
                        <span className="text-white/80 text-[clamp(12px,2.5vw,16px)]">{item.value}</span>
                    </div>
                );
            })}

        </div>
    );
};

export default FooterMenu;
