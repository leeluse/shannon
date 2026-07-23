"use client"
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import LogoutIcon from '../icon/LogoutIcon'

export default function LogoutBtn() {
    const router = useRouter()
    const supabase = createClient();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/');
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
