'use client';

import { useRouter } from 'next/navigation';
import { GoogleLoginBtn, KakaoLoginBtn, Logo } from '@/components';
import { X } from 'lucide-react';
import { toast } from 'sonner';

export default function LoginModal() {
  const router = useRouter();

  const handleClose = () => {
    router.back(); // 모달 닫기
  };

  return (
    <div 
      className='fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center'
      onClick={handleClose}
    >
      <section 
        className='relative py-10 px-5 rounded-3xl glass-login flex w-full max-w-113 flex-col justify-between gap-5 text-white'
        onClick={(e) => e.stopPropagation()}  //  이벤트 전파 방지
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className='absolute top-5 right-5 text-slate-400 hover:text-white transition-colors'
          aria-label='Close modal'
        >
          <X className='w-5 h-5' />
        </button>

        <span className='border py-1 px-2.5 font-extrabold text-xs w-fit rounded-full bg-c-lav/10 border-c-lav/30 text-c-lav'>워크스페이스 로그인</span>
        
        <header className='font-bold flex gap-2 items-center min-w-0 shrink-0'>
          <Logo type={'login'} />
        </header>

        <div className='flex flex-col gap-2 mx-3'>
          <h1 className='text-3xl font-extrabold leading-tight'>로그인하고 이어서 시작하세요</h1>
          <p className='text-sm leading-6 text-slate-300'>저장된 프로젝트와 작업 흐름을 바로 이어서 시작해 보세요.</p>
        </div>

        <div className='mt-2 flex flex-col gap-4 mx-5'>
          <GoogleLoginBtn />
          <KakaoLoginBtn />
        </div>

        <span className='text-sm text-slate-400 mx-2'>로그인 후에는 자동으로 대시보드로 이동해요.</span>
      </section>
    </div>
  );
}
