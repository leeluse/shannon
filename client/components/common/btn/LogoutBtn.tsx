"use client"
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import LogoutIcon from '../icon/LogoutIcon'
import { toast } from 'sonner'

export default function LogoutBtn() {
    const router = useRouter()
    const supabase = createClient();

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        
        if (error) {
            toast.error("로그아웃에 실패했습니다")
        } else {
            toast.success("로그아웃 되었습니다")
        }

        router.refresh(); // 서버 컴포넌트들을 다시 렌더링하여 ProfileMenu가 즉시 사라지도록 처리
    }
    
  return (
     <button
        onClick={handleLogout}
        className='flex items-center justify-center p-1 rounded-full hover:bg-white/5 active:scale-95 transition-all duration-200 cursor-pointer'
        title="로그아웃"
    >
        <LogoutIcon width={16} height={16} className='text-white/60 hover:text-white/90 transition-colors duration-200' />
    </button>
  )
}
