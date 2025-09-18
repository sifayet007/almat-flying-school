"use client";
import assets from '@/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import FlightTrainingCard from '../cards/FlightTrainingCard';
import { motion, useMotionValue, useAnimation } from "framer-motion";
import planes from '@/constants/flightTraining.constants';
import InnerShadow from '../ui/InnerShadow';
import { IconPointFilled } from '@tabler/icons-react';


const FlightTraining = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    // Motion values track position
    const yUp = useMotionValue(0);
    const yDown = useMotionValue(0);

    const controlsUp = useAnimation();
    const controlsDown = useAnimation();

    useEffect(() => {
        const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);

    }, [isDesktop]);

    const startAnimation = () => {
        controlsUp.start({
            y: ["0%", "-50%"],
            transition: { repeat: Infinity, duration: 25, ease: "linear" },
        });
        controlsDown.start({
            y: ["-50%", "0%"],
            transition: { repeat: Infinity, duration: 25, ease: "linear" },
        });
    };

    const handlePause = () => {
        controlsUp.stop();
        controlsDown.stop();
    };

    const handleResume = () => {
        // Resume from current motionValue
        controlsUp.start({
            y: [yUp.get(), "-50%"],
            transition: { repeat: Infinity, duration: 25, ease: "linear" },
        });
        controlsDown.start({
            y: [yDown.get(), "0%"],
            transition: { repeat: Infinity, duration: 25, ease: "linear" },
        });
    };

    useEffect(() => {
        if (isDesktop) startAnimation();
    },);

    const isMobile =
        typeof window !== "undefined" && window.innerWidth < 768 ? true : false;
    return (
        <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ amount: isMobile ? 0.5 : 0.4 }} className="main-container mt-[clamp(24px,5vw,76px)] flex lg:flex-row flex-col justify-between relative items-center bg-white lg:px-[50px] rounded-[20px] lg:py-0 py-5 overflow-hidden">

            {/* Left Side */}
            <div className="w-full">
                <div className="md:max-w-[453px] space-y-5">

                    <InnerShadow icon={<IconPointFilled className='text-blue-600 group-hover:text-[rgba(255,99,132,0.7)] duration-300 transition-all ease-in-out' />} text='Our Aircraft' className="!md:py-[11px] !py-[8px] group" shadowColor='#5EA4FFB2' hoverShadowColor='rgba(255,99,132,0.7)' />
                    <h1 className="text-[clamp(24px,4vw,40px)] font-bold text-zinc-900 mb-1">

                        Perfectly <br /> <span className="text-brand-primary">Maintained</span> for <br />
                        Your Flight Training
                    </h1>
                    <p>
                        Experience the thrill of flight in our modern, well-maintained training aircraft. Each plane is equipped
                        with the latest safety features, regularly serviced by certified technicians, and designed to provide
                        comfort, performance, and reliability for every flight lesson.
                    </p>
                    <div><Image src={assets.redLine} alt="" /></div>
                </div>
            </div>

            {/* Right Side */}
            <div
                className="grid md:grid-cols-2 grid-cols-1 gap-5 w-full lg:h-[760px] overflow-hidden"
                onMouseEnter={handlePause}
                onMouseLeave={handleResume}
            >

                <div className="absolute w-[700px] lg:block hidden h-[200px] bg-white blur-3xl top-0 -translate-y-1/2 right-0 z-10"></div>

                <div className="absolute w-[700px] lg:block hidden h-[200px] bg-white blur-3xl bottom-0 translate-y-1/2 right-0 z-10"></div>

                {isDesktop ? (
                    <>
                        {/* Left Column - Scroll Up */}
                        <motion.div className="flex flex-col" animate={controlsUp} style={{ y: yUp }}>
                            {[...planes, ...planes].map((plan, index) => (
                                <div key={`up-${index}`} className="mb-4">
                                    <FlightTrainingCard plan={plan} />
                </div>
                            ))}
                        </motion.div>

                        {/* Right Column - Scroll Down */}
                        <motion.div className="flex flex-col" animate={controlsDown} style={{ y: yDown }}>
                            {[...planes, ...planes].map((plan, index) => (
                                <div key={`down-${index}`} className="mb-4">
                                    <FlightTrainingCard plan={plan} />
                                </div>
                            ))}
                        </motion.div>
                    </>
                ) : (
                    planes.map((plan, index) => (
                        <div key={index} className="mb-4 md:mt-0 mt-8">
                            <FlightTrainingCard plan={plan} />
                        </div>
                    ))
                )}
            </div>
        </motion.div>
    );
};

export default FlightTraining;
