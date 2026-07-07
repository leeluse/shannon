import type { ReactNode } from 'react';

type SocialLoginVariant = 'google' | 'kakao';

type SocialLoginContent = {
    title: string;
    description: string;
    buttonClassName: string;
    titleClassName: string;
    descriptionClassName: string;
    arrowClassName: string;
    renderMark: () => ReactNode;
};

const SOCIAL_LOGIN_CONTENT: Record<SocialLoginVariant, SocialLoginContent> = {
    google: {
        title: '구글로 계속하기',
        description: '저장된 프로젝트와 작업 기록을 동기화해요',
        buttonClassName: 'border border-slate-200/90 bg-white text-slate-900 shadow-[0_14px_30px_rgba(15,23,42,0.16)]',
        titleClassName: 'text-slate-900',
        descriptionClassName: 'text-slate-500',
        arrowClassName: 'text-slate-500',
        renderMark: () => (
            <div
                className="relative size-6 shrink-0 rounded-full"
                style={{ background: 'conic-gradient(#4285F4 0 25%, #34A853 25% 50%, #FBBC05 50% 75%, #EA4335 75% 100%)' }}
            >
                <div className="absolute inset-1 rounded-full bg-white" />
                <span className="relative z-10 flex size-full items-center justify-center text-[11px] font-black text-[#4285F4]">
                    G
                </span>
            </div>
        ),
    },
    kakao: {
        title: '카카오로 계속하기',
        description: '카카오 계정으로 더 빠르게 시작해요',
        buttonClassName: 'border border-[#FEE500]/20 bg-[#FEE500] text-[#191919] shadow-[0_14px_30px_rgba(15,23,42,0.14)]',
        titleClassName: 'text-[#191919]',
        descriptionClassName: 'text-[#191919]/70',
        arrowClassName: 'text-[#191919]/60',
        renderMark: () => (
            <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#191919] text-[10px] font-black text-[#FEE500]">
                K
            </div>
        ),
    },
};

function SocialLoginButton({ variant }: { variant: SocialLoginVariant }) {
    const content = SOCIAL_LOGIN_CONTENT[variant];

    return (
        <button
            type="button"
            className={`flex w-full items-center gap-3 rounded-[18px] px-4 py-3 text-left transition-transform duration-150 hover:-translate-y-0.5 ${content.buttonClassName}`}
        >
            {content.renderMark()}
            <div className="min-w-0 flex-1">
                <div className={`text-sm font-extrabold leading-[1.2] ${content.titleClassName}`}>
                    {content.title}
                </div>
                <div className={`mt-1 text-[10px] leading-[1.45] ${content.descriptionClassName}`}>
                    {content.description}
                </div>
            </div>
            <span className={`shrink-0 text-[15px] leading-none ${content.arrowClassName}`}>→</span>
        </button>
    );
}

export function GoogleLoginBtn() {
    return <SocialLoginButton variant="google" />;
}

export function KakaoLoginBtn() {
    return <SocialLoginButton variant="kakao" />;
}
