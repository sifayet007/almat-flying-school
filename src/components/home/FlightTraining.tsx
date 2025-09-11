import assets from '@/assets';
import Image from 'next/image';
import React from 'react';
import FlightTrainingCard from '../cards/FlightTrainingCard';
import planes from '@/constants/flightTraining.constants';

const FlightTraining = () => {
    return (
        <div className='main-container  mt-[clamp(24px,5vw,76px)] flex lg:flex-row flex-col justify-between relative items-center bg-white lg:px-[50px] rounded-[20px]'>
            <div className='w-full'>
                <div className='md:max-w-[453px] space-y-5 lg:mt-0 mt-10'>
                    <button>Our Aircraft</button>
                    <h1 className='text-[clamp(24px,4vw,40px)] font-bold'>Perfectly <br /> <span className='text-brand-primary'>Maintained</span> for <br />
                        Your Flight Training</h1>
                    <p>Experience the thrill of flight in our modern, well-maintained training aircraft. Each plane is equipped with the latest safety features, regularly serviced by certified technicians, and designed to provide comfort, performance, and reliability for every flight lesson.</p>
                    <div className=''>
                        <Image src={assets.redLine} alt='' />
                    </div>
                </div>

            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 w-full lg:h-[760px] lg:mt-0 mt-[clamp(24px,4vw,60px)] lg:overflow-y-scroll scrollbar-y-remove'>
                {
                    planes.map((plan, index) => (
                        <FlightTrainingCard plan={plan} key={index} />
                    ))
                }

            </div>
        </div>
    );
};

export default FlightTraining;