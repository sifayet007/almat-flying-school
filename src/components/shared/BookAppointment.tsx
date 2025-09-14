"use client";

import React from "react";
import { IconArrowUpRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Button from "../buttoms/Button";
import assets from "@/assets";



const BookAppointment = ({ className }: { className?: string }) => {
    const isMobile =
        typeof window !== "undefined" && window.innerWidth < 768 ? true : false;
    return (
        <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            viewport={{ amount: isMobile ? 0.1 : 0.3 }}
            style={{
                backgroundImage: `url(${assets.bookAppointmentBG.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className={`${className} main-container rounded-lg md:rounded-[20px] py-[clamp(20px,2.5vw,50px)] backdrop-blur-[20px] text-center mt-[clamp(24px,4vw,60px)]`}
        >
            <div className="space-y-2.5">
                <h2 className="text-white uppercase font-bold text-[clamp(20px,2.5vw,60px)] leading-tight font-[rubik]">
                    Book Your <br />
                    Free Consultation
                </h2>
                <p className="text-white text-[clamp(14px,2.5vw,18px)]">
                    Let&apos;s talk about how we can craft a user experience that not only
                    looks
                    <br className="lg:block hidden" /> great but drives real growth for
                    your product.
                </p>
            </div>

            <motion.div className="flex items-center justify-center mt-10 relative">
                <Button
                    buttonText="Book Now"
                    className="z-10 py-[clamp(8px,2.5vw,12px)] rounded-full text-[clamp(12px,2.5vw,16px)] transition-all shadow-[0_0_15px_3px_rgba(255,255,255,0.5)] uppercase bg-white/20 px-[clamp(14px,2.5vw,20px)] text-white"
                    icon={
                        <IconArrowUpRight
                            className="size-[clamp(18px,2.5vw,22px)]"
                            stroke={1.5}
                        />
                    }
                    iconPosition="left"

                />
            </motion.div>
        </motion.div>
    );
};

export default BookAppointment;
