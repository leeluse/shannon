'use client'

import { useTabStore } from "@/store/useTabStore.";
import { useRouter } from "next/navigation";

interface ISideBarTabList {
    title: string;
    list: { id: number, icon: React.ReactNode, name: string }[];
}

export default function SideBarTabList({ title, list }: ISideBarTabList) {
    const { currTab, setTab } = useTabStore();
    const router = useRouter();

    const onClickProject = ({ id, name }: { id: number, name: string }) => {
        setTab(name)
        router.push(`/projects/${id}`)
    }

    return (
        <ul className='w-full flex flex-col gap-1.5 text-white/60'>
            <h3 className='text-[11px] '>{title}</h3>
            {list?.map(({ id, icon, name }) =>
                <li key={name} className={`py-2 px-3 text-[14px] w-full ${currTab === name && 'rounded-md bg-white/10 ring-1 ring-inset ring-c-white/10'}`}>
                    <button
                        onClick={() => onClickProject({ id, name })}
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
