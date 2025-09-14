import React from 'react';
import Button from '../buttoms/Button';
import { IconSelect } from '@tabler/icons-react';
import Image, { StaticImageData } from 'next/image';
interface IPlan {
    image: StaticImageData,
    title: string,
    description: string
}

const FlightTrainingCard = ({ plan, }: { plan: IPlan, }) => {

    return (
        <div className={`bg-white drop-shadow-md `}>
            <div className='w-full aspect-[300/200]'>
                <Image src={plan.image} alt='Piper PA28 G-BAHF' className='w-full h-full object-cover' />
            </div>
            <div className='p-4'>
                <h1 className='font-bold uppercase'>{plan.title}</h1>
                <p className='text-[12px]'>{plan.description}</p>
                <Button children='Read More' icon={<IconSelect />} iconPosition='right' className='text-brand-primary text-[12px]' />
            </div>

        </div>
    );
};

export default FlightTrainingCard;