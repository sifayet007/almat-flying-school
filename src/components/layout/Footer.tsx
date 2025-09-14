"use client"
import assets from '@/assets';
import React from 'react';
import Button from '../buttoms/Button';
import { IconArrowRight, IconMail } from '@tabler/icons-react';
import { quickLinks } from '@/constants/quickLink.constants';
import FooterMenu from '../shared/FooterMenu';
import { quickLinks2 } from '@/constants/quickLink2.constants';
import { contact } from '@/constants/contact.constant';
import Image from 'next/image';
import { socialLinks } from '@/constants/socialLinks.constant';
import Link from 'next/link';
import { ISocialLink } from '@/interfaces/socialLinktype.interface';

const Footer = () => {

    return (
        <section className='' style={{
            backgroundImage: `url(${assets.footerBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <div className='main-container py-[60px] mt-[clamp(40px,8vw,86px)]'>
                <div className='grid lg:grid-cols-4  grid-cols-2  md:gap-10 gap-5'>
                    <div className='space-y-[clamp(20px,2.5vw,30px)] w-full'>
                        <h1 className='uppercase flex flex-col text-white w-fit'>
                            <span className='text-[clamp(38px,5vw,78px)] font-bold leading-[clamp(35px,8vw,56px)]'> Almat</span>
                            <span className='text-end text-[clamp(8px,2.5vw,16px)]'> Flying Academy</span>
                        </h1>
                        <p className='text-white text-[clamp(12px,2.5vw,16px)]'>We imagine and build experiences, products and businesses that disrupt the status quo, win hearts and realize the future. Explore how we work</p>
                        <form className='bg-white/30 flex w-full justify-between items-center p-1  border-2 border-white rounded-[20px]'>
                            <div className='w-full flex items-center gap-x-[clamp(4px,2.5vw,8px)] text-white'>
                                <IconMail stroke={1} size={30} />
                                <input className='w-full outline-none text-white py-[clamp(4px,1vw,14px)] placeholder:md:text-base placeholder:text-xs' placeholder='Enter your email' type="email" name="" id="" />
                            </div>
                            <Button textStyle='md:inline hidden' className='bg-white text-brand-primary p-2  md:py-[clamp(4px,1vw,14px)] text-[clamp(12px,2.5vw,16px)]  md:rounded-[20px] rounded-full md:px-[clamp(8px,2.5vw,12px)]' buttonText='Subscribe' icon={<IconArrowRight className='size-[clamp(14px,2.5vw,16px)]' />} iconPosition='right'></Button>
                        </form>
                    </div>
                    <FooterMenu data={quickLinks} sectionKey='Quick Link' />
                    <FooterMenu data={quickLinks2} sectionKey='Quick Link' />
                    <FooterMenu data={contact} sectionKey='Quick Link' />
                </div>
                <div>
                    <div className="max-w-[1320px] h-[180px] relative mt-5">
                        <Image
                            src={assets.footerimg}
                            alt="footer image"
                            fill
                            className="inset-0 object-cover rounded-[20px]"
                        />
                    </div>
                    <div className='flex justify-between items-center md:flex-row flex-col md:mt-10 mt-5'>
                        <div className='md:order-1 order-2 md:mt-0 mt-5'>
                            <p className='text-white text-sm md:text-base'>© Copyright 2025 your brand- All Rights Reserved</p>
                        </div>

                        <div className="flex gap-5 order-1">
                            {socialLinks.map((social: ISocialLink, index) => (
                                <Link
                                    key={index}
                                    href={social.link}
                                    target='_blank'
                                    className="text-white group relative flex flex-col items-center"
                                >

                                    <span
                                        className="absolute -top-6 text-sm opacity-0 translate-y-2  group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300"
                                    >
                                        {social.title}
                                    </span>


                                    <span
                                        className="relative w-[32px] h-[32px] border-2 border-white flex justify-center items-center rounded-full overflow-hidden"
                                    >

                                        <span
                                            className="absolute inset-0 bg-brand-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                                        />

                                        <social.icon
                                            size={16}
                                            className="relative z-10 text-white"
                                        />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;