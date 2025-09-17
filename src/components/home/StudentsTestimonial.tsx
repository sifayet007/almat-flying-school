"use client";

import Image from "next/image";
import { IconStar, IconEye, IconPencil, IconPointFilled } from "@tabler/icons-react";
import { assets_student } from "@/assets/students";
import { FcGoogle } from "react-icons/fc";
import InnerShadow from "../ui/InnerShadow";
import { testimonials } from "@/constants/studentData.constant";
import StudentCard from "../cards/StudentCard";



export default function StudentTestimonial() {
    function getClassName(index: number, current: number, length: number) {
        const offset = (index - current + length) % length;
        if (offset === 0) return "center";
        if (offset === 1) return "right-1";
        if (offset === 2) return "right-2";
        if (offset === length - 1) return "left-1";
        if (offset === length - 2) return "left-2";
        return "hidden";
    }
    return (
        <section className="main-container py-16">
            <div className="flex flex-col lg:flex-row relative overflow-hidden justify-between md:gap-[30px] gap-5 lg:items-center bg-white rounded-2xl lg:px-[60px] p-5 lg:p-0">
                {/* blur effects */}
                <div className="absolute lg:block hidden w-[506px] h-[242px] bg-white blur-3xl top-0 -translate-y-1/2 right-0 z-10"></div>
                <div className="absolute lg:block hidden w-[506px] h-[242px] bg-white blur-3xl bottom-0 translate-y-1/2 right-0 z-10"></div>

                {/* Left Side */}
                <div className="space-y-5">
                    <InnerShadow icon={<IconPointFilled className='text-brand-primary' />} text='Trial Lesson' shadowColor='#C5123033' />


                    <h2 className="text-[clamp(24px,2.5vw,44px)] font-bold">
                        What Our <span className="text-brand-primary italic">Student</span>
                        <br /> Say About Us
                    </h2>

                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do
                        eiusmod tempor magna aliqua.
                    </p>

                    <div className="flex items-center gap-2 text-gray-700 text-[18px]">
                        <IconStar className="text-brand-primary" size={20} />
                        <span className="font-semibold">4.8</span>
                        <span>(105 Reviews)</span>
                    </div>

                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                            <IconEye size={18} /> View All
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary text-white transition">
                            <IconPencil size={18} /> Write Review
                        </button>
                    </div>
                </div>

                {/* Center Dial */}
                <div className=""> 
                    <div className="lg:rotate-0 rotate-90 w-[150px] lg:flex hidden h-[430px] md:px-0 px-5">
                    <Image
                        src={assets_student.plan}
                        alt="plane illustration"
                        height={430}
                        width={150}
                        className="w-full h-full object-cover"
                    />
                    </div>
                </div>

                {/* Right Side */}
                <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-5">
                    {testimonials.map((student, index) => (
                        <div key={index} className={`${index === 0 && '-rotate-[10deg] -translate-x-14'} ${index === 1 && '-rotate-[10deg] -translate-x-5'} ${index === 2 && 'my-8'} ${index === 3 && 'rotate-[10deg] -translate-x-5'} ${index === 4 && 'rotate-[10deg] -translate-x-14'}`} style={{
                            filter: "drop-shadow(0px 8px 9px #0998FF26)",
                        }}>
                            <StudentCard student={student} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
