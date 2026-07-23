import { createClient } from '@/lib/supabase/server';
import Image from 'next/image'
import LogoutBtn from '../common/btn/LogoutBtn';

export default async function ProfileMenu() {
    const supabase = await createClient();
    const {data: {user} } = await supabase.auth.getUser();

    // metadata에서 프로필 이미지와 이름 추출
    const avatarUrl = user?.user_metadata?.avatar_url || "/profile.svg"; 
    const name = user?.user_metadata?.name || user?.user_metadata?.full_name || "익명의 작업자";

    if(!user) {
        return null;
    }

    return (
        <aside className='absolute top-6 right-5 h-10 flex items-center justify-between px-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full shadow-sm select-none'>
        <div className='flex items-center justify-between gap-2.5'>
            <Image 
                src={avatarUrl} 
                alt="Profile" 
                width={25} 
                height={25} 
                className='rounded-full border border-white/10 object-cover'
            />
            <span className='text-sm font-bold text-white/80 min-w-fit select-none'>{name}</span>
        </div>
        <div className='w-px h-4 bg-white/10 mx-2' />
        {user && <LogoutBtn />}
    </aside>
  )
}


