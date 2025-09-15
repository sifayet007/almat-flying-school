"use client";

import Image from "next/image";
import { IconStar, IconEye, IconPencil, IconPointFilled } from "@tabler/icons-react";
import { assets_student } from "@/assets/students"; // ✅ fixed folder name
import Button from "../buttoms/Button";
import { FcGoogle } from "react-icons/fc";
import IneerShadow from "../ui/IneerShadow";

const testimonials = [{ name: "Arlene McCoy", rating: 5.0, review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor pariatur incididunt ut labore et dolore magna aliqua.", image: assets_student.student1, }, { name: "Jane Cooper", rating: 5.0, review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor pariatur incididunt ut labore et dolore magna aliqua.", image: assets_student.student2, }, { name: "Darrell Steward", rating: 5.0, review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor pariatur incididunt ut labore et dolore magna aliqua.", image: assets_student.student3, }, { name: "Darrell Steward", rating: 5.0, review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor pariatur incididunt ut labore et dolore magna aliqua.", image: assets_student.student4, }, { name: "Darrell Steward", rating: 5.0, review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor pariatur incididunt ut labore et dolore magna aliqua.", image: assets_student.student5, },];

export default function StudentTestimonial() {
    return (
        <section className="main-container py-16">
            <div className="flex flex-col lg:flex-row relative overflow-hidden justify-between md:gap-[30px] gap-5 lg:items-center bg-white rounded-2xl lg:px-[60px] p-5 lg:p-0">
                {/* blur effects */}
                <div className="absolute lg:block hidden w-[506px] h-[242px] bg-white blur-3xl top-0 -translate-y-1/2 right-0 z-10"></div>
                <div className="absolute lg:block hidden w-[506px] h-[242px] bg-white blur-3xl bottom-0 translate-y-1/2 right-0 z-10"></div>

                {/* Left Side */}
                <div className="space-y-5">
                    <IneerShadow icon={<IconPointFilled className='text-brand-primary' />} text='Trial Lesson' shadowColor='#C5123033' />


                    <h2 className="text-[clamp(24px,2.5vw,44px)] font-bold leading-snug">
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
                <div className="lg:rotate-0 rotate-90 w-[150px] lg:flex hidden h-[430px] md:px-0 px-5">
                    <Image
                        src={assets_student.plan}
                        alt="plane illustration"
                        height={430}
                        width={150}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Side */}
                <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-5">
                    {testimonials.map((student, index) => (
                        <div
                            key={index}
                            className="lg:max-w-[390px] flex items-center gap-2.5 bg-white shadow-md rounded-xl md:p-5 p-3 border border-transparent hover:border-blue-400 hover:shadow-blue-200 transition"
                        >
                            <div className="w-[110px] h-[110px] relative">
                                <Image
                                    src={student.image}
                                    alt={student.name}
                                    fill
                                    className="object-cover rounded-[20px]"
                                />
                            </div>
                            <div className="max-w-[240px]">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-semibold text-[18px]">{student.name}</h3>
                                    <div className="flex items-center gap-1 text-sm text-gray-500">
                                        <IconStar className="text-red-500 mr-1" size={16} />
                                        {student.rating}
                                        <FcGoogle size={16} />
                                    </div>
                                </div>
                                <p className="text-gray-600 text-[12px] mt-2">{student.review}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
