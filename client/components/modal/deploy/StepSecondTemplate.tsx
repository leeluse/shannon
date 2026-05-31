'use client'
import { useDeployStore } from '@/store/useDeployStore';
import React from 'react'

export function StepSecondTemplate() {
    return (
        <div className='grid grid-cols-2 size-full'>
            <DefaultInfoSection />
        </div>
    )
}


export function DefaultInfoSection() {
    const { card, setCard } = useDeployStore();
    const { name, descript } = card;

    const DEFAULT_INFO = [
        { title: "프로젝트 개요", key: "name", value: name },
        { title: "상세 설명", key: "descript", value: descript }
    ]

    return (
        <div>
            <div className=''>
                {DEFAULT_INFO.map(info => {
                    return (
                        <div key={info.title} className='flex flex-col gap-1 py-2'>
                            <span className='text-xs text-c-modal-text'>{info.title}</span>
                            <input
                                readOnly
                                value={info.value}
                                className='bg-amber-50/5 rounded-sm focus:outline-none py-2 px-3 text-sm text-c-modal-sub/70' type="text" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

