"use client";
import { IconChevronDown, IconPointFilled } from "@tabler/icons-react";
import React, { useState } from "react";
import InnerShadow from "../ui/InnerShadow";
import { motion } from "framer-motion";


// --- Types ---
interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionItemProps {
    item: AccordionItem;
    isOpen: boolean;
    onClick: () => void;
}

const accordionData: AccordionItem[] = [
    {
        question: "How long does it take to get a pilot’s license?",
        answer:
            "The duration depends on the course type and your availability. On average, a Private Pilot License (PPL) can be completed in 3–6 months with regular training.",
    },
    {
        question: "Do I need any prior flying experience to join?",
        answer:
            "Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    },
    {
        question: "What kind of aircraft will I train in?",
        answer:
            "React components can be styled using Tailwind classes directly in the JSX, which allows for rapid development and easy maintenance of a consistent design system.",
    },
    {
        question: "Is flight training safe?",
        answer:
            "Yes, basic accessibility is included. The question is a button for proper semantics and keyboard navigation. For more advanced use cases, you could add more ARIA attributes.",
    },
    {
        question: "Can I schedule lessons according to my availability?",
        answer:
            "Yes, basic accessibility is included. The question is a button for proper semantics and keyboard navigation. For more advanced use cases, you could add more ARIA attributes.",
    },
];

const AccordionItem: React.FC<AccordionItemProps> = ({
    item,
    isOpen,
    onClick,
}) => {

    return (
        <div className={`border mt-5 rounded-2xl border-zinc-200 transition-transform duration-300 `}>
            {/* Header part of the accordion item (Question and Icon) */}
            <button
                className="w-full flex justify-between items-center text-left py-4 px-5 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 focus-visible:ring-opacity-75 transition-colors duration-200"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className="text-[clamp(14px,2.5vw,20px)] line-clamp-1 font-medium text-zinc-900">
                    {item.question}
                </span>

                <IconChevronDown className={` ${isOpen ? "rotate-180" : ""} transition-transform duration-300`} />

            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "md:max-h-14 lg:max-h-12 max-h-23 " : "max-h-0"
                    }`}
            >
                <div className="p-5 pt-0 text-zinc-600">
                    <p className="text-[clamp(14px,2vw,16px)]">{item.answer}</p>
                </div>
            </div>
        </div>
    );
};

const AccordionLast: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleItemClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const isMobile =
        typeof window !== "undefined" && window.innerWidth < 768 ? true : false;

    return (
        <motion.div initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            viewport={{ amount: isMobile ? 0.1 : 0.3 }} className="main-container flex items-center justify-center md:p-[60px] pb-5 bg-white mt-[clamp(24px,4vw,60px)] rounded-[20px]">
            <div className="w-full mx-auto bg-white rounded-[20px] overflow-hidden">
                <div className="p-6 md:space-y-4">

                    <div className="space-y-5 flex flex-col justify-center items-center">

                        <InnerShadow icon={<IconPointFilled className='text-blue-600 group-hover:text-[rgba(255,99,132,0.7)] duration-300 transition-all ease-in-out' />} text='FAQ' className="!md:py-[11px] !py-[8px] group" shadowColor='#5EA4FFB2' hoverShadowColor='rgba(255,99,132,0.7)' />
                    <h1 className="text-[clamp(24px,4vw,50px)] font-bold text-center text-zinc-900 mb-1">
                        Frequently Asked Questions
                    </h1>
                    </div>
                    <p className="text-center text-zinc-500 md:mb-6 line-clamp-2">
                        Find quick answers to the most common questions about our flight training programs, <br className="hidden md:block" /> aircraft, safety measures, and enrollment process..
                    </p>
                </div>
                {accordionData.map((item, index) => (
                    <AccordionItem
                        key={index}
                        item={item}
                        isOpen={openIndex === index}
                        onClick={() => handleItemClick(index)}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default AccordionLast;
