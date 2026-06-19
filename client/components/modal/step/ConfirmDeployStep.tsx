import React from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner';
import DeployButton from '@/components/common/btn/DeployButton';
import { useDeployStore } from '@/store/useDeployStore';
import { TEMPLATES, TEMPLATES_FOR, TEMPLATES_STYLE } from '@/constants/step-template';
import { ICard } from '@/types/modal/card';

export function ConfirmDeployStep() {
    const { card, resetCard } = useDeployStore();
    const router = useRouter();

    const RESULT_TITLE = getResultSummary(card);

    const DeployHandler = () => {
        toast.success('배포되었습니다');
        resetCard();
        router.back();
    }

    return (
        <div className='size-full flex flex-col px-10 items-center justify-center gap-8'>
            <div className='grid gap-4 grid-cols-2 w-full'>
                {RESULT_TITLE.map(({ title, value }) => (
                    <ResultCardTemplate key={title} title={title} value={value} />
                ))}
            </div>
            <DeployButton type={"submit"} label='배포하기' onClick={DeployHandler} />
        </div>
    )
}

export function getResultSummary(card: ICard) {
    const RESULT_TITLE = [
        { title: '유형', value: TEMPLATES[card.templateId - 1]?.name },
        { title: '설명', value: card?.details },
        { title: '대상', value: TEMPLATES_FOR[card.templateId - 1]?.name },
        { title: '분위기', value: formatStyle({ styleId: card.styleId }) }
    ];

    return RESULT_TITLE
}

export function ResultCardTemplate({ title, value }: {
    title: string,
    value: string
}) {
    return (
        <div className='h-full p-3 rounded-md flex justify-between flex-col gap-3 bg-c-lav/5 border border-white/20'>
            <span className='text-c-modal-text'>{title}</span>
            <span className='whitespace-pre-line line-clamp-2 text-sm '>{value}</span>
        </div>
    )
}

export function formatStyle({ styleId }: {
    styleId: number[]
}) {
    return styleId.map((id) => TEMPLATES_STYLE[id - 1].name).join(', ');
}
