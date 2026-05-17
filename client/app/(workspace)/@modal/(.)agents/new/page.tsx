'use client'
import { StepButton, StepTemplate } from '@/components';
import { useDeployStore } from '@/store/useDeployStore'
import { useRouter } from 'next/navigation';
import React from 'react'
import { X } from 'lucide-react';

export default function NewAgentModal() {
    return (
        <div className='fixed inset-0 z-50 bg-c-gray-900/50 flex
            items-center justify-center'>
            <section className='w-200 h-120 rounded-2xl glass-modal flex flex-col px-5'>
                <StepHeader />
                <StepTemplate />
                <StepFooter />
            </section>
        </div>
    )
}


function StepHeader() {
    const router = useRouter();
    const { step } = useDeployStore();
    const steps = [1, 2, 3];
    return (
        <header className='h-20 border-b-2 border-b-primary w-full flex items-center justify-between'>
            <div className='flex gap-3 items-center '>
                <h1 className='text-xl font-bold text-c-modal-sub'>Deploy Agent</h1>
                <div className='flex gap-2'>
                    {steps.map((item) => (
                        <div key={item} className={`rounded-full size-2 ${item === step.number ? 'bg-c-modal-sub' : 'bg-c-gray-600'}`
                        }></div>
                    ))}
                </div>
                <div>
                    <span className='text-sm'>{step.number}</span>
                    <span className='text-sm text-c-gray-600'> / 3</span >
                </div>
            </div>
            <button
                onClick={() => router.back()}
                className='text-c-modal-sub hover:text-white transition-colors duration-200'
            >
                <X size={24} strokeWidth={2.5} />
            </button>
        </header>
    )
}


function StepFooter() {
    const { step, nextStep, prevStep } = useDeployStore();
    return (
        <footer className='h-20 pb-2 w-full flex justify-between items-center'>
            {step.number !== 1 ? (
                <StepButton title='이전' onClick={() => prevStep()} />
            ) : (<div />)}
            {step.number !== 3 ? (
                <StepButton title='다음' onClick={() => nextStep()} />
            ) : (
                <StepButton title='배포하기' onClick={() => alert('배포되었습니다!')} />
            )}
        </footer>
    )
}