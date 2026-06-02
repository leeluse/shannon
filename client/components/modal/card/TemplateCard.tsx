import { useDeployStore } from '@/store/useDeployStore';
import { ITemplateCard } from '@/types/modal/card'


export default function TemplateCard({ id, name, keyword, descript }: ITemplateCard) {
    const { card, setCard } = useDeployStore();
    const style = {
        active: 'ring ring-c-lav/50',
        deactive: 'ring ring-c-lav/20'
    }
    return (
        <div
            role='button'
            onClick={() => setCard(id, name, descript)}
            className={`h-40 p-3 rounded-md text flex flex-col cursor-pointer 
            ${card.id == id ? style['active'] : style['deactive']}`}>
            <h1 className='font-bold text-2xl pb-2'>{name}</h1>
            <div className='flex pb-5 text-xs'>
                {keyword.map((item, idx) => (
                    <div key={idx}>
                        <span
                            key={item} className='text-zinc-400'>{item}
                        </span>
                        <span className='px-1'>
                            {idx !== keyword.length - 1 ? '/' : ''}
                        </span>
                    </div>
                ))}
            </div>
            <p className='font-medium text-xs text-c-gray'>{descript}</p>
        </div>
    )
}
