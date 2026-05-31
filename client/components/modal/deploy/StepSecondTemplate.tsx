'use client'
import { TEMPLATE_INFO } from '@/constants/step-template';
import { useDeployStore } from '@/store/useDeployStore';
import React from 'react'

export function StepSecondTemplate() {
    return (
        <div className='grid grid-cols-[4fr_6fr] gap-10 size-full px-5'>
            <DefaultInfoSection />
            <InputSection />
        </div>
    )
}


export function DefaultInfoSection() {
    const { card, setCard } = useDeployStore();
    const { name, descript } = card;

    const DEFAULT_INFO = [
        { title: "선택된 템플릿", key: "name", value: name },
        { title: "템플릿 설명", key: "descript", value: descript }
    ]

    return (
        <div >
            {DEFAULT_INFO.map(info => {
                return (
                    <div key={info.title} className='flex flex-col gap-1 py-2'>
                        <span className='text-xs text-c-modal-sub'>{info.title}</span>
                        <div>{info.value}</div>
                    </div>
                )
            })}
        </div>
    )
}

export function InputSection() {
    const { card, setCard } = useDeployStore();

    const DEFAULT_INFO = [
        { title: "무엇을 만들고 싶나요?", key: "what", ph: TEMPLATE_INFO[card.id - 1].what },
        { title: "누가 보는 결과물인가요?", key: "who", ph: TEMPLATE_INFO[card.id - 1].who },
        { title: "이 결과물의 목적은 무엇인가요?", key: "goal", ph: TEMPLATE_INFO[card.id - 1].goal },
        { title: "원하는 분위기나 스타일은 무엇인가요?", key: "style", ph: TEMPLATE_INFO[card.id - 1].style },
    ]

    return (
        <section className=''>
            {DEFAULT_INFO.map(({ title, key, ph }) => {
                return (
                    <div key={key} className='flex flex-col gap-1 py-2'>
                        <span className='text-xs text-c-modal-sub'>{title}</span>
                        <input
                            placeholder={ph}
                            className='bg-amber-50/5 rounded-sm focus:outline-none py-2 px-3 text-sm text-c-modal-sub/70' type="text" />
                    </div>
                )
            })}
        </section>
    )
}