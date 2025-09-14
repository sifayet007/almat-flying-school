"use client";
import assets from '@/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import FlightTrainingCard from '../cards/FlightTrainingCard';
import { motion, useMotionValue, useAnimation } from "framer-motion";
import planes from '@/constants/flightTraining.constants';

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

    return (
        <div className="main-container mt-[clamp(24px,5vw,76px)] flex lg:flex-row flex-col justify-between relative items-center bg-white lg:px-[50px] rounded-[20px] lg:py-0 py-5">

            {/* Left Side */}
            <div className="w-full">
                <div className="md:max-w-[453px] space-y-5">
                    <button>Our Aircraft</button>
                    <h1 className="text-[clamp(24px,4vw,40px)] font-bold">
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
        </div>
    );
};

export default FlightTraining;
