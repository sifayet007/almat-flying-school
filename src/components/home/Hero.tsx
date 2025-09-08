import { IconPlaneArrival } from '@tabler/icons-react';
import React from 'react';
import Ellipse from '../ui/Ellipse';

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-10 relative'>

            {/* Ellipse */}
            <div className='w-[230px] h-[335px] bg-[#EA00FF] rounded-full opacity-80 blur-[120px] absolute top-0 right-0 translate-x-1/2'>
            </div>
            <div className='w-[230px] h-[335px] bg-[#6155F5] rounded-full opacity-80 blur-[120px] absolute top-0 left-0 -translate-x-1/2'>
            </div>

            <h1 className='text-center text-[60px] font-bold max-w-[790px] radio-canada-big italic'>
                <span className='text-brand-primary '>Flying</span>
                <span className='text-black/80'> Academy</span>
                <span className='w-[50px] h-[50px] rounded-2xl bg-gradient-to-tl to-[#FF1B42] from-[#4C0001] items-center '>
                    <IconPlaneArrival className='text-white' />
                </span>
                <span className='text-black/80'> Turn Your Dreams into </span>
                <span className='text-brand-primary italic'>Reality</span>
            </h1>
            <p className='max-w-[550] text-center quicksand text-black/80'>Based at Coventry and Sywell Aerodrome, Northamptonshire, we deliver
                commercial-level professionalism <span className='font-bold'>Read more</span></p>
        </div>
    );
};

export default Hero;