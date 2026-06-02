'use client'
import { PrimaryButton, SideBarTabList, Logo } from "@/components";
import { CUR_PROJ_MOCK_ITEMS, RECENTLY_PROJ_MOCK_ITEMS } from "@/mock/sidebar";
import { useRouter } from "next/navigation";

function SideBarHeader() {
    return (
        <header className='font-bold flex gap-4'>
            <Logo />
            <div className="flex flex-col gap-0">
                <h1 className='text-2xl text-mauve-600'>Shannon</h1>
                <span className='text-sm font-medium text-mauve-300'>v0.0.1</span>
            </div>
        </header>
    )
}

export default function SidebarPage() {
    const router = useRouter()
    return (
        <aside className='glass h-full grid grid-rows-[1fr_10fr_1fr]'>
            <SideBarHeader />
            <div className="flex flex-col gap-5">
                <SideBarTabList title={'프로젝트'} list={CUR_PROJ_MOCK_ITEMS} />
                <SideBarTabList title={'최근'} list={RECENTLY_PROJ_MOCK_ITEMS} />
            </div>
            <div className="flex items-end border-t border-white/10">
                <PrimaryButton
                    text={'Create Project'}
                    onClick={() => router.push('/projects/new')} />
            </div>
        </aside>
    );
}
