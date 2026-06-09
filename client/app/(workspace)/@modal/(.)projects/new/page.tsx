'use client'
import { CloseBtn, ProgressDots, StepButton, StepTemplate } from '@/components';
import { useDeployStore } from '@/store/useDeployStore'
import { useRouter } from 'next/navigation';
import React from 'react'
import { STEP } from '@/constants/step-template';

export default function NewProjectModal() {

    return (
        <div className='fixed inset-0 z-50 bg-gray-900/50 flex
            items-center justify-center'>
            <section className='w-210 h-150 rounded-2xl glass-modal flex flex-col'>
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
        <header className='p-4 flex items-center justify-between border-b border-b-white/10'>
            <h1 className='text-white'>프로젝트 생성</h1>
            <div className='flex items-center gap-4'>
                {/* step bar */}
                <ProgressDots steps={steps} currStep={step.number} />
                {/* close btn */}
                <CloseBtn onClick={() => router.back()} />
            </div>
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
        <footer className='p-4 w-full flex justify-between items-center'>
            {step.number !== 1 ? (
                <StepButton title='이전' onClick={() => { prevStep(); }} />
            ) : (<div />)}
            {step.number !== steps.length &&
                <StepButton title='다음' onClick={() => { validStep(step.number); }} />
            }
        </footer>
    )
}

