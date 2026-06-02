'use client'
import { StepButton, StepTemplate } from '@/components';
import { useDeployStore } from '@/store/useDeployStore'
import { useRouter } from 'next/navigation';
import React from 'react'
import { X } from 'lucide-react';
import { STEP } from '@/constants/step-template';

export default function NewProjectModal() {

    return (
        <div className='fixed inset-0 z-50 bg-gray-900/50 flex
            items-center justify-center'>
            <section className='w-200 h-120 rounded-2xl glass-modal flex flex-col px-5'>
                <StepHeader steps={STEP} />
                <StepTemplate />
                <StepFooter steps={STEP} />
            </section>
        </div>
    )
}


function StepHeader({ steps }: { steps: readonly number[] }) {
    const router = useRouter();
    const { step } = useDeployStore();

    return (
        <header className='min-h-15 border-b border-b-c-primary w-full flex items-center justify-between'>
            <div className='flex gap-3 items-center '>
                <h1 className='text-xl font-bold text-c-secondary'>Create AI Brief</h1>
                <div className='flex gap-2'>
                    {steps.map((item) => (
                        <div key={item} className={`rounded-full size-2 ${item === step.number ? 'bg-c-modal-sub' : 'bg-c-secondary-sub/50'}`
                        }></div>
                    ))}
                </div>
                <div>
                    <span className='text-sm'>{step.number}</span>
                    <span className='text-sm text-c-secondary-sub/50'> / {steps.length} </span >
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


function StepFooter({ steps }: { steps: readonly number[] }) {
    const { step, nextStep, prevStep, card } = useDeployStore();
    const router = useRouter();
    // 유효성 검사
    const validStep = (step: number) => {
        if (step == 1 && card.id == 0) {
            return alert("카드를 선택하세요!");
        }
        if (step !== steps.length) {
            nextStep();
        } else {
            alert("배포 완료");
            router.back();
        }
    }

    return (
        <footer className='min-h-15 pb-2 w-full flex justify-between items-center'>
            {step.number !== 1 ? (
                <StepButton title='이전' onClick={() => { prevStep(); }} />
            ) : (<div />)}
            {step.number !== steps.length ? (
                <StepButton title='다음' onClick={() => { validStep(step.number); }} />
            ) : (
                <StepButton title='배포하기' onClick={() => { validStep(step.number); }} />
            )}
        </footer>
    )
}
