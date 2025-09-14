"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IconStar, IconEye, IconPencil, IconStarFilled, IconPlane, IconPointFilled, IconBrandGoogle } from "@tabler/icons-react";
import { assets_student } from "@/assets/student's";
import Button from "../buttoms/Button";
import { FcGoogle } from "react-icons/fc";

const testimonials = [
    {
        name: "Arlene McCoy",
        rating: 5.0,
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor pariatur incididunt ut labore et dolore magna aliqua.",
        image: assets_student.student1,
    },
    {
        name: "Jane Cooper",
        rating: 5.0,
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor pariatur incididunt ut labore et dolore magna aliqua.",
        image: assets_student.student2,
    },
    {
        name: "Darrell Steward",
        rating: 5.0,
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor pariatur incididunt ut labore et dolore magna aliqua.",
        image: assets_student.student3,
    },
    {
        name: "Darrell Steward",
        rating: 5.0,
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor pariatur incididunt ut labore et dolore magna aliqua.",
        image: assets_student.student4,
    },
    {
        name: "Darrell Steward",
        rating: 5.0,
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor pariatur incididunt ut labore et dolore magna aliqua.",
        image: assets_student.student5,
    },
];

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
            <div className="flex flex-col lg:flex-row relative overflow-hidden justify-between  md:gap-[30px] gap-5 items-center bg-white rounded-2xl md:px-[60px]">
                {/* Left Side */}

                {/* elips */}

                <div className="absolute w-[506px] h-[242px] bg-white blur-3xl top-0 -translate-y-1/2 right-0 z-10">

                <div className="absolute w-[506px] h-[242px] bg-white blur-3xl bottom-0 translate-y-1/2 right-0 z-10">
                </div>
                </div>
                <div className="space-y-5 md:px-0 px-5">
                    <Button className="px-5 py-[11px] rounded-full bg-red-100 text-brand-primary font-medium text-sm"
                        icon={<IconPointFilled size={20} />} iconPosition="left" children="Testimonial" />


                    <h2 className="text-[44px] font-bold leading-snug">
                        What Our <span className="text-brand-primary italic">Student</span>
                        <br /> Say About Us
                    </h2>

                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do
                        eiusmod tempor magna aliqua.
                    </p>

                    <div className="flex items-center gap-2 text-gray-700 text-[18px]">
                        <IconStarFilled className="text-brand-primary" size={20} />
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



                <div className="lg:rotate-0 rotate-90 max-w-[150px] max-h-[430px] md:px-0 px-5">
                    <Image src={assets_student.plan} alt="" height={430} width={150} />
                </div> 
                {/* Right Side */}
                <div className=" flex flex-col gap-5">
                    {testimonials.map((student, index) => (
                        <div
                            key={index}
                            className={`max-w-[390px] flex items-center gap-2.5 bg-white shadow-md rounded-xl md:p-5 p-3 border border-transparent hover:border-blue-400 hover:shadow-blue-200 transition `}
                        >
                            <div className="w-[110px] relative h-[110px] ">
                                <Image
                                    src={student.image}
                                    alt={student.name}
                                    fill

                                    className="inset-0 w-full h-full object-cover rounded-[20px]"
                                />
                            </div>
                            <div className="max-w-[240px]">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-semibold text-[18px]">{student.name}</h3>
                                    <div className="flex items-center gap-1 text-sm text-gray-500">
                                        <IconStar className="text-red-500 mr-1" size={16} />
                                        {student.rating.toFixed(1)}
                                        <FcGoogle size={16} />
                                    </div>
                                </div>
                                <p className="text-gray-600 text-[12px] mt-2">{student.review}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}
