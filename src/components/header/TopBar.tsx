import assets from '@/assets';
import { IconAddressBook, IconSearch, IconShoppingBag } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TopBar = () => {
    return (
        <div className='pt-5 pb-[15px] border-b border-black/10 w-full '>
            <nav className=' flex justify-between main-container'>
                <Link href={'/'} className='md:h-[33px] md:w-[258px] h-[30px] w-[180px] '>
                    <Image src={assets.almatMainLogo.src} alt='' width={258} height={33} />
                </Link>

                <div className='flex gap-x-[10px]'>
                    <button className='w-[30px] h-[30px] border-2 border-white bg-white/50 rounded-full flex justify-center items-center'><IconSearch size={18} /></button>
                    <button className='w-[30px] h-[30px] border-2 border-white bg-white/50 rounded-full flex justify-center items-center'><IconShoppingBag size={18} /></button>
                    <button className='w-[30px] h-[30px] border-2 border-white bg-white/50 rounded-full flex justify-center items-center'><IconAddressBook size={18} className='text-brand-primary' /></button>
                </div>
            </nav>
        </div>
    );
};

export default TopBar;