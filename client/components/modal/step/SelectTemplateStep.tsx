import React from 'react'
import TemplateCard from '../card/TemplateCard'
import { TEMPLATES } from '@/constants/step-template'
import { useDeployStore } from '@/store/useDeployStore';
import { ICard } from '@/types/modal/card';
import { useFormContext } from 'react-hook-form';

export function SelectTemplateStep() {
    const { card, setCard } = useDeployStore();
    const { setValue } = useFormContext<ICard>();

    const onClick = (id: number) => {
        setCard({ templateId: id })
        setValue('templateId', id);
    }

    return (
        <div className='grid grid-cols-3 gap-3 p-2'>
            {TEMPLATES.map((template) => (
                <div key={template.id}>
                    <TemplateCard {...template} onClick={() => onClick(template.id)} curId={card.templateId} />
                </div>
            ))}
        </div>
    )
}
