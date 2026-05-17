'use client'
import React from 'react'
import { useDeployStore } from '@/store/useDeployStore'
import { STEP_INFO } from '@/constants/step-template';

export default function StepTemplate() {
    const { step } = useDeployStore();
    const CurrentComponent = STEP_INFO[step.number - 1].Component;

    return (
        <>
            <h3 className='py-3 text-c-secondary-sub text-[14px]'>{STEP_INFO[step.number - 1].title}</h3>
            <section className='size-full relative'>
                <div className='absolute top-0 size-full overflow-y-scroll '>
                    <CurrentComponent />
                </div>
            </section>
        </>
    )
}
