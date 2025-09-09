import React from 'react';
import TrialLessonCard from '../cards/TrialLessonCard';
import trialLessonData from '@/constants/trialLesson.constant';

const TrialLesson = () => {
    return (
        <div className='bg-white main-container mt-[42px] lg:px-[30px] rounded-2xl py-[50px]'>
            <div className='flex md:flex-row flex-col justify-between md:space-y-0 space-y-5'>
                <div>
                    <span className='bg-gradient-to-b p-5 via-white from-yellow-400'>
                        Trial Lesson
                    </span>
                    <h1 className='text-[clamp(24px,4vw,40px)] font-bold'>Trial Flying
                        <span className='text-brand-primary '> Lessons</span>
                    </h1>
                </div>
                <p className='max-w-[500px] md:text-[18px] text-base'>Based at Coventry and Sywell Aerodrome, Northamptonshire, we deliver commercial-level professionalism in a friendly, club environment. Wether you want to train, rent aircraft or hour build, we can help.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[clamp(24px,4vw,50px)]'>
                {
                    trialLessonData.map((data: any) => (
                        <TrialLessonCard key={data.id} data={data} />
                    ))

                }
            </div>

        </div>
    );
};

export default TrialLesson;