import Image, { StaticImageData } from 'next/image';
import React from 'react';
interface IPilot {
    image: StaticImageData,
    name: string,
    positon: string
}

const PilotCard = ({ data }: { data: IPilot }) => {
    return (
        <div className='w-[300px] group'>
            <div className='w-[300px] h-[300px] drop-shadow-lg drop-shadow-[#006DFB99] overflow-hidden '>
                <Image src={data.image} alt='' className='w-full h-full object-center group-hover:scale-110 transition-all duration-300 ease-in-out ' />
            </div>
            <div className='text-center mt-2.5'>
                <h2 className='capitalize'>{data.name}</h2>
                <p>{data.positon}</p>
            </div>
        </div>
    );
};

export default PilotCard;