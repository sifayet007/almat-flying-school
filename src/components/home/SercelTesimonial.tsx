"use client";

import Image from "next/image";
import { IconStar, IconEye, IconPencil, IconPointFilled } from "@tabler/icons-react";
import { assets_student } from "@/assets/students";
import InnerShadow from "../ui/InnerShadow";
import { testimonials } from "@/constants/studentData.constant";
import StudentCard from "../cards/StudentCard";
import { useEffect, useState } from "react";

export default function StudentTestimonial() {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prev) => prev + 0.2); // rotation speed control
        }, 30);
        return () => clearInterval(interval);
    }, []);

    const radius = 150; // circle size
    const centerX = 200;
    const centerY = 200;

    return (
        <section className="main-container py-16">
            <div className="flex flex-col lg:flex-row relative overflow-hidden justify-between md:gap-[30px] gap-5 lg:items-center bg-white rounded-2xl lg:px-[60px] p-5 lg:p-0">
                {/* Left Side */}
                <div className="space-y-5">
                    <InnerShadow
                        icon={<IconPointFilled className="text-brand-primary" />}
                        text="Trial Lesson"
                        shadowColor="#C5123033"
                    />

                    <h2 className="text-[clamp(24px,2.5vw,44px)] font-bold">
                        What Our <span className="text-brand-primary italic">Student</span>
                        <br /> Say About Us
                    </h2>

                    <p className="text-gray-600">
                        Thousands of students shared their experiences. See what they say about
                        us.
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
                    <div className="lg:rotate-0 rotate-90 lg:flex hidden  w-full aspect-[150/430] relative">
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
                <div
                    className="relative w-[400px] h-[400px] rounded-full"
                    style={{ transform: `rotate(${rotation}deg)` }}
                >
                    {testimonials.map((student, index) => {
                        const angle = (index / testimonials.length) * 360;
                        const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
                        const y = centerY + radius * Math.sin((angle * Math.PI) / 180);

                        return (
                            <div
                                key={index}
                                className="absolute"
                                style={{
                                    left: `${x}px`,
                                    top: `${y}px`,
                                    transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
                                }}
                            >
                                <div className="w-[180px]">
                                    <StudentCard student={student} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
