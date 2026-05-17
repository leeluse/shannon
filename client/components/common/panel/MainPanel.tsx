import React from 'react'
import { InitPanelIcon, InitPanelBtn } from '@/components'
import { INNERPANEL } from '@/constants/inner-panel'

export default function MainPanel() {
    return (
        <section className='size-full flex items-center justify-center'>
            <InitPanel />
        </section>
    )
}


export function InitPanel() {
    return (
        <div className='glass w-150 h-120 flex flex-col items-center justify-center gap-4'>
            <InitPanelIcon />
            <span className='font-black text-5xl text-c-text-primary'>{INNERPANEL.TITLE}</span>
            <p className='whitespace-pre text-center text-c-secondary-sub text-12'>{INNERPANEL.DESCRIPTION}</p>
            <InitPanelBtn />
        </div>
    )
}

