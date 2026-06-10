import { useDeployStore } from '@/store/useDeployStore';
import { ITemplateCard } from '@/types/modal/card';

export default function TemplateCard({ id, name, description, icon: Icon, onClick, curId }: ITemplateCard) {
    const style = {
        active: 'ring ring-c-lav/50',
        deactive: 'ring ring-c-gray/30'
    }
    return (
        <button
            onClick={onClick}
            className={`size-full p-5 rounded-md text-white flex flex-col text-start
            ${curId == id ? style['active'] : style['deactive']}`}>
            <div className="mb-2">
                <Icon size={30} className="text-c-gray" />
            </div>
            <h1 className='font-medium text-xl pb-2'>{name}</h1>
            <p className='text-xs text-c-gray'>{description}</p>
        </button>
    )
}
