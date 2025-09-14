import { ServiceDataType } from '@/interfaces/serviceDatatype.interface';
import { IconArrowUpRight } from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';
import Button from '../buttoms/Button';
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
                    <Button

                        className="w-10 h-10 flex !gap-0 items-center justify-center rounded-full bg-[radial-gradient(circle,white_10%,#5EA4FFB2)] shadow-md hover:scale-105 transition"
                        icon={<IconArrowUpRight size={18} />}
                        iconPosition="left"
                    />


                </div>

            </div>

        </div>
    );
};

export default ServiceCard;