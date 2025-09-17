'use client'
import React, { useEffect, useState } from 'react';
import TrialLessonCard from '../cards/TrialLessonCard';
import trialLessonData from '@/constants/trialLesson.constant';
import { ITrialLessonCardProps } from '@/interfaces/trialLesson.interfaces';
import { IconPointFilled } from '@tabler/icons-react';
import InnerShadow from '../ui/InnerShadow';
import { motion } from 'framer-motion';
motion


const TrialLesson = () => {
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
        <motion.div initial={{ opacity: 0, y: isMobile ? 10 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ amount: isMobile ? 0.1 : 0.2 }} className='bg-white main-container mt-[42px] lg:px-[30px] rounded-2xl py-[50px]'>
            <InnerShadow className='group mt-5 mb-5' icon={<IconPointFilled className='text-yellow-400 group-hover:text-[rgba(255,99,132,0.7)] transition-all duration-300 ease-in-out' />} text='Trial Lesson' hoverShadowColor='rgba(255,99,132,0.7)' shadowColor='#FFF0B5B2' />
            <div className='flex md:flex-row flex-col justify-between md:space-y-0 space-y-5'>
                <div className='space-y-5'>
                    <h1 className='text-[clamp(24px,4vw,40px)] font-bold'>Trial Flying <br className='md:block hidden' />
                        <span className='text-brand-primary '> Lessons</span>
                    </h1>
                </div>
                <p className='max-w-[500px] md:text-[18px] text-base'>Based at Coventry and Sywell Aerodrome, Northamptonshire, we deliver commercial-level professionalism in a friendly, club environment. Wether you want to train, rent aircraft or hour build, we can help.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[clamp(24px,4vw,50px)]'>
                {
                    trialLessonData.map((data: ITrialLessonCardProps) => (
                        <TrialLessonCard key={data.id} data={data} />
                    ))

                }
            </div>

        </motion.div>
    );
};

export default TrialLesson;