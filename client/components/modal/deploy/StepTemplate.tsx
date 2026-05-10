'use client'
import React from 'react'
import { StepFirstTemplate, StepSecondTemplate, StepThirdTemplate } from '@/components';
import { useDeployStore } from '@/store/useDeployStore'

export default function StepTemplate() {
    const { step } = useDeployStore();
    return (
        <div className='pt-3 h-full'>
            {step.number === 1 && (<StepFirstTemplate />)}
            {step.number === 2 && (<StepSecondTemplate />)}
            {step.number === 3 && (<StepThirdTemplate />)}
        </div>
    )
}
