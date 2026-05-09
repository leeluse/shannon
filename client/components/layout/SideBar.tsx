import React from 'react'
import { ActiveAgentsList, SideNavBarHeader, SideBarTabList, PrimaryButton } from '../'

export default function SideBar() {
    return (
        <aside className='glass h-full w-1/4 grid grid-rows-[1fr_7fr_1fr_1fr]'>
            <SideNavBarHeader />
            <SideBarTabList />
            <ActiveAgentsList />
            <div className='pt-10'>
                <PrimaryButton text={'Deploy Agents'} onClick={() => console.log()} />
            </div>
        </aside>
    )
}

