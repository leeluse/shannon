// Next 리다이렉트 옵션
import { redirect } from 'next/navigation';
// supabase 신규 클라이언트
import { createClient } from "@/lib/supabase/server";

export default async function LoginPage() {
  const supabase = await createClient();
  const { data: { user },  } = await supabase.auth.getUser();
  
  // 만약 유저가 존재하지 않을 경우
  if(user) {
    redirect('/dashboard');
  }
  return (
    <>
    
    </>
    //   <main className="flex min-h-screen items-center justify-center bg-black text-white">
    //   <section className="w-full max-w-sm rounded-2xl border border-white/10 p-6">
    //     <h1 className="text-2xl font-bold">Sign in to Shannon</h1>
    //     <p className="mt-2 text-sm text-white/60">
    //       프로젝트와 자동화 흐름을 저장하려면 로그인이 필요합니다.
    //     </p>

    //     <div className="mt-6">
    //       {/* <LoginButton /> */}
    //     </div>
    //   </section>
    // </main>
  )
}
