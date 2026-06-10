import React from 'react'
import TemplateCard from '../card/TemplateCard'
import { TEMPLATES_FOR } from '@/constants/step-template'
import { useDeployStore } from '@/store/useDeployStore';
import { useFormContext } from 'react-hook-form';
import { ICard } from '@/types/modal/card';

export function SelectTargetStep() {
    const { setCard, card } = useDeployStore();
    const { setValue } = useFormContext<ICard>();

    const onClick = (id: number) => {
        setCard({ targetId: id })
        setValue('targetId', id);
    }

    return (
        <div className='grid grid-cols-2 gap-3 p-2'>
            {TEMPLATES_FOR.map((template) => (
                <div key={template.id}>
                    <TemplateCard {...template} onClick={() => onClick(template.id)} curId={card.targetId} />
                </div>
            ))}
        </div>
    )
}
