import React from 'react'
import { IButton } from '@/types/button'

export default function StepButton({ label, onClick }: IButton) {
    return (
        <button
            className='py-2 px-5 border! text-sm
            border-c-gray rounded-md text-c-gray select-none'
            onClick={onClick}>
            {label}
        </button>

    )
}
