"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

type ILogo = { type: 'common' | 'login', onClick?: () => void }

export default function Logo({ type, onClick }: ILogo) {
    const router = useRouter();
    const TypeTemplate = {
        'common': ['text-2xl text-mauve-600 truncate', 'text-sm font-medium text-mauve-300 truncate'],
        'login': ['text-4xl text-white truncate font-extrabold ', 'text-sm font-medium text-mauve-300/70 truncate'],
    }

    const handleLogoClick = () => {
        if (onClick) {
            onClick();
        } else {
            router.push('/dashboard');
        }
    }

    return (
        <>
            <div className="shrink-0">
                <LogoImg type={type} onClick={handleLogoClick} />
            </div>
            <div className="flex flex-col gap-0 min-w-0">
                <button
                    onClick={handleLogoClick}
                    className={`${TypeTemplate[type][0]}`}>Shannon</button>
                <span className={`${TypeTemplate[type][1]}`}>v0.0.1 워크스페이스</span>
            </div>
        </>
    )
}


export function LogoImg({ type, onClick }: ILogo) {
    return (
        <>
            {type === 'common' && (
                <Image
                    src="/logo.svg"
                    alt="Shannon Logo"
                    width={48} height={48}
                    onClick={onClick}
                    className="size-12 rounded-xl cursor-pointer" />
            )}
            {type === 'login' && (
                <Image
                    src="/logo_large.svg"
                    alt="Shannon Logo"
                    width={100} height={100}
                    onClick={onClick}
                    className="size-25 rounded-xl cursor-pointer " />
            )}
        </>
    )
}