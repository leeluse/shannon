'use client'

import { useTabStore } from "@/store/useTabStore.";

interface ISideBarTabList {
    title: string;
    list: { icon: React.ReactNode, name: string }[];
}

export default function SideBarTabList({ title, list }: ISideBarTabList) {
    const { currTab, setTab } = useTabStore();

    return (
        <ul className='w-full flex flex-col gap-1.5 text-white/60'>
            <h3 className='text-[11px] '>{title}</h3>
            {list?.map(({ icon, name }) =>
                <li key={name} className={`py-2 px-3 text-[14px] w-full ${currTab === name && 'rounded-md bg-white/10 ring-1 ring-inset ring-c-white/10'}`}>
                    <button
                        onClick={() => setTab(name)}
                        className="flex items-center gap-3 w-full min-w-0 text-left"
                    >
                        <div className={`shrink-0 ${currTab === name && 'text-white'}`}>
                            {icon}
                        </div>
                        <span className={`truncate ${currTab === name ? 'text-white' : ''}`} title={name}>{name}</span>
                    </button>
                </li>

            )}
        </ul>
    )
}
