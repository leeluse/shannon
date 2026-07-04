import { InitPanelIcon, InitPanelBadge, Dashboard } from '@/components'
import { INNERPANEL } from '@/constants/inner-panel'

export default function InitPanel() {
    return (
        <div className='glass w-170 h-120 flex flex-col items-center justify-center gap-4'>
            <InitPanelIcon />
            <span className='font-bold text-5xl text-c-white'>{INNERPANEL?.TITLE}</span>
            <p className='whitespace-pre text-center text-c-gray text-[12px] font-medium'>{INNERPANEL?.DESCRIPTION}</p>
            <InitPanelBadge />
        </div>
    )
}
