import Image from 'next/image';
import React from 'react';
import Button from '../buttons/Button';
import { IconShoppingBag } from '@tabler/icons-react';
import { ITrialLessonCardProps } from '@/interfaces/trialLesson.interfaces';



const TrialLessonCard = ({ data }: { data: ITrialLessonCardProps }) => {
    return (
        <div className='bg-[#FAFAFA] p-[10] border-2 border-black/10 rounded-[20px] group'>
            <div className='w-full aspect-[380/260] overflow-hidden rounded-[20px]'>
                <Image src={data?.image} width={380} height={260} alt={data.title} className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out rounded-[20px]' />
            </div>
            <div className='px-[10px] pb-[10px] mt-4'>
                <h1 className='text-black/80'>{data?.title}</h1>
                <div className='flex justify-between mt-[6px]'>
                    <span className='text-brand-primary text-[20px] font-medium'>{data?.price}</span>
                    <span className='text-black/50 font-medium line-through'>{data?.oldPrice}</span>

                </div>
                <div className='flex justify-between gap-3 mt-5'>
                    <Button className='py-[clamp(4px,1vw,8px)] hover:bg-brand-primary duration-300 transition-all ease-in-out hover:text-white md:text-base text-sm border w-full rounded-full border-black/10' buttonText='Buy Now' />
                    <Button className='py-[clamp(4px,1vw,8px)] hover:bg-brand-primary duration-300 transition-all ease-in-out hover:text-white md:text-base text-sm border w-full rounded-full border-black/10' buttonText='Add to Basket' icon={<IconShoppingBag />} iconPosition='left' />


                </div>
            </div>
        </div>
    );
};

export default TrialLessonCard;