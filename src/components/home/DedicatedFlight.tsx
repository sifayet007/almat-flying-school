"use client";
import React, { useState, useEffect } from "react";
import PilotCard from "../cards/PilotCard";
import { pilotData } from "@/constants/pilotData.constant";
import Button from "../buttons/Button";
import InnerShadow from "../ui/InnerShadow";
import { motion } from "framer-motion";


import {
    IconArrowLeft,
    IconArrowRight,
    IconPointFilled,
} from "@tabler/icons-react";


const DedicatedFlight = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    const cardWidth = 320;

    useEffect(() => {
        const updateVisibleCards = () => {
            if (window.innerWidth < 768) {
                setVisibleCards(1); // mobile
            } else if (window.innerWidth < 1024) {
                setVisibleCards(2); // tablet
            } else {
                setVisibleCards(4); // desktop
            }
        };

        updateVisibleCards();
        window.addEventListener("resize", updateVisibleCards);

        return () => window.removeEventListener("resize", updateVisibleCards);
    }, []);

    const maxIndex = pilotData.length - visibleCards;

    const handleRightClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    };

    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex <= 0 ? maxIndex : prevIndex - 1
        );
    };
    const isMobile =
        typeof window !== "undefined" && window.innerWidth < 768 ? true : false;

    return (
        <motion.div initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            viewport={{ amount: isMobile ? 0.1 : 0.3 }} className="main-container mt-[clamp(24px,4vw,60px)] overflow-hidden">
            {/* Top Section */}
            <div className="flex justify-between md:items-center flex-col md:flex-row gap-6">
                <div className="space-y-5">

                    <InnerShadow icon={<IconPointFilled className='text-blue-600 group-hover:text-[rgba(255,99,132,0.7)] duration-300 transition-all ease-in-out' />} text='Our Team' className="!md:py-[11px] !py-[8px] group" shadowColor='#5EA4FFB2' hoverShadowColor='rgba(255,99,132,0.7)' />
                    <h1 className="text-[clamp(24px,4vw,50px)] font-bold text-zinc-900 mb-1 ">
                        Frequently Asked Questions <br />
                        Our Dedicated Flight <br /> Instructors
                        <span className="text-brand-primary"> & Staff</span>
                    </h1>


                </div>

                <div>
                    <p className="md:max-w-[500px]">
                        Almat Flying Academy is a small, friendly flying school and club. We
                        strive to offer commercial school levels of professionalism and
                        structure, within a friendly club environment. We have a great team
                        of people to deliver your training and have a no nonsense approach
                        to ensure you get the best advice and support available”.
                    </p>

                    {/* Slider Navigation */}
                    <div className="mt-5 flex gap-x-2">
                        <Button
                            onClick={handleLeftClick}
                            className="w-10 h-10 flex !gap-0 items-center justify-center rounded-full bg-[radial-gradient(circle,white_10%,pink_100%)] shadow-md hover:scale-105 transition"
                            icon={<IconArrowLeft size={18} />}
                            iconPosition="left"
                        />
                        <Button
                            onClick={handleRightClick}
                            className="w-10 h-10 flex !gap-0 items-center justify-center rounded-full bg-[radial-gradient(circle,white_10%,pink_100%)] shadow-md hover:scale-105 transition"
                            icon={<IconArrowRight size={18} />}
                            iconPosition="left"
                        />
                    </div>
                </div>
            </div>

            {/* Slider Section */}
            <div className="relative w-full mt-[clamp(24px,4vw,60px)] overflow-hidden">
                <div className="absolute lg:block hidden w-[200px] h-[300px] bg-white blur-3xl left-0 -translate-x-1/2  z-10"></div>
                <div className="absolute lg:block hidden w-[200px] h-[300px] bg-white blur-3xl right-0 translate-x-1/2 z-10"></div>
                <div
                    className="flex  gap-x-5 transition-transform duration-500"
                    style={{
                        transform: `translateX(-${currentIndex * cardWidth}px)`,
                    }}
                >
                    {pilotData.map((pilot, index) => (
                        <PilotCard key={index} data={pilot} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default DedicatedFlight;
