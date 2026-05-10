'use client'

import { TAB_ITEMS } from "@/mock/sidebar"
import { Brain, Network } from "lucide-react"
import { useState } from "react"

export default function SideBarTab() {
    const [active, setActive] = useState<'Neural Core' | 'Latency Map'>('Neural Core')


    return (
        <ul className='w-full px-4 flex flex-col gap-1.5'>
            {TAB_ITEMS.map(({ icon, name }) =>
                <button key={name} onClick={() => setActive(name as 'Neural Core' | 'Latency Map')}>
                    <li className={`py-1 px-3 rounded-lg flex items-center gap-3 ${active === name ? 'bg-amber-50/10' : 'bg-transparent'}`}>
                        <div className={`${active === name ? 'text-pink-200' : 'text-mauve-500'}`}>
                            {icon}
                        </div>
                        <span className={`${active === name ? 'text-pink-200' : 'text-mauve-500'} font-bold text-lg`}>{name}</span>
                    </li>
                </button>

            )}
        </ul>
    )
}