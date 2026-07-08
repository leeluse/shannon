// 서버 컴포넌트로 동작(SSR)
// Next 리다이렉트 옵션
import { redirect } from 'next/navigation';
// supabase 신규 클라이언트
import { createClient } from "@/lib/supabase/server";
import { GoogleLoginBtn, KakaoLoginBtn, Logo } from '@/components';

export default async function LoginPage() {
  const supabase = await createClient();
  const { data: { user }, } = await supabase.auth.getUser();

  // 만약 유저가 존재할 경우 dashboard로 리디렉션
  if (user) {
    redirect('/dashboard');
  }


  return (
    <main className='flex min-h-screen backdrop-brightness-75 items-center justify-center'>
      <section className='py-10 px-5 rounded-3xl glass-login flex w-full max-w-[452px] flex-col justify-between gap-5'>
        <span className='border py-1 px-2.5 font-extrabold text-xs w-fit rounded-full bg-c-lav/10 border-c-lav/30 text-c-lav'>워크스페이스 로그인</span>
        <LoginHeader />
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
    </main>
  )
}


export function LoginHeader() {
  return (
    <header
      className='font-bold flex gap-2 items-center min-w-0 shrink-0'>
      <Logo type={'login'} />
    </header>
  )
}
