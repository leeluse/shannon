import Image from 'next/image'
import React from 'react'

export default function Logo() {
    return (
        <Image src="/logo.png" alt="Shannon Logo" width={48} height={48} className="size-12 rounded-xl" />
    )
}
