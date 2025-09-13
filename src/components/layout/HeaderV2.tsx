"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import MegaMenu from "../header/MegaMenu";
import TopBar from "../header/TopBar";

const HeaderV2 = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                backdropFilter: "blur(0px)",
            }}
            animate={
                isScrolled
                    ? {
                        backgroundColor: "rgba(23, 23, 23, 0)",
                        backdropFilter: "blur(50px)",
                    }
                    : {
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        backdropFilter: "blur(0px)",
                    }
            }
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`fixed w-full top-0 z-50 py-[clamp(8px,2.5vw,12px)] xl:px-0 
                }`}
        >
            <div className="main-container w-full flex items-center justify-between">
                <TopBar />
            </div>
            <motion.div
                style={{ scaleX: smoothProgress }}
                className="origin-left h-[2px] bg-main-color opacity-80 absolute bottom-0 left-0 right-0"
            />
            <MegaMenu className="main-container" />
        </motion.header>
    );
};

export default HeaderV2;
