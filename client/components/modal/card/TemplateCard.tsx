import StepButton from '@/components/common/btn/StepButton'
import { useDeployStore } from '@/store/useDeployStore';
import { ITemplateCard } from '@/types/modal/card'
import React from 'react'


export default function TemplateCard({ id, name, keyword, description }: ITemplateCard) {
    const { card, setCard } = useDeployStore();
    const style = {
        active: 'ring ring-c-primary !bg-white/5',
        deactive: 'ring ring-transparent'
    }
    return (
        <div
            role='button'
            onClick={() => {
                console.log(id)
                setCard(id)
                return
            }}
            className={`h-40 glass flex flex-col cursor-pointer 
            ${card == id ? style['active'] : style['deactive']}`}>
            <h1 className='font-bold text-2xl py-2 '>{name}</h1>
            <div className='flex pb-5 text-xs'>
                {keyword.map((item, idx) => (
                    <div key={idx}>
                        <span
                            key={item} className='text-zinc-400'>{item}
                        </span>
                        <span className='px-1'>
                            {idx !== keyword.length - 1 ? '/' : ''}
                        </span>
                    </div>
                ))}
            </div>
            <p className='font-medium text-xs text-c-secondary-sub'>{description}</p>
        </div>
    )
}
