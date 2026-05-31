'use client'
import { PrimaryButton, SideBarTabList } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";

function SideBarHeader() {
    return (
        <header className='px-2 font-bold flex gap-4 items-center'>
            <Image src="/logo.svg" alt="Shannon Logo" width={48} height={48} className="size-12" />
            <div className="flex flex-col gap-0">
                <h1 className='text-2xl text-mauve-600'>Shannon</h1>
                <span className='text-sm font-medium text-mauve-300'>v4.2.0-stable</span>
            </div>
        </header>
    )
}

export default function SidebarPage() {
    const router = useRouter()
    return (
        <aside className='glass h-full grid grid-rows-[1fr_7fr_1fr]'>
            <SideBarHeader />
            <SideBarTabList />
            <div className='pt-10'>
                <PrimaryButton
                    text={'Create AI Brief'}
                    onClick={() => router.push('/agents/new')} />
            </div>
        </aside>
    );
}
