import React from 'react'
import { Wand2 } from 'lucide-react'
import { IButton } from '@/types/button'


export default function DeployButton({ type, label, onClick }: IButton) {
    return (
        <button
            type={type}
            onClick={onClick}
            className='group w-full py-3 mx-auto border rounded-md hover:bg-c-primary/15
             flex items-center justify-center gap-2 transition-colors hover:border-c-lav/40'>
            <Wand2 className='w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-c-lav' />
            <span className='group-hover:text-c-lav'>{label}</span>
        </button >
    )
}