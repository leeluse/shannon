import React from 'react'
import { TEMPLATES_STYLE } from '@/constants/step-template'
import OptionCard from '../card/OptionCard'
import { useDeployStore } from '@/store/useDeployStore';
import { ICard } from '@/types/modal/card';
import { useFormContext } from 'react-hook-form';

export function SelectStyleStep() {
    const { card, setCard } = useDeployStore();
    const { setValue } = useFormContext<ICard>();

    const onChecked = (id: number) => {
        const nextIds = card.styleId.includes(id)
            ? card.styleId.filter((v) => v !== id)
            : [...card.styleId, id];

        setCard({ styleId: nextIds });
        setValue('styleId', nextIds);
    }

    return (
        <div className='px-10 flex flex-col gap-2'>
            {TEMPLATES_STYLE.map((styles) => (
                <div key={styles.id}>
                    <OptionCard {...styles}
                        onChecked={() => onChecked(styles.id)}
                        checked={card.styleId.includes(styles.id)}
                    />
                </div>
            ))}
        </div>
    )
}
