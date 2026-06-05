import { IOptionCard } from '@/types/modal/card'
import React from 'react'

export default function OptionCard({
    id,
    name,
    descript
}: IOptionCard) {
    return (
        <div className='p-2 w-full rounded-lg bg-white/10 flex items-center gap-3 px-4'>
            <input type="checkbox" className='size-4 bg-c-logo text-c-logo rounded-md checked:bg-c-bg-hover' />
            <InlineBox name={name} descript={descript} />
        </div>
    )
}





function InlineBox({ name, descript }: { name: string, descript: string }) {
    return (
        <div className='flex gap-3'>
            <div className='text-white'>{`${name}  —  ${descript}`}</div>
        </div>
    )
}