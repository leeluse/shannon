import { IOptionCard } from '@/types/modal/card'
import React from 'react'

export default function OptionCard({
    id,
    name,
    descript
}: IOptionCard) {
    return (
        <div className='flex gap-3'>
            <div>{name}</div>
            <div>{descript}</div>
        </div>
    )
}
