'use client'
import ModalBadge from '@/components/common/btn/badge/ModalBadge';
import { TEMPLATE_INFO } from '@/constants/step-template';
import { useDeployStore } from '@/store/useDeployStore';
import React from 'react'

export function StepSecondTemplate() {
    const { card } = useDeployStore();

    return (
        <div className='flex flex-col gap-1 py-5'>
            <input
                placeholder={TEMPLATE_INFO[card.id - 1].what}
                className='bg-white/5 border border-white/15 rounded-sm focus:outline-none py-3 px-3 text-sm text-c-modal-sub/70' type="text" />
            <BadgeList />
        </div>
    )
}


export function BadgeList() {
    const textList = ["취업용 포트폴리오 사이트", "사내 관리자 대시보드"];
    return (
        (
            <div className='flex flex-wrap gap-4 p-3'>
                {textList?.map(text => (
                    <ModalBadge key={text} text={text} />
                ))}
            </div>
        )
    )
}