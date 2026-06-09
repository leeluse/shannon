import React from 'react'
import { TEMPLATES_STYLE } from '@/constants/step-template'
import OptionCard from '../card/OptionCard'
import { Wand2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function StepFifthTemplate() {
    const RESULT_TITLE = ['유형', '설명', '대상', '분위기'];
    return (
        <section className='size-full flex flex-col px-10 items-center justify-center gap-8'>

            <div className=' grid gap-4 grid-cols-2 w-full'>
                {RESULT_TITLE.map((title) => (
                    <CardTemplate key={title} title={title} value={'내용'} />
                ))}
            </div>
            <DeployButton />
        </section>
    )
}


export function CardTemplate({ title, value }: {
    title: string,
    value: string
}) {
    return (
        <div className='h-full p-3 rounded-md text-white flex justify-between flex-col gap-4
            bg-c-lav/5 border border-white/20'>
            <span className='text-gray'>{title}</span>
            <span>{value}</span>
        </div>
    )
}

export function DeployButton() {
    const router = useRouter();

    const DeployHandler = () => {
        alert('배포되었습니다');
        router.back();
    }
    return (
        <button
            onClick={DeployHandler}
            className='group w-full py-3 mx-auto border! border-white rounded-md hover:bg-c-primary/15!
             flex items-center justify-center gap-2 transition-colors hover:border-c-lav/40!'>
            <Wand2 className='w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-c-lav' />
            <span className='group-hover:text-c-lav'>Blueprint 생성하기</span>
        </button >
    )
}