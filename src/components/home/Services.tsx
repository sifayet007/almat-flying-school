'use client'
import React, { useEffect, useState } from 'react';
import ServiceCard from '../cards/ServiceCard';
import { servicesData } from '@/constants/serviceData.constant';
import { ServiceDataType } from '@/interfaces/serviceDatatype.interface';
import { IconPointFilled } from '@tabler/icons-react';
import InnerShadow from '../ui/InnerShadow';
import { motion } from 'framer-motion';
motion

const Services = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ amount: isMobile ? 0.1 : 0.4 }}
            className='main-container flex flex-col justify-center items-center mt-[clamp(24px,5vw,78px)]'>
            <div className='text-center flex flex-col items-center space-y-4'>
                <InnerShadow icon={<IconPointFilled className='text-blue-600 group-hover:text-[rgba(255,99,132,0.7)] duration-300 transition-all ease-in-out' />} text='Free Learn' className="!md:py-[11px] !py-[8px] group" shadowColor='#5EA4FFB2' hoverShadowColor='rgba(255,99,132,0.7)' />

                <h1 className="text-[clamp(24px,4vw,50px)] font-bold text-center text-zinc-900 mb-1">
                    Frequently Asked Questions
                </h1>
                <h1 className='radio-canada-big font-bold text-[clamp(24px,5vw,50px)] text-black/80'>Learn to <span className='text-brand-primary italic'>Fly–Free</span> Information</h1>
                <p className='max-w-[560px] mx-auto'>Based at Coventry and Sywell Aerodrome, Northamptonshire, we deliver commercial-level professionalism in a friendly, club environment. Wether you want to train, rent aircraft or hour build, we can help.</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] mt-[clamp(24px,5vw,60px)]'>
                {
                    servicesData.map((data: ServiceDataType, index: number) => (
                        <ServiceCard key={index} data={data} />
                    ))
                }
            </div>
        </motion.div>
    );
};

export default Services;