import statsData from '@/constants/stateData.constant';
import React from 'react';

const StateData = () => {
    return (
        <div className='main-container grid md:grid-cols-4 grid-cols-2 md:gap-[25px] gap-3 mt-[clamp(24px,4vw,60px)]'>
            {
                statsData.map((item, index) => (
                    <div key={index} className={`bg-white flex flex-col justify-center space-y-2.5 items-center w-full  rounded-[20px] py-[30px] transition-all duration-300 ${index % 2 ? 'hover:-rotate-[5deg]' : 'hover:rotate-[5deg]'}`}>
                        <h1 className='text-[clamp(16px,2.5vw,20px)] font-medium '>{item.label}</h1>
                        <h3 className='radio-canada-big text-[clamp(30px,2.5vw,50px)] leading-10 font-bold  bg-clip-text text-clip text-transparent bg-gradient-to-b from-[#006FFFB2] to-[#000000] from-40% '>{item.value}</h3>
                    </div>
                ))
            }
        </div>
    );
};

export default StateData;