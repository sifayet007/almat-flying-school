import { ServiceDataType } from '@/interfaces/serviceDatatype.interface';
import { IconArrowUpRight } from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';
import InnerShadow from '../ui/InnerShadow';
type props = {
    data: ServiceDataType
}

const ServiceCard = ({ data }: props) => {
    return (
        <div className=' space-y-[30px] p-[10px] bg-white rounded-[20px] group'>
            <div className='w-full aspect-[406/386] overflow-hidden rounded-[20px]'
            >
                <Image src={data.image} alt={data.title} width={406} height={386} className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out rounded-[20px]' />
            </div>
            <div className='flex justify-between gap-x-10'>
                <div>
                    <h1 className='group-hover:font-bold transition-all duration-300 ease-in-out'>{data.title}</h1>
                    <p className=''>{data.description}</p>
                </div>
                <div>
                    <InnerShadow

                        className="!py-3 !px-3 rounded-full group-hover:shadow-md hover:scale-105 transition-all duration-300 group-hover:rotate-45 ease-in-out"
                        icon={<IconArrowUpRight size={20} className='' />}
                    />


                </div>

            </div>

        </div>
    );
};

export default ServiceCard;