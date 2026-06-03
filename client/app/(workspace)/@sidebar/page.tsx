'use client'
import { PrimaryButton, SideBarTabList, Logo } from "@/components";
import { CUR_PROJ_MOCK_ITEMS, RECENTLY_PROJ_MOCK_ITEMS } from "@/mock/sidebar";
import { useRouter } from "next/navigation";

function SideBarHeader() {
    return (
        <header className='font-bold flex gap-4 items-center min-w-0 shrink-0'>
            <div className="shrink-0">
                <Logo />
            </div>
            <div className="flex flex-col gap-0 min-w-0">
                <h1 className='text-2xl text-mauve-600 truncate'>Shannon</h1>
                <span className='text-sm font-medium text-mauve-300 truncate'>v0.0.1</span>
            </div>
        </header>
    )
}

export default function SidebarPage() {
    const router = useRouter()
    return (
        <aside className='glass h-full grid grid-rows-[1fr_10fr_1fr] min-w-0'>
            <SideBarHeader />
            <div className="flex flex-col gap-5 min-w-0 overflow-y-auto scrollbar-hidden">
                <SideBarTabList title={'프로젝트'} list={CUR_PROJ_MOCK_ITEMS} />
                <SideBarTabList title={'최근'} list={RECENTLY_PROJ_MOCK_ITEMS} />
            </div>
            <div className="flex items-end border-t border-white/10 pt-4 w-full">
                <PrimaryButton
                    text={'Create Project'}
                    onClick={() => router.push('/projects/new')} />
            </div>
        </aside>
    );
}
