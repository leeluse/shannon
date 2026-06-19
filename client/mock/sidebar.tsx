import { FolderHeart, LayoutDashboard, Presentation, Rocket, Store } from "lucide-react";

export const CUR_PROJ_MOCK_ITEMS = [
    { id: 1, icon: <FolderHeart size={20} strokeWidth={2.5} />, name: '포트폴리오 사이트 만들기' },
    { id: 2, icon: <LayoutDashboard size={20} strokeWidth={2.5} />, name: '관리자 대시보드 리팩토링' },
    { id: 3, icon: <Presentation size={20} strokeWidth={2.5} />, name: '웹 기초 강의 PPT' },
]

export const RECENTLY_PROJ_MOCK_ITEMS = [
    { id: 4, icon: <Rocket size={20} strokeWidth={2.5} />, name: 'SaaS 랜딩 페이지' },
    { id: 5, icon: <Store size={20} strokeWidth={2.5} />, name: '이커머스 백오피스' },
]
