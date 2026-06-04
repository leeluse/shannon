'use client'
import React from 'react'
import { useDeployStore } from '@/store/useDeployStore'
import { STEP_INFO } from '@/constants/step-template';

export default function StepTemplate() {
    const { step } = useDeployStore();
    const [currTitle, currDes, CurrentComponent] = [STEP_INFO[step.number - 1].title, STEP_INFO[step.number - 1].des, STEP_INFO[step.number - 1].Component];


    return (
        <section className='w-full h-full flex flex-col p-8 gap-4 justify-center text-c-gray'>
            {/* 헤더 */}
            <div className='flex flex-col gap-2'>
                <span className='text-[14px]'>STEP {step.number}</span>
                <h2 className='font-bold text-[30px] text-white'>{currTitle}</h2>
                <p className='text-[16px]'>{currDes}</p>
            </div>
            {/* 컨텐츠 */}
            <div className='size-full relative'>
                <div className='absolute top-0 size-full overflow-y-scroll scrollbar-hidden'>
                    <CurrentComponent />
                </div>
            </div>
        </section>
    )
}
