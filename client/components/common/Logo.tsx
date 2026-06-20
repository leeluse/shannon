"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Logo() {
    const router = useRouter();
    const onClickHandler = () => {
        router.push('/dashboard')
    }

    return (
        <>
            <div className="shrink-0">
                <LogoImg onClick={onClickHandler} />
            </div>
            <div className="flex flex-col gap-0 min-w-0">
                <button
                    onClick={onClickHandler}
                    className='text-2xl text-mauve-600 truncate'>Shannon</button>
                <span className='text-sm font-medium text-mauve-300 truncate'>v0.0.1</span>
            </div>
        </>
    )
}


export function LogoImg({ onClick }: {
    onClick?: () => void
}) {
    return (
        <Image
            src="/logo.png"
            alt="Shannon Logo"
            width={48} height={48}
            onClick={onClick}
            className="size-12 rounded-xl cursor-pointer" />
    )
}