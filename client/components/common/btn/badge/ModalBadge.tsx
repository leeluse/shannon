import React from 'react'

export default function ModalBadge({ text }: { text: string }) {
    return (
        <span className='bg-white/5 border border-white/15 text-white text-[14px] px-5 py-2 rounded-full'>{text}</span>
    )
}
