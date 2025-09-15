import React from 'react';
import ServiceCard from '../cards/ServiceCard';
import { servicesData } from '@/constants/serviceData.constant';
import { ServiceDataType } from '@/interfaces/serviceDatatype.interface';
import { IconPointFilled } from '@tabler/icons-react';
import InnerShadow from '../ui/InnerShadow';

const Services = () => {
    return (
        <div className='main-container flex flex-col justify-center items-center mt-[clamp(24px,5vw,78px)]'>
            <div className='text-center flex flex-col items-center space-y-4'>
                <InnerShadow icon={<IconPointFilled className='text-blue-600' />} text='Free Learn' className="!md:py-[11px] !py-[8px]" shadowColor='#5EA4FFB2' />

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
        </div>
    );
};

export default Services;