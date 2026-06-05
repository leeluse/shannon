'use client'
import { TEMPLATES } from '@/constants/step-template';
import { useDeployStore } from '@/store/useDeployStore';
import { ITemplateCard } from '@/types/modal/card';
import React from 'react'

export function StepSecondTemplate() {
    const { card, setCard } = useDeployStore();

    function OnChangeTextarea(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setCard({ [e.target.name]: e.target.value })
    }

    return (
        <div className='flex flex-col gap-1 py-5'>
            <textarea
                name='detailTemplates'
                value={card.detailTemplates}
                onChange={(e) => OnChangeTextarea(e)}
                placeholder={TEMPLATES[card.id - 1].placeholder}
                className='bg-white/5 border border-white/15 rounded-sm 
                focus:outline-none py-3 scrollbar-none resize-none px-3 text-sm text-c-modal-sub/70' rows={5} />
            <ButtonList list={TEMPLATES[card.id - 1].detailTemplates} />
        </div>
    )
}



export function ButtonList({ list }: { list: ITemplateCard['detailTemplates'] }) {
    const { setCard } = useDeployStore();
    return (
        (
            <div className='flex flex-wrap gap-2 py-3'>
                {list?.map(({ fill_text, label }) => (
                    <span
                        onClick={() => setCard({ detailTemplates: fill_text })}
                        key={label}
                        className='bg-white/5 border border-white/15 text-white text-[14px] px-5 py-2 rounded-full cursor-pointer'>{label}</span>
                ))}
            </div>
        )
    )
}