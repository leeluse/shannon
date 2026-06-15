'use client'
import { CloseBtn, ProgressDots, ProjectForm, StepButton } from '@/components';
import { useDeployStore } from '@/store/useDeployStore'
import { useRouter } from 'next/navigation';
import React from 'react'
import { STEP } from '@/constants/step-template';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { ICard } from '@/types/modal/card';
import { totalProjectSchema } from '@/lib/schemas/project';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

export default function NewProjectModal() {
    const { card } = useDeployStore();
    const methods = useForm<ICard>({
        resolver: zodResolver(totalProjectSchema),
        defaultValues: {
            templateId: card.templateId,
            details: card.details,
            targetId: card.targetId,
            styleId: card.styleId,
        }
    });

    const onSubmit = (data: ICard) => {
        console.log("모든 단계 통과! 최종 데이터:", data);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className='fixed inset-0 z-50 bg-gray-900/50 flex
            items-center justify-center'>
                <section className='w-210 h-150 rounded-2xl glass-modal flex flex-col'>
                    <StepHeader steps={STEP} />
                    <ProjectForm />
                    <StepFooter steps={STEP} />
                </section>
            </form>
        </FormProvider>
    )
}


function StepHeader({ steps }: { steps: readonly number[] }) {
    const router = useRouter();
    const { step, resetCard } = useDeployStore();

    const CloseHandler = () => {
        resetCard();
        router.back();
    }

    return (
        <header className='p-4 flex items-center justify-between border-b border-b-white/10'>
            <h1 className='text-white'>프로젝트 생성</h1>
            <div className='flex items-center gap-4'>
                {/* step bar */}
                <ProgressDots steps={steps} currStep={step.number} />
                {/* close btn */}
                <CloseBtn onClick={CloseHandler} />
            </div>
        </header>
    )
}


function StepFooter({ steps }: { steps: readonly number[] }) {
    const { step, nextStep, prevStep, card } = useDeployStore();
    const { trigger, getFieldState } = useFormContext<ICard>();

    const validStep = async (currStep: number) => {
        let isValid = false;
        let fieldName: keyof ICard | null = null;

        // 현재 단계에 맞춰서 딱 그 칸만 검사해요!
        if (currStep === 1) {
            fieldName = 'templateId';
        } else if (currStep === 2) {
            fieldName = 'details';
        } else if (currStep === 3) {
            fieldName = 'targetId';
        } else if (currStep === 4) {
            fieldName = 'styleId';
        }

        if (fieldName) {
            // 1. 해당 입력칸 채점하기
            isValid = await trigger(fieldName);

            // 2. 만약 탈락(false)했다면?
            if (!isValid) {
                // 폼 매니저에게 그 칸의 에러 정보(메시지)를 가져와 달라고 해요.
                const { error } = getFieldState(fieldName);
                if (error?.message) {
                    toast.error(error.message, { position: "top-center" });
                }
            }
        }

        // 통과 시 다음 스텝 진행 가능
        if (isValid) {
            nextStep();
        }
    }


    return (
        <footer className='p-4 w-full flex justify-between items-center'>
            {step.number !== 1 ? (
                <StepButton
                    type={'button'}
                    label='이전'
                    onClick={() => { prevStep(); }} />
            ) : (<div />)}
            {step.number !== steps.length &&
                <StepButton
                    type={'button'}
                    label='다음'
                    onClick={() => { validStep(step.number); }} />
            }
        </footer>
    )
}

