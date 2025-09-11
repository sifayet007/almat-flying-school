import Image from 'next/image';
import React from 'react';
import Button from '../buttoms/Button';
import { IconShoppingBag } from '@tabler/icons-react';
import { ITrialLessonCardProps } from '@/interfaces/trialLesson.interfaces';



const TrialLessonCard = ({ data }: { data: ITrialLessonCardProps }) => {
    return (
        <div className='bg-[#FAFAFA] p-[10] border-2 border-black/10 rounded-[20px]'>
            <div className='w-full aspect-[380/260]'>
                <Image src={data?.image} width={380} height={260} alt={data.title} className='w-full h-full object-cover rounded-[20px]' />
            </div>
            <div className='px-[10px] pb-[10px] mt-4'>
                <h1 className='text-black/80'>{data?.title}</h1>
                <div className='flex justify-between mt-[6px]'>
                    <span className='text-brand-primary text-[20px] font-medium'>{data?.price}</span>
                    <span className='text-black/50 font-medium line-through'>{data?.oldPrice}</span>

                </div>
                <div className='flex justify-between gap-3 mt-5'>
                    <Button className='py-[clamp(4px,1vw,8px)] md:text-base text-sm border w-full rounded-full border-black/10' children='Buy Now' />
                    <Button className='py-[8px] md:text-base text-sm lg:text-[clamp(12px,0.5vw,16px)] rounded-full w-full bg-brand-primary text-white' children='Add to Basket' icon={<IconShoppingBag />} iconPosition='left' />
                </div>
            </div>
        </div>
    );
};

export default TrialLessonCard;