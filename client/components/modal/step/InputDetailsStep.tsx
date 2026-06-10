'use client'
import { TEMPLATES } from '@/constants/step-template';
import { useDeployStore } from '@/store/useDeployStore';
import { ICard, ITemplateCard } from '@/types/modal/card';
import React from 'react'
import { useFormContext } from 'react-hook-form';

export function InputDetailsStep() {
    const { card, setCard } = useDeployStore();
    const { setValue } = useFormContext<ICard>();

    function OnChangeTextarea(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setCard({ [e.target.name]: e.target.value });
        setValue('details', e.target.value);
    }

    return (
        <div className='flex flex-col gap-1 py-5'>
            <textarea
                name='details'
                value={card.details}
                onChange={(e) => OnChangeTextarea(e)}
                placeholder={TEMPLATES[card.templateId - 1].placeholder}
                className='bg-white/5 border border-white/15 rounded-sm 
                focus:outline-none py-3 scrollbar-none resize-none px-3 text-sm text-c-modal-sub/70' rows={5} />
            <ButtonList list={TEMPLATES[card.templateId - 1].templates} />
        </div>
    )
}



export function ButtonList({ list }: { list: ITemplateCard['templates'] }) {
    const { setCard } = useDeployStore();
    const { setValue } = useFormContext<ICard>();
    const onClick = (fillText: string) => {
        setCard({ details: fillText });
        setValue('details', fillText);
    };

    return (
        (
            <div className='flex flex-wrap gap-2 py-3'>
                {list?.map(({ fillText, label }) => (
                    <span
                        onClick={() => onClick(fillText)}
                        key={label}
                        className='bg-white/5 border border-white/15 text-white text-[14px] px-5 py-2 rounded-full cursor-pointer'>{label}</span>
                ))}
            </div>
        )
    )
}
