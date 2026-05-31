import { MODEL_LIST } from '@/mock/modal'
import React from 'react'
import ModelCard from '../card/ModelCard'

export function StepSecondTemplate() {
    return (
        <div className='grid grid-cols-2 size-full'>
            <TemplateCardDetail />
            <ModelSelector />
        </div>
    )
}


export function TemplateCardDetail() {
    return (
        <div>
            <h1 className='text-sm font-medium text-c-secondary-sub/50'>에이전트</h1>
            <div className=''>
                <div className='flex flex-col gap-1 py-2'>
                    <span className='text-xs'>이름</span>
                    <input className='bg-amber-50/5 rounded-sm focus:outline-none py-1 px-2' type="text" />
                </div>
                <div className='flex flex-col gap-1 py-2'>
                    <span className='text-xs'>에이전트 상세 설명</span>
                    <input className='bg-amber-50/5 rounded-sm focus:outline-none py-1 px-2' type="text" />
                </div>
            </div>
        </div>
    )
}


export function ModelSelector() {
    return (
        <div>
            <h1 className='text-sm font-medium text-c-secondary-sub/50'>모델</h1>
            {MODEL_LIST.map(({ id, name }) => (
                <div key={id}>
                    <ModelCard name={name} />
                </div>
            ))}
        </div>
    )
}