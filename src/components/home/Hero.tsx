import { IconArrowRight, IconPlaneArrival, IconStarFilled } from '@tabler/icons-react';
import React from 'react';
import Image from 'next/image';
import assets from '@/assets';
import SlideButton from '../buttoms/SlideButton';
const review = [
    { image: assets.reviewImg1 },
    { image: assets.reviewImg2 },
    { image: assets.reviewImg3 }
]

const Hero = () => {
    return (
        <div className='bg-white overflow-hidden rounded-b-[clamp(20px,4vw,60px)]'>
            {/* Decorative Ellipses Wrapper */}
            <div className='md:w-[230px] md:h-[335px] w-[100px] h-[150px] bg-[#EA00FF] rounded-full md:opacity-50 opacity-100 blur-[150px] absolute top-0 right-0 '></div>

            <div className='md:w-[230px] md:h-[335px] w-[100px] h-[150px] bg-[#6155F5] rounded-full md:opacity-50 opacity-100 blur-[150px] absolute top-0 left-0 '></div>

            <div className='main-container relative  pt-[clamp(80px,10vw,144px)]'>

                <div className=' flex flex-col justify-center items-center '>
                    <div className='absolute inset-0 pointer-events-none'>

            </div>

                    {/* Hero Content */}
                    <h1 className='radio-canada-big text-center text-[clamp(24px,5vw,50px)] font-bold max-w-[800px]'>
                        <span className='text-brand-primary italic'>Flying</span>
                        <span className='text-black/80'> Academy </span>
                        <span className='inline-flex md:w-[50px] md:h-[50px] w-[25px] h-[25px] rotate-12  rounded-lg bg-gradient-to-tl from-[#4C0001] to-[#FF1B42] items-center justify-center'>
                            <IconPlaneArrival className='size-[clamp(18px,2.5vw,30px)] text-white -rotate-12' />
                </span>
                <span className='text-black/80'> Turn Your Dreams into </span>
                <span className='text-brand-primary italic'>Reality</span>
            </h1>

                    <p className='max-w-[550px] md:text-base text-sm text-center text-black/80 mt-[5px]'>
                        Based at Coventry and Sywell Aerodrome, Northamptonshire, we deliver
                        commercial-level professionalism <span className='font-bold'>Read more</span>
                    </p>

                    <SlideButton
                        className='bg-brand-primary text-white'
                        buttonText='Contact Us'
                        shadowColor='rgba(255,99,132,0.7)'
                        icon={<IconArrowRight className='size-[clamp(16px,2.5vw,20px)]' />}
                    />
                </div>
                <div className='flex justify-between items-center'>
                    <div className='max-w-[194px] space-y-2.5 lg:inline hidden'>
                        <h3 className='text-[24px] text-black/80 font-medium'>Unlock the skies from novice to Navigator</h3>
                        <div className='w-[180px] h-[268px]  rounded-full p-3 border border-black/20 bg-white'>
                            <Image src={assets.ppl} alt='ppl' width={158} height={248} className=' w-full h-full object-cover' />

                        </div>
                    </div>
                    <div className='flex justify-center relative'>
                        <Image src={assets.airplane} alt='' width={1056} height={491} />

                        <div className="absolute  md:w-[80px] w-[30px] md:h-[500px] h-[150px] bg-white md:blur-md blur-sm right-0 z-10"></div>
                        <div className="absolute  md:w-[80px] w-[30px] md:h-[500px] h-[150px] bg-white md:blur-md blur-sm left-0 z-10"></div>

                    </div>
                    <div className=' bg-gradient-to-bl hidden from-white to-[#FF1414]/20 border-2 border-black/10 rounded-[20px] space-y-2.5 lg:flex flex-col justify-center items-center p-5'>
                        <span className='text-[18px]'>4.8/5</span>
                        <div className='flex'>
                            <span><IconStarFilled fill='#f6ad55' /></span>
                            <span><IconStarFilled fill='#f6ad55' /></span>
                            <span><IconStarFilled fill='#f6ad55' /></span>
                            <span><IconStarFilled fill='#f6ad55' /></span>
                            <span><IconStarFilled fill='#f6ad55' /></span>
                        </div>
                        <div className='flex'>
                            {
                                review.map((item, index) => <div key={index} className='w-[50px] h-[50px]'>
                                    <Image src={item.image} alt='' className='w-full h-full object-cover' />
                                </div>)
                            }

                        </div>
                        <div className='text-center'>
                            <h6 className='text-[18px] font-bold'>1500+</h6>
                            <p>Happy Student</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
