'use client';

import { PrimaryButton, SideBarTabList, Logo } from "@/components";
import { CUR_PROJ_MOCK_ITEMS, RECENTLY_PROJ_MOCK_ITEMS } from "@/mock/sidebar";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export function SideBarHeader() {
    const router = useRouter();
    const onClickHandler = () => {
        router.push('/dashboard');
    }

    return (
        <header
            className='font-bold flex gap-4 items-center min-w-0 shrink-0'>
            <Logo type={'common'} onClick={onClickHandler} />
        </header>
    )
}

export default function SidebarPage() {
    const router = useRouter()
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // 클라이언트 초기화
        const supabase = createClient();
        
        supabase.auth.getSession().then(({ data: { session } }) => {
            // session이 있으면 로그인 상태로 변경
            setIsLoggedIn(!!session);
        });
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            // 구독으로 실시간 변경사항 감지
            setIsLoggedIn(!!session);
        });

        // 구독 해제
        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const handleCreateProject = () => {
        if (isLoggedIn) {
            router.push('/projects/new');
        } else {
            router.push('/login');
        }
    }

    return (
        <aside className='glass h-full grid grid-rows-[1fr_10fr_1fr] min-w-0'>
            <SideBarHeader />
            <div className="flex flex-col gap-5 min-w-0 overflow-y-auto scrollbar-hidden">
                <SideBarTabList title={'프로젝트'} list={CUR_PROJ_MOCK_ITEMS} />
                <SideBarTabList title={'최근'} list={RECENTLY_PROJ_MOCK_ITEMS} />
            </div>
            <div className="flex items-end border-t border-white/10 pt-4 w-full">
                <PrimaryButton
                    label={'Create Project'}
                    onClick={handleCreateProject} />
            </div>
        </aside>
    );
}
