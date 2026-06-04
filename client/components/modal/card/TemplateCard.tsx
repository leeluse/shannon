import { useDeployStore } from '@/store/useDeployStore';
import { ITemplateCard } from '@/types/modal/card';

export default function TemplateCard({ id, name, descript, icon: Icon }: ITemplateCard) {
    const { card, setCard } = useDeployStore();
    const style = {
        active: 'ring ring-c-lav/50',
        deactive: 'ring ring-c-gray/30'
    }
    return (
        <div
            role='button'
            onClick={() => setCard({ id: id, name: name, descript: descript })}
            className={`h-full p-5 rounded-md text-white flex flex-col cursor-pointer 
            ${card.id == id ? style['active'] : style['deactive']}`}>
            <div className="mb-2">
                <Icon size={30} className="text-c-gray" />
            </div>
            <h1 className='font-medium text-xl pb-2'>{name}</h1>
            <p className='text-xs text-c-gray'>{descript}</p>
        </div>
    )
}
