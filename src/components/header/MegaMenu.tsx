"use client"
import { flyingSchoolData } from '@/constants/flyingSchoolData.constant';
import { freeInfo } from '@/constants/freeInfoData.constant';
import { trialLessonsData } from '@/constants/trialLessonsData.constant';
import { IconArrowRight, IconChevronDown } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../buttons/Button';
import { motion } from 'framer-motion';


const MegaMenu = ({ className }: { className: string }) => {
    const [hoveredIndexFreeInfo, setHoveredIndexFreeInfo] = useState(0);
    const [hoveredIndexTrialLessons, setHoveredIndexTrialLessons] = useState(0);
    const [hoveredFlyingSchool, setHoveredFlyingSchool] = useState(0)
    return (
        <div className={`main-container hidden appearance-auto lg:flex gap-2.5 justify-between py-2 relative ${className}`}>
            <div>
                <Link href={'/'} className='text-brand-primary font-bold'>Home</Link>

            </div>
            {/*   Free Info */}
            <div className='group'>
                <h1 className='flex gap-x-5 cursor-pointer group-hover:text-brand-primary'>
                    <span className='line-clamp-1'>
                        Free Info
                    </span>
                    <span className='group-hover:rotate-180 duration-300'><IconChevronDown size={20} /></span>
                </h1>
                <div className='hidden p-5 drop-shadow-2xl rounded-2xl duration-300 bg-white group-hover:flex transition-all absolute top-8'>
                    <div className='max-w-[400px] space-y-5'>
                        <h1 className='text-[30px] font-bold uppercase'>Free Info</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <div>
                        <div className="flex gap-[35px]">
                            {/* Left side list */}
                            <div className="flex-1">
                                {freeInfo.map((item, index: number) => (
                                    <div
                                        key={index}
                                        className={`group border-b-2 text-sm cursor-pointer flex items-center gap-x-1.5
              ${hoveredIndexFreeInfo === index ? "border-brand-primary" : "border-black/10"}
            `}
                                        onMouseEnter={() => setHoveredIndexFreeInfo(index)}
                                        onMouseLeave={() => setHoveredIndexFreeInfo(0)}
                                    >

                                        <span
                                            className={`transition-opacity ease-in-out duration-300 
                ${hoveredIndexFreeInfo === index ? "opacity-100 text-brand-primary" : "opacity-0"}
              `}
                                        >
                                            <IconArrowRight size={18} />
                                        </span>
                                        <p
                                            className={`py-2 text-sm transition-colors duration-300 ease-in-out whitespace-nowrap 
                ${hoveredIndexFreeInfo === index ? "text-brand-primary" : "text-black"}
              `}
                                        >
                                            {item.title}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Right side image */}
                            <div className="flex-1 flex justify-center items-center aspect-[350/262] ">
                                {hoveredIndexFreeInfo !== null && (
                                    <Image
                                        src={freeInfo[hoveredIndexFreeInfo].image}
                                        alt={freeInfo[hoveredIndexFreeInfo].title}
                                        width={300}
                                        height={200}
                                        className="rounded-lg shadow-lg transition-all duration-300"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <div>
                </div>

            </div>
            <motion.div className='group'
            >
                <h1 className='flex gap-x-3 cursor-pointer group-hover:text-brand-primary'>
                    <span className='line-clamp-1'>
                        Trial Lessons & Experiences
                    </span>
                    <span className='group-hover:rotate-180 duration-300'><IconChevronDown size={20} /></span>
                </h1>
                <div className="gap-[35px] drop-shadow-2xl hidden p-5 rounded-2xl duration-300 bg-white group-hover:flex transition-all absolute top-8">
                    {/* Left side list */}
                    <div className='max-w-[300px]'>
                        <h1 className='text-[30px] font-bold uppercase'>Trial Lessons & Experiences</h1>
                        <div className="mt-10">
                            {trialLessonsData.map((item, index: number) => (
                                <div
                                    key={index}
                                    className={`group border-b-2 text-sm cursor-pointer flex items-center gap-x-1.5
              ${hoveredIndexTrialLessons === index ? "border-brand-primary" : "border-black/10"}
            `}
                                    onMouseEnter={() => setHoveredIndexTrialLessons(index)}
                                    onMouseLeave={() => setHoveredIndexTrialLessons(0)}
                                >

                                    <span
                                        className={`transition-opacity ease-in-out duration-300 
                ${hoveredIndexTrialLessons === index ? "opacity-100 text-brand-primary" : "opacity-0"}
              `}
                                    >
                                        <IconArrowRight size={18} />
                                    </span>
                                    <p
                                        className={`py-2 text-sm transition-colors duration-300 ease-in-out whitespace-nowrap 
                ${hoveredIndexTrialLessons === index ? "text-brand-primary" : "text-black"}
              `}
                                    >
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side image */}
                    <div className="flex-1 flex justify-center items-center aspect-[350/262] ">
                        {trialLessonsData !== null && (
                            <Image
                                src={freeInfo[hoveredIndexTrialLessons].image}
                                alt={freeInfo[hoveredIndexTrialLessons].title}
                                width={300}
                                height={200}
                                className="rounded-lg shadow-lg transition-all duration-300"
                            />
                        )}
                    </div>
                </div>

            </motion.div>
            <div className='group'>

                <h1 className='flex gap-x-3 cursor-pointer group-hover:text-brand-primary'>
                    <span className='line-clamp-1'>Flying School</span>
                    <span className='group-hover:rotate-180 duration-300'><IconChevronDown size={20} /></span>
                </h1>
                <div className="gap-[35px] hidden group-hover:opacity-100 opacity-0 p-5 drop-shadow-2xl rounded-2xl duration-300 bg-white group-hover:flex transition-all absolute top-8">
                    {/* Left side list */}
                    <div className='max-w-[300px]'>
                        <h1 className='text-[30px] font-bold uppercase'>Flying School</h1>
                        <div className="">
                            {flyingSchoolData.map((item, index: number) => (
                                <div
                                    key={index}
                                    className={`group border-b-2 text-sm cursor-pointer flex items-center gap-x-1.5
              ${hoveredFlyingSchool === index ? "border-brand-primary" : "border-black/10"}
            `}
                                    onMouseEnter={() => setHoveredFlyingSchool(index)}
                                    onMouseLeave={() => setHoveredFlyingSchool(0)}
                                >

                                    <span
                                        className={`transition-opacity ease-in-out duration-300 
                ${hoveredFlyingSchool === index ? "opacity-100 text-brand-primary" : "opacity-0"}
              `}
                                    >
                                        <IconArrowRight size={18} />
                                    </span>
                                    <p
                                        className={`py-2 text-sm transition-colors duration-300 ease-in-out whitespace-nowrap 
                ${hoveredFlyingSchool === index ? "text-brand-primary" : "text-black"}
              `}
                                    >
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side image */}
                    <div>
                        <div className='flex justify-between items-center'>
                            <h4 className='font-bold'>Pilot Licence Information
                            </h4>
                            <Button buttonText='View All' className='uppercase border-2 rounded-[10px] border-black/10 py-[10px] px-[14px] text-sm' icon={<IconArrowRight size={18} />} />
                        </div>
                        <div className="grid grid-cols-3 gap-[10px] mt-[14px]">
                            {Object.values(flyingSchoolData[hoveredFlyingSchool].image).map((imgSrc, i) => (
                                <div key={i} className="w-[170px] h-[150px]">
                                    <Image
                                        src={imgSrc}
                                        alt={flyingSchoolData[hoveredFlyingSchool].title}
                                        width={300}
                                        height={200}
                                        className="rounded-lg w-full h-full object-cover shadow-lg transition-all duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='gap-x-5 line-clamp-1  cursor-pointer group-hover:text-brand-primary'>Hour Building</h3>
            </div>
            <div className='group'>
                <h1 className='flex gap-x-3 cursor-pointer group-hover:text-brand-primary'>
                    <span className='line-clamp-1'>
                        PPL & LAPL Theory
                    </span>
                    <span className='group-hover:rotate-180 duration-300'><IconChevronDown size={20} /></span>
                </h1>

            </div>

            <div className='group'>

                <h1 className='flex gap-x-3 cursor-pointer group-hover:text-brand-primary'>
                    <span className='line-clamp-1'>
                        PPL & LAPL Theory
                    </span>
                    <span className='group-hover:rotate-180 duration-300'><IconChevronDown size={20} /></span>
                </h1>
            </div>
            <div className='group'>
                <h1 className='flex gap-x-3 cursor-pointer group-hover:text-brand-primary'>
                    <span>
                        Club
                    </span>
                    <span className='group-hover:rotate-180 duration-300'><IconChevronDown size={20} /></span>
                </h1>
                <div className="gap-[35px] hidden p-5 rounded-2xl duration-300 bg-white group-hover:flex transition-all absolute top-8 right-0 drop-shadow-2xl">
                    {/* Left side list */}
                    <div className='max-w-[300px]'>
                        <h1 className='text-[30px] font-bold uppercase'>Trial Lessons & Experiences</h1>
                        <div className="mt-10">
                            {trialLessonsData.map((item, index: number) => (
                                <div
                                    key={index}
                                    className={`group border-b-2 text-sm cursor-pointer flex items-center gap-x-1.5
              ${hoveredIndexTrialLessons === index ? "border-brand-primary" : "border-black/10"}
            `}
                                    onMouseEnter={() => setHoveredIndexTrialLessons(index)}
                                    onMouseLeave={() => setHoveredIndexTrialLessons(0)}
                                >

                                    <span
                                        className={`transition-opacity ease-in-out duration-300 
                ${hoveredIndexTrialLessons === index ? "opacity-100 text-brand-primary" : "opacity-0"}
              `}
                                    >
                                        <IconArrowRight size={18} />
                                    </span>
                                    <p
                                        className={`py-2 text-sm transition-colors duration-300 ease-in-out whitespace-nowrap 
                ${hoveredIndexTrialLessons === index ? "text-brand-primary" : "text-black"}
              `}
                                    >
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side image */}
                    <div className="flex-1 flex justify-center items-center aspect-[350/262] ">
                        {trialLessonsData !== null && (
                            <Image
                                src={freeInfo[hoveredIndexTrialLessons].image}
                                alt={freeInfo[hoveredIndexTrialLessons].title}
                                width={300}
                                height={200}
                                className="rounded-lg shadow-lg transition-all duration-300"
                            />
                        )}
                    </div>
                </div>

            </div>
            <div className='cursor-pointer line-clamp-1 hover:text-brand-primary duration-300'>
                About Us
            </div>

        </div>
    );
};

export default MegaMenu;