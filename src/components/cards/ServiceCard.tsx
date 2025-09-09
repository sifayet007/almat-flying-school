import { ServiceDataType } from '@/interfaces/serviceDatatype.interface';
import { IconTargetArrow } from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';
type props = {
    data: ServiceDataType
}

const ServiceCard = ({ data }: props) => {
    return (
        <div className=' space-y-[30px] p-[10px] bg-white rounded-[20px]'>
            <div className='w-full aspect-[406/386]'>
                <Image src={data.image} alt={data.title} width={406} height={386} className='w-full h-full object-cover' />
            </div>
            <div className='flex justify-between gap-x-10'>
                <div>
                    <h1 className='font-bold'>{data.title}</h1>
                    <p>{data.description}</p>
                </div>
                <div>
                    <span className='bg-gradient-to-b via-white w-[40px] h-10 rounded-full'>
                        <IconTargetArrow />
                    </span>
                </div>

            </div>

        </div>
    );
};

export default ServiceCard;